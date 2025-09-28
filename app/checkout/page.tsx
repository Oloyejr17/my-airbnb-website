"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { mockListings } from "@/data/listings";
import { mockExperiences } from "@/data/experiences";
import { mockServices } from "@/data/services";
import { differenceInDays, format } from "date-fns";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useSession } from "next-auth/react";
import RandomBgWrapper from "@/components/RandomBgWrapper";

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);

  // query params
  const listingId = searchParams.get("listingId");
  const checkIn = searchParams.get("checkIn");
  const checkOut = searchParams.get("checkOut");
  const guests = searchParams.get("guests");
  const experienceId = searchParams.get("experienceId");
  const serviceId = searchParams.get("serviceId");

  // determine what is being booked
  let item: any = null;
  let itemType: "listing" | "experience" | "service" | null = null;
  let nights = 1;
  let totalPrice = 0;

  if (listingId && checkIn && checkOut && guests) {
    item = mockListings.find((l) => l.id === Number(listingId));
    itemType = "listing";
    nights = differenceInDays(new Date(checkOut), new Date(checkIn));
    totalPrice = item ? Number(item.price) * nights : 0;
  } else if (experienceId) {
    item = mockExperiences.find((e) => e.id === Number(experienceId));
    itemType = "experience";
    totalPrice = item ? Number(item.price) : 0;
  } else if (serviceId) {
    item = mockServices.find((s) => s.id === Number(serviceId));
    itemType = "service";
    totalPrice = item ? Number(item.price) : 0;
  }

  if (!item) {
    return (
      <RandomBgWrapper>
        <div className="max-w-2xl mx-auto p-6 text-center bg-white/20 backdrop-blur-md rounded-xl shadow text-white">
          <h1 className="text-xl font-semibold">Invalid booking</h1>
          <p className="text-gray-200">
            Missing or incorrect details. Please go back and try again.
          </p>
        </div>
      </RandomBgWrapper>
    );
  }

  const handleProceedToPayment = async () => {
    if (!session) {
      // Preserve full checkout URL for redirect after login
      const callbackUrl = encodeURIComponent(window.location.href);
      router.push(`/auth/login?callbackUrl=${callbackUrl}`);
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/checkout_sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: itemType,
          id: item.id,
          checkIn,
          checkOut,
          guests,
          totalPrice,
        }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url; // Redirect directly to Stripe Checkout
      } else {
        alert("Failed to start checkout session.");
      }
    } catch (err) {
      console.error("Checkout error:", err);
      alert("Something went wrong while starting payment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <RandomBgWrapper>
      <main className="max-w-3xl mx-auto p-6 space-y-6 text-white">
        {/* Back Button */}
        <button
          onClick={() =>
            router.push(
              itemType === "listing"
                ? `/listings/${item.id}`
                : itemType === "experience"
                ? `/experiences/${item.id}`
                : `/services/${item.id}`
            )
          }
          className="flex items-center gap-2 text-gray-200 hover:text-red-400 transition"
        >
          <ArrowLeftIcon className="w-5 h-5" />
          Back
        </button>

        {/* Heading */}
        <h1 className="text-2xl font-bold">Confirm your booking</h1>

        {/* Item Summary */}
        <div className="border rounded-xl shadow p-4 flex gap-4 bg-white/20 backdrop-blur-md">
          <div className="relative w-32 h-32 rounded-lg overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            {item.location && <p className="text-gray-200">{item.location}</p>}

            {itemType === "listing" && (
              <>
                <p className="mt-2">
                  <span className="font-medium">Check-in:</span>{" "}
                  {format(new Date(checkIn!), "MMM dd, yyyy")}
                </p>
                <p>
                  <span className="font-medium">Check-out:</span>{" "}
                  {format(new Date(checkOut!), "MMM dd, yyyy")}
                </p>
                <p>
                  <span className="font-medium">Guests:</span> {guests}
                </p>
              </>
            )}
          </div>
        </div>

        {/* Price Summary */}
        <div className="p-4 border rounded-xl shadow bg-white/20 backdrop-blur-md">
          {itemType === "listing" ? (
            <p className="text-lg">
              ${item.price} / night × {nights} nights
            </p>
          ) : (
            <p className="text-lg">${item.price}</p>
          )}
          <hr className="my-2 border-gray-400" />
          <p className="text-xl font-semibold">
            Total: ${totalPrice.toLocaleString()}
          </p>
        </div>

        {/* Checkout Button */}
        <button
          onClick={handleProceedToPayment}
          disabled={loading}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold transition disabled:opacity-50"
        >
          {loading
            ? "Redirecting..."
            : session
            ? "Confirm & Pay"
            : "Login to Continue"}
        </button>
      </main>
    </RandomBgWrapper>
  );
}

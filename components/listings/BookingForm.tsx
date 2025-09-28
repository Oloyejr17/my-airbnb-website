"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Listing } from "@/data/listings";
import DatePicker from "@/components/searchbar/DatePicker";
import GuestsInput from "@/components/searchbar/GuestsInput";

interface BookingFormProps {
  listing: Listing;
}

export default function BookingForm({ listing }: BookingFormProps) {
  const router = useRouter();
  const { data: session } = useSession();

  const [dates, setDates] = useState<{ startDate: Date | null; endDate: Date | null }>({
    startDate: null,
    endDate: null,
  });

  const [guestCounts, setGuestCounts] = useState({
    adults: 1,
    children: 0,
    infants: 0,
    pets: 0,
    serviceAnimal: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dates.startDate || !dates.endDate) return;

    const query = new URLSearchParams({
      listingId: listing.id.toString(),
      checkIn: dates.startDate.toISOString().split("T")[0],
      checkOut: dates.endDate.toISOString().split("T")[0],
      guests: (
        guestCounts.adults +
        guestCounts.children +
        guestCounts.infants +
        guestCounts.pets
      ).toString(),
      serviceAnimal: guestCounts.serviceAnimal.toString(),
    }).toString();

    const checkoutUrl = `/checkout?${query}`;

    if (!session) {
      // ✅ full URL so NextAuth preserves params
      const fullUrl = `${window.location.origin}${checkoutUrl}`;
      router.push(`/auth/login?callbackUrl=${encodeURIComponent(fullUrl)}`);
      return;
    }

    router.push(checkoutUrl);
  };

  const isDisabled = !dates.startDate || !dates.endDate;

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 border rounded-xl shadow space-y-6 bg-white"
      onKeyDown={(e) => {
        if (e.key === "Enter") e.preventDefault();
      }}
    >
      <h2 className="text-2xl font-semibold">Book this place</h2>
      <p className="text-gray-500">${listing.price}/night</p>

      <DatePicker dates={dates} setDates={setDates} />
      <GuestsInput counts={guestCounts} onChange={setGuestCounts} />

      <button
        type="submit"
        disabled={isDisabled}
        className={`w-full py-3 px-4 rounded-lg font-medium transition 
          ${isDisabled
            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
            : "bg-red-500 text-white hover:bg-red-600"
          }`}
      >
        Proceed
      </button>
    </form>
  );
}

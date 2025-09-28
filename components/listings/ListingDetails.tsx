"use client";

import { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import { Listing } from "@/data/listings";
import BookingForm from "./BookingForm";
import RandomBgWrapper from "@/components/RandomBgWrapper";

interface Props {
  listing: Listing;
}

export default function ListingDetails({ listing }: Props) {
  const [mainImageIndex, setMainImageIndex] = useState(0);

  const images = [
    listing.image,
    listing.image + "&1",
    listing.image + "&2",
    listing.image + "&3",
  ];

  return (
    <RandomBgWrapper>
      <main className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8 text-white">
        {/* Left Column: Images & Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Image Carousel */}
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
            <Image
              src={images[mainImageIndex]}
              alt={listing.title}
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2 mt-2">
            {images.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setMainImageIndex(idx)}
                className={`relative w-24 h-24 rounded-lg overflow-hidden cursor-pointer border-2 ${
                  idx === mainImageIndex ? "border-red-500" : "border-white/50"
                }`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${idx}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Listing Info */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">{listing.title}</h1>
            <p className="text-white/80">{listing.location}</p>
            <div className="flex items-center gap-2">
              <StarIcon className="w-5 h-5 text-yellow-400" />
              <span>{listing.rating}</span>
            </div>

            {/* Description */}
            <div className="mt-4">
              <h2 className="text-xl font-semibold mb-2">About this place</h2>
              <p className="text-white/80">
                Experience comfort and style in this beautiful property. Enjoy a
                relaxing stay with modern amenities, spacious rooms, and a
                convenient location close to attractions and restaurants.
              </p>
            </div>

            {/* Amenities */}
            <div className="mt-4">
              <h2 className="text-xl font-semibold mb-2">Amenities</h2>
              <ul className="grid grid-cols-2 gap-2 text-white/80">
                <li>Wi-Fi</li>
                <li>Air Conditioning</li>
                <li>Kitchen</li>
                <li>Washer</li>
                <li>Heating</li>
                <li>Free Parking</li>
              </ul>
            </div>

            {/* Reviews */}
            <div className="mt-4">
              <h2 className="text-xl font-semibold mb-2">Reviews</h2>
              <div className="space-y-2">
                <div className="p-3 border border-white/30 rounded-lg">
                  <p className="font-medium">John D.</p>
                  <p className="text-white/70 text-sm">
                    "Amazing stay! The place was clean and cozy. Highly
                    recommend."
                  </p>
                </div>
                <div className="p-3 border border-white/30 rounded-lg">
                  <p className="font-medium">Sophie L.</p>
                  <p className="text-white/70 text-sm">
                    "Great location and beautiful interior. We had a wonderful
                    time."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Booking Form */}
        <div>
          <BookingForm listing={listing} />
        </div>
      </main>
    </RandomBgWrapper>
  );
}

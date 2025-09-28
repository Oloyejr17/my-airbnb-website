"use client";

import Image from "next/image";
import Link from "next/link";
import { StarIcon } from "@heroicons/react/24/solid";
import { Listing } from "@/data/listings";
import HeartButton from "@/components/ui/HeartButton";

interface Props {
  listing: Listing;
}

export default function ListingCard({ listing }: Props) {
  return (
    <Link href={`/listings/${listing.id}`} className="block">
      <div className="relative cursor-pointer transition transform hover:scale-105 hover:shadow-lg rounded-xl overflow-hidden bg-white">
        <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-60">
          <Image
            src={listing.image}
            alt={listing.title}
            fill
            className="object-cover rounded-t-xl"
            sizes="(max-width: 640px) 100vw,
                   (max-width: 768px) 50vw,
                   (max-width: 1024px) 33vw,
                   25vw"
          />
          <HeartButton
            itemId={listing.id}
            itemType="listing"
            title={listing.title}
            price={listing.price}
            location={listing.location}
            image={listing.image}
          />
        </div>

        <div className="p-3">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
            <h3 className="text-sm sm:text-base font-semibold break-words">
              {listing.title}
            </h3>
            <div className="flex items-center gap-1 text-sm">
              <StarIcon className="h-4 w-4 text-yellow-500" />
              {listing.rating}
            </div>
          </div>
          <p className="text-gray-500 text-xs sm:text-sm truncate">{listing.location}</p>
          <p className="mt-2 font-semibold text-sm sm:text-base">${listing.price}/night</p>
        </div>
      </div>
    </Link>
  );
}

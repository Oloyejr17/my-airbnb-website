"use client";

import Image from "next/image";
import Link from "next/link";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useWishlist, WishlistItem } from "@/app/context/WishlistContext";

interface WishlistCardProps {
  item: WishlistItem;
}

export default function WishlistCard({ item }: WishlistCardProps) {
  const { removeItem } = useWishlist();

  // Determine the correct link based on item type
  const href =
    item.type === "listing"
      ? `/listings/${item.id}`
      : item.type === "experience"
      ? `/experiences/${item.id}`
      : `/services/${item.id}`;

  return (
    <Link href={href} className="block group">
      <div className="bg-gray-800 rounded-2xl shadow hover:shadow-lg transition overflow-hidden flex flex-col relative">
        {/* Image */}
        <div className="relative w-full h-40 rounded-t-2xl overflow-hidden">
          <Image
            src={item.image || "/images/placeholder.jpg"}
            alt={item.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform"
          />
          {/* Remove Button */}
          <button
            onClick={(e) => {
              e.preventDefault(); // Prevent Link navigation
              e.stopPropagation();
              removeItem(item.id, item.type);
            }}
            className="absolute top-2 right-2 p-1 bg-white rounded-full shadow hover:bg-gray-100 transition z-10"
            aria-label="Remove from wishlist"
          >
            <TrashIcon className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Info */}
        <div className="mt-2 p-3">
          <h3 className="text-white font-semibold text-sm">{item.title}</h3>
          {item.location && (
            <p className="text-gray-400 text-xs">{item.location}</p>
          )}
          {item.price !== undefined && (
            <p className="text-gray-200 text-sm mt-1">${item.price}</p>
          )}
          <p className="text-gray-400 text-xs mt-1 uppercase">{item.type}</p>
        </div>
      </div>
    </Link>
  );
}

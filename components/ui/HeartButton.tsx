"use client";

import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";
import { useWishlist } from "@/app/context/WishlistContext";

interface HeartButtonProps {
  itemId: number;
  itemType: "listing" | "experience" | "service";
  title: string;
  price?: number;
  location?: string;
  image: string;
  className?: string;
}

export default function HeartButton({
  itemId,
  itemType,
  title,
  price,
  location,
  image,
  className = "",
}: HeartButtonProps) {
  const { toggleLike, isLiked } = useWishlist();
  const liked = isLiked(itemId, itemType);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Prevent Link navigation
    e.preventDefault();  // Also prevent default just in case
    toggleLike({ id: itemId, type: itemType, title, price, location, image });
  };

  return (
    <button
      onClick={handleClick}
      className={`absolute top-2 right-2 p-1 z-10 pointer-events-auto ${className}`}
      aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
    >
      {liked ? (
        <HeartSolid className="w-6 h-6 text-red-500 drop-shadow" />
      ) : (
        <HeartOutline className="w-6 h-6 text-white drop-shadow" />
      )}
    </button>
  );
}

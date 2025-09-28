"use client";

import { useRouter } from "next/navigation";
import WishlistCard from "@/components/WishlistCard";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useWishlist } from "@/app/context/WishlistContext";
import RandomBgWrapper from "@/components/RandomBgWrapper";

export default function WishlistsPage() {
  const router = useRouter();
  const { items: wishlists } = useWishlist();

  return (
    <RandomBgWrapper>
      <main className="pt-24 px-4 sm:px-6 md:px-8 max-w-screen-xl mx-auto text-white">
        <button
          onClick={() => router.back()}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition mb-6"
          aria-label="Go back"
        >
          <ArrowLeftIcon className="w-5 h-5 text-white" />
        </button>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
          My Wishlist
        </h1>

        {wishlists.length === 0 ? (
          <div className="text-center text-gray-200 py-20">
            <p className="text-lg">Your wishlist is empty.</p>
            <p className="text-sm">
              Start exploring and tap the ❤️ to build your wishlist.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {wishlists.map((item) => (
              <WishlistCard key={`${item.type}-${item.id}`} item={item} />
            ))}
          </div>
        )}
      </main>
    </RandomBgWrapper>
  );
}

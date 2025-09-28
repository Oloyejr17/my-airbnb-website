"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type WishlistItem = {
  id: number;
  type: "listing" | "experience" | "service";
  title: string;
  location?: string;
  price?: number;
  image: string;
};

type WishlistContextType = {
  items: WishlistItem[];
  addItem: (item: WishlistItem) => void;
  removeItem: (id: number, type: WishlistItem["type"]) => void;
  toggleLike: (item: WishlistItem) => void;
  isLiked: (id: number, type: WishlistItem["type"]) => boolean;
};

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<WishlistItem[]>([]);

  // Load wishlist from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("wishlist");
      if (stored) setItems(JSON.parse(stored));
    }
  }, []);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("wishlist", JSON.stringify(items));
    }
  }, [items]);

  const addItem = (item: WishlistItem) => setItems((prev) => [...prev, item]);

  const removeItem = (id: number, type: WishlistItem["type"]) =>
    setItems((prev) => prev.filter((i) => i.id !== id || i.type !== type));

  const toggleLike = (item: WishlistItem) => {
    const exists = items.some((i) => i.id === item.id && i.type === item.type);
    if (exists) removeItem(item.id, item.type);
    else addItem(item);
  };

  const isLiked = (id: number, type: WishlistItem["type"]) =>
    items.some((i) => i.id === id && i.type === type);

  return (
    <WishlistContext.Provider value={{ items, addItem, removeItem, toggleLike, isLiked }}>
      {children}
    </WishlistContext.Provider>
  );
};

// Named export
export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) throw new Error("useWishlist must be used within a WishlistProvider");
  return context;
};

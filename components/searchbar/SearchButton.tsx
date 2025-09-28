"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

interface SearchButtonProps {
  onClick?: () => void;
}

export default function SearchButton({ onClick }: SearchButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition"
    >
      <MagnifyingGlassIcon className="w-5 h-5" />
      <span>Search</span>
    </button>
  );
}

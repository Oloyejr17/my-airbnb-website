"use client";

import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

interface SearchBarProps {
  onSearch: (destination: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [destination, setDestination] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDestination(value);
    onSearch(value); // Live filtering as user types
  };

  return (
    <div className="flex items-center w-full max-w-md bg-gray-100 rounded-full px-4 py-2 shadow-md">
      <input
        type="text"
        value={destination}
        onChange={handleChange}
        placeholder="Search destinations"
        className="flex-1 outline-none bg-transparent text-gray-900 placeholder-gray-500"
      />
      <button
        type="button"
        onClick={() => onSearch(destination)}
        className="ml-2 p-2 bg-white rounded-full shadow hover:bg-gray-100 transition"
      >
        <MagnifyingGlassIcon className="w-5 h-5 text-black" />
      </button>
    </div>
  );
}

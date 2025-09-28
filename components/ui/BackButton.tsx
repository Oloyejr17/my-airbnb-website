"use client";

import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-2 text-white bg-gray-700/70 hover:bg-gray-700 px-4 py-2 rounded-lg transition"
    >
      <ArrowLeftIcon className="w-5 h-5" />
      <span>Back</span>
    </button>
  );
}

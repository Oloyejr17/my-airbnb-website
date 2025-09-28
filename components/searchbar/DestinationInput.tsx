"use client";

import { useState, useEffect, useRef, JSX } from "react";
import { MapPinIcon, GlobeAltIcon, FireIcon } from "@heroicons/react/24/outline";

interface Suggestion {
  display_name: string;
  subtitle?: string;
  icon?: JSX.Element;
}

interface DestinationInputProps {
  value: string;
  onChange: (val: string) => void;
}

const trendingDestinations: Suggestion[] = [
  { display_name: "New York, USA", subtitle: "The city that never sleeps", icon: <GlobeAltIcon className="w-6 h-6 text-blue-500" /> },
  { display_name: "Paris, France", subtitle: "The city of lights", icon: <FireIcon className="w-6 h-6 text-pink-500" /> },
  { display_name: "Tokyo, Japan", subtitle: "Tradition meets technology", icon: <MapPinIcon className="w-6 h-6 text-green-500" /> },
  { display_name: "London, UK", subtitle: "Historic capital of England", icon: <GlobeAltIcon className="w-6 h-6 text-purple-500" /> },
  { display_name: "Dubai, UAE", subtitle: "Luxury in the desert", icon: <FireIcon className="w-6 h-6 text-orange-500" /> },
];

export default function DestinationInput({ value, onChange }: DestinationInputProps) {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value.length < 2) return setSuggestions([]);

    const timeout = setTimeout(async () => {
      try {
        const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&limit=10&q=${encodeURIComponent(value)}`);
        const data = await res.json();

        const formatted = data.map((item: any) => {
          const addr = item.address || {};
          const city = addr.city || addr.town || addr.village;
          const state = addr.state;
          const country = addr.country;
          const display = city ? `${city}, ${country}` : state ? `${state}, ${country}` : country;
          return { display_name: display, subtitle: country ? `Explore ${country}` : "Popular destination", icon: <MapPinIcon className="w-6 h-6 text-gray-500" /> };
        });

        setSuggestions(formatted);
        setHighlightIndex(0);
      } catch (err) {
        console.error(err);
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [value]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="flex-1 px-3 py-2 relative z-50">
      <div className="text-[11px] font-semibold text-gray-800 tracking-wide mb-1 transition-colors group-hover:text-white">Where</div>
      <input
        type="text"
        placeholder="Search destinations"
        value={value}
        onChange={(e) => { onChange(e.target.value); setHighlightIndex(0); }}
        onFocus={() => setShowSuggestions(true)}
        className="w-full outline-none text-sm font-medium text-gray-900 placeholder-gray-400 bg-transparent"
      />

      {showSuggestions && (
        <ul className="absolute left-0 mt-2 w-full bg-white rounded-xl shadow-lg max-h-64 overflow-y-auto z-[999] divide-y">
          {(value.length < 2 ? trendingDestinations : suggestions).map((dest, idx) => (
            <li
              key={idx}
              onMouseDown={() => { onChange(dest.display_name); setShowSuggestions(false); }}
              className={`flex items-center gap-3 px-4 py-3 cursor-pointer ${idx === highlightIndex ? "bg-gray-100" : "hover:bg-gray-100"}`}
            >
              {dest.icon}
              <div>
                <div className="font-medium text-gray-900">{dest.display_name}</div>
                <div className="text-sm text-gray-500">{dest.subtitle || "Popular destination"}</div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

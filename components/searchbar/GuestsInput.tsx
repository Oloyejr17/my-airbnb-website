"use client";

import { useState, useRef, useEffect } from "react";

interface Guests {
  adults: number;
  children: number;
  infants: number;
  pets: number;
  serviceAnimal: boolean;
}

interface GuestsInputProps {
  counts: Guests;
  onChange?: (guests: Guests) => void;
}

export default function GuestsInput({ counts, onChange }: GuestsInputProps) {
  const { adults, children, infants, pets, serviceAnimal } = counts;
  const containerRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const increment = (key: keyof Guests) => {
    if (key === "serviceAnimal") return;
    const updated = { ...counts, [key]: (counts[key] as number) + 1 } as Guests;
    onChange?.(updated);
  };

  const decrement = (key: keyof Guests) => {
    if (key === "serviceAnimal") return;
    if ((counts[key] as number) <= 0) return;
    const updated = { ...counts, [key]: (counts[key] as number) - 1 } as Guests;
    onChange?.(updated);
  };

  const toggleServiceAnimal = () => {
    const updated = { ...counts, serviceAnimal: !counts.serviceAnimal };
    onChange?.(updated);
  };

  const totalGuests = adults + children + infants + pets;

  return (
    <div ref={containerRef} className="relative px-3 py-2">
      {/* Label */}
      <div className="text-[11px] font-semibold text-gray-800 tracking-wide mb-1 transition-colors group-hover:text-white">
        Who
      </div>

      {/* Input Summary */}
      <div
        className="cursor-pointer text-sm font-medium text-gray-900 transition-colors group-hover:text-white"
        onClick={() => setOpen(!open)}
      >
        {totalGuests > 0 ? `${totalGuests} guest${totalGuests > 1 ? "s" : ""}` : "Add guests"}
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg text-gray-900 p-4 z-50">
          <Row label="Adults" value={adults} onDecrement={() => decrement("adults")} onIncrement={() => increment("adults")} />
          <Row label="Children" value={children} onDecrement={() => decrement("children")} onIncrement={() => increment("children")} />
          <Row label="Infants" value={infants} onDecrement={() => decrement("infants")} onIncrement={() => increment("infants")} />
          <Row label="Pets" value={pets} onDecrement={() => decrement("pets")} onIncrement={() => increment("pets")} />

          {/* Service Animal */}
          <div className="flex justify-between items-center py-2 border-t mt-2">
            <div>
              <div className="font-medium text-sm">Bringing a service animal?</div>
              <p className="text-xs text-gray-500">Only dogs are allowed.</p>
            </div>
            <input
              type="checkbox"
              checked={serviceAnimal}
              onChange={toggleServiceAnimal}
              className="w-5 h-5 text-red-500 rounded focus:ring-red-500"
            />
          </div>

          {/* Done */}
          <div className="flex justify-end mt-3">
            <button
              type="button" // ✅ prevent form submission
              onClick={() => setOpen(false)}
              className="px-4 py-2 bg-gray-200 rounded-md text-sm hover:bg-gray-300"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Row({
  label,
  value,
  onDecrement,
  onIncrement,
}: {
  label: string;
  value: number;
  onDecrement: () => void;
  onIncrement: () => void;
}) {
  return (
    <div className="flex justify-between items-center py-2">
      <div>{label}</div>
      <div className="flex items-center">
        <button
          type="button" // ✅ prevent form submission
          onClick={onDecrement}
          disabled={value <= 0}
          className="px-2 py-1 rounded-full border disabled:opacity-40 hover:bg-gray-100"
        >
          −
        </button>
        <span className="mx-2">{value}</span>
        <button
          type="button" // ✅ prevent form submission
          onClick={onIncrement}
          className="px-2 py-1 rounded-full border hover:bg-gray-100"
        >
          +
        </button>
      </div>
    </div>
  );
}

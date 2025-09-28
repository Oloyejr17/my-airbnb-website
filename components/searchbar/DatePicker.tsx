"use client";

import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

interface DatePickerProps {
  dates?: { startDate: Date | null; endDate: Date | null };
  setDates: (val: { startDate: Date | null; endDate: Date | null }) => void;
}

export default function DatePicker({ dates, setDates }: DatePickerProps) {
  const [showCalendar, setShowCalendar] = useState(false);

  const safeDates = dates ?? { startDate: null, endDate: null };
  const range = [{ startDate: safeDates.startDate ?? undefined, endDate: safeDates.endDate ?? undefined, key: "selection" }];

  return (
    <div className="flex-1 px-3 py-2 relative z-50">
      <div className="text-[11px] font-semibold text-gray-800 tracking-wide mb-1 group-hover:text-white transition-colors duration-200">
        Check-in / Check-out
      </div>

      <input
        type="text"
        readOnly
        onClick={() => setShowCalendar(!showCalendar)}
        value={
          safeDates.startDate && safeDates.endDate
            ? `${safeDates.startDate.toLocaleDateString()} - ${safeDates.endDate.toLocaleDateString()}`
            : ""
        }
        placeholder="Add dates"
        className="w-full outline-none text-sm font-medium text-gray-900 placeholder-gray-400 bg-transparent cursor-pointer"
      />

      {showCalendar && (
        <div className="absolute top-16 left-0 bg-white text-gray-900 rounded-2xl shadow-2xl p-4 w-[90vw] max-w-md max-h-[70vh] overflow-y-auto z-[999]">
          <DateRange
            ranges={range}
            onChange={(item) => setDates({ startDate: item.selection.startDate ?? null, endDate: item.selection.endDate ?? null })}
            editableDateInputs
            moveRangeOnFirstSelection={false}
            rangeColors={["#000"]}
            minDate={new Date()}
          />
          <div className="flex justify-end mt-2">
            <button
              type="button"
              onClick={() => setShowCalendar(false)}
              className="px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

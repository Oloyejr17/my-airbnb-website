"use client";

import { useState } from "react";

const languages = [
  { code: "en-US", label: "English", region: "United States" },
  { code: "az", label: "Azərbaycan dili", region: "Azerbaycan" },
  { code: "id", label: "Bahasa Indonesia", region: "Indonesia" },
  { code: "bs", label: "Bosanski", region: "Bosna i Hercegovina" },
  { code: "ca", label: "Català", region: "Espanya" },
  { code: "cs", label: "Čeština", region: "Česká republika" },
  { code: "da", label: "Dansk", region: "Danmark" },
  { code: "de-DE", label: "Deutsch", region: "Deutschland" },
  { code: "en-AU", label: "English", region: "Australia" },
  { code: "en-CA", label: "English", region: "Canada" },
];

export default function LanguageModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4 sm:p-6">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg p-6 relative font-sans max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-lg font-bold"
        >
          ✕
        </button>

        <div className="border-b mb-6">
          <nav className="flex gap-6 flex-wrap">
            <button className="pb-2 border-b-2 border-black font-semibold text-gray-800 text-lg">
              Language and region
            </button>
            <button className="pb-2 text-gray-400 hover:text-gray-800 text-lg transition">
              Currency
            </button>
          </nav>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-gray-50 p-4 rounded-lg mb-6 gap-4">
          <div>
            <p className="font-semibold text-gray-800">Translation</p>
            <p className="text-sm text-gray-500">
              Automatically translate descriptions and reviews to English.
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-300 peer-focus:ring-2 peer-focus:ring-blue-400 rounded-full peer dark:bg-gray-600 peer-checked:bg-blue-500 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
          </label>
        </div>

        <h3 className="font-semibold text-gray-800 text-lg mb-4">
          Choose a language and region
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-h-[300px] overflow-y-auto">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className="border rounded-lg p-4 text-left hover:border-black hover:bg-gray-50 transition flex flex-col"
            >
              <p className="font-semibold text-gray-800">{lang.label}</p>
              <p className="text-sm text-gray-500">{lang.region}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

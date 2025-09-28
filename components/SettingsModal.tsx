"use client";

import { useState } from "react";

type Currency = {
  code: string;
  symbol: string;
  label: string;
};

type Language = {
  code: string;
  label: string;
};

const currencies: Currency[] = [
  { code: "USD", symbol: "$", label: "United States dollar" },
  { code: "EUR", symbol: "€", label: "Euro" },
  { code: "GBP", symbol: "£", label: "British pound" },
  { code: "JPY", symbol: "¥", label: "Japanese yen" },
  { code: "INR", symbol: "₹", label: "Indian rupee" },
  { code: "NGN", symbol: "₦", label: "Nigerian naira" },
  { code: "CNY", symbol: "¥", label: "Chinese yuan" },
  { code: "CAD", symbol: "$", label: "Canadian dollar" },
];

const languages: Language[] = [
  { code: "en", label: "English" },
  { code: "es", label: "Spanish" },
  { code: "fr", label: "French" },
  { code: "de", label: "German" },
  { code: "pt", label: "Portuguese" },
  { code: "zh", label: "Chinese" },
  { code: "ja", label: "Japanese" },
  { code: "ar", label: "Arabic" },
  { code: "hi", label: "Hindi" },
  { code: "yo", label: "Yoruba" },
];

interface Props {
  onClose: () => void;
  onSave: (lang: string, currency: string) => void;
  selectedLanguage: string;
  selectedCurrency: string;
}

export default function SettingsModal({
  onClose,
  onSave,
  selectedLanguage,
  selectedCurrency,
}: Props) {
  const [activeTab, setActiveTab] = useState<"language" | "currency">("language");
  const [tempLang, setTempLang] = useState(selectedLanguage);
  const [tempCurrency, setTempCurrency] = useState(selectedCurrency);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-full max-w-2xl shadow-lg overflow-hidden">
        {/* Header Tabs */}
        <div className="flex border-b">
          <button
            className={`flex-1 py-3 text-center font-medium ${
              activeTab === "language" ? "border-b-2 border-black" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("language")}
          >
            Language and region
          </button>
          <button
            className={`flex-1 py-3 text-center font-medium ${
              activeTab === "currency" ? "border-b-2 border-black" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("currency")}
          >
            Currency
          </button>
        </div>

        {/* Body */}
        <div className="p-6 max-h-[70vh] overflow-y-auto">
          {activeTab === "language" && (
            <div>
              <h2 className="text-lg font-semibold mb-4">Choose a language</h2>
              <div className="grid grid-cols-2 gap-3">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setTempLang(lang.code)}
                    className={`p-3 text-left rounded-xl border ${
                      tempLang === lang.code
                        ? "border-black bg-gray-100"
                        : "border-gray-300 hover:border-black"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {activeTab === "currency" && (
            <div>
              <h2 className="text-lg font-semibold mb-4">Choose a currency</h2>
              <div className="grid grid-cols-2 gap-3">
                {currencies.map((cur) => (
                  <button
                    key={cur.code}
                    onClick={() => setTempCurrency(cur.code)}
                    className={`p-3 text-left rounded-xl border ${
                      tempCurrency === cur.code
                        ? "border-black bg-gray-100"
                        : "border-gray-300 hover:border-black"
                    }`}
                  >
                    {cur.label}{" "}
                    <span className="text-gray-500">
                      ({cur.code} – {cur.symbol})
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-between border-t p-4">
          <button onClick={onClose} className="px-4 py-2 rounded-lg border">
            Cancel
          </button>
          <button
            className="px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800"
            onClick={() => {
              onSave(tempLang, tempCurrency);
              onClose();
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

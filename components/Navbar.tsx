"use client";

import "../lib/i18n";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  GlobeAltIcon,
  HeartIcon,
  HomeModernIcon,
  WrenchScrewdriverIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { GiAirBalloon } from "react-icons/gi";
import { usePathname } from "next/navigation";
import ProfileMenu from "./ui/ProfileMenu";
import SettingsModal from "./SettingsModal";

export default function Navbar() {
  const { t, i18n } = useTranslation("common");
  const pathname = usePathname();

  const [showSettings, setShowSettings] = useState(false);
  const [currency, setCurrency] = useState("USD");
  const [isLoaded, setIsLoaded] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    const savedCur = localStorage.getItem("currency");

    if (savedLang) i18n.changeLanguage(savedLang);
    if (savedCur) setCurrency(savedCur);

    setIsLoaded(true);
  }, [i18n]);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("language", i18n.language);
      localStorage.setItem("currency", currency);
    }
  }, [i18n.language, currency, isLoaded]);

  if (!isLoaded) return null;

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header className="w-full bg-gradient-to-r from-black via-gray-900 to-black shadow-lg backdrop-blur-md">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between text-white">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/homes">
              <Image
                src="/images/logo.png"
                alt="Apex Homes"
                width={60}
                height={20}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex flex-1 justify-center space-x-4 sm:space-x-6 lg:space-x-8 flex-wrap">
            <Link
              href="/homes"
              className={`group flex flex-col items-center transition ${
                isActive("/homes") ? "text-white" : "hover:text-gray-300"
              }`}
            >
              <HomeModernIcon className="w-6 h-6 mb-1" />
              <span
                className={`relative after:block after:h-0.5 after:bg-white after:origin-left ${
                  isActive("/homes")
                    ? "after:scale-x-100"
                    : "after:scale-x-0 group-hover:after:scale-x-100"
                }`}
              >
                {t("homes")}
              </span>
            </Link>

            <Link
              href="/experiences"
              className={`group flex flex-col items-center transition ${
                isActive("/experiences") ? "text-white" : "hover:text-gray-300"
              }`}
            >
              <GiAirBalloon className="w-6 h-6 mb-1" />
              <span
                className={`relative after:block after:h-0.5 after:bg-white after:origin-left ${
                  isActive("/experiences")
                    ? "after:scale-x-100"
                    : "after:scale-x-0 group-hover:after:scale-x-100"
                }`}
              >
                {t("experiences")}
              </span>
            </Link>

            <Link
              href="/services"
              className={`group flex flex-col items-center transition ${
                isActive("/services") ? "text-white" : "hover:text-gray-300"
              }`}
            >
              <WrenchScrewdriverIcon className="w-6 h-6 mb-1" />
              <span
                className={`relative after:block after:h-0.5 after:bg-white after:origin-left ${
                  isActive("/services")
                    ? "after:scale-x-100"
                    : "after:scale-x-0 group-hover:after:scale-x-100"
                }`}
              >
                {t("services")}
              </span>
            </Link>
          </nav>

          {/* Desktop Right Controls */}
          <div className="hidden md:flex items-center space-x-2 sm:space-x-3 lg:space-x-4 flex-wrap">
            <Link href="/wishlists" className="flex items-center space-x-1 hover:text-gray-300 text-sm sm:text-base">
              <HeartIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>{t("wishlists")}</span>
            </Link>
            <button
              className="flex items-center space-x-1 sm:space-x-2 px-2 py-1 rounded-lg border border-gray-500 hover:bg-gray-800 hover:text-white transition text-xs sm:text-sm"
              onClick={() => setShowSettings(true)}
            >
              <GlobeAltIcon className="w-4 h-4" />
              <span>{i18n.language.toUpperCase()}</span>
              <span>{currency}</span>
            </button>
            <ProfileMenu />
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-1">
              {mobileMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute inset-x-0 top-full bg-black/95 px-4 py-4 space-y-4 text-white max-h-[calc(100vh-4rem)] overflow-y-auto z-40 flex flex-col">
            <Link href="/homes" className="block truncate">{t("homes")}</Link>
            <Link href="/experiences" className="block truncate">{t("experiences")}</Link>
            <Link href="/services" className="block truncate">{t("services")}</Link>
            <Link href="/wishlists" className="block truncate">{t("wishlists")}</Link>

            <div className="flex flex-col space-y-2 w-full">
              <button
                onClick={() => setShowSettings(true)}
                className="flex items-center gap-2 px-2 py-1 rounded-lg border border-gray-500 hover:bg-gray-800 transition w-full justify-start text-sm"
              >
                <GlobeAltIcon className="w-4 h-4" /> {i18n.language.toUpperCase()} {currency}
              </button>
              <ProfileMenu />
            </div>
          </div>
        )}
      </header>

      {showSettings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <SettingsModal
            onClose={() => setShowSettings(false)}
            selectedLanguage={i18n.language}
            selectedCurrency={currency}
            onSave={(lang, cur) => {
              i18n.changeLanguage(lang);
              setCurrency(cur);
            }}
          />
        </div>
      )}
    </>
  );
}

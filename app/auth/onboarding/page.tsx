"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Onboarding() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <main className="relative w-screen h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/airbnb.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center h-screen text-center px-4 transition-all duration-1000 ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Welcome to Apex Homes
        </h1>

        {/* Quote */}
        <p className="text-white text-xl md:text-2xl mb-8 max-w-xl italic">
          "Travel opens your heart, broadens your mind, and fills your life with stories you'll never forget."
        </p>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-6 mt-4 text-lg font-medium">
          <Link
            href="/homes"
            className="text-white hover:text-gray-300 underline-offset-4 hover:underline transition duration-300"
          >
            Continue as Guest
          </Link>
          <Link
            href="/auth/register"
            className="text-white hover:text-gray-300 underline-offset-4 hover:underline transition duration-300"
          >
            Create Account
          </Link>
          <Link
            href="/auth/login"
            className="text-white hover:text-gray-300 underline-offset-4 hover:underline transition duration-300"
          >
            Sign In
          </Link>
        </div>
      </div>
    </main>
  );
}

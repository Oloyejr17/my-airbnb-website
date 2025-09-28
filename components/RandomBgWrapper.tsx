"use client";

import { useEffect, useState, PropsWithChildren } from "react";

const backgrounds = [
  "/images/bg/happy1.jpeg",
  "/images/bg/happy2.jpeg",
  "/images/bg/happy3.jpeg",
  "/images/bg/happy4.jpeg",
  "/images/bg/happy5.jpeg",
  "/images/bg/happy6.jpeg",
];

export default function RandomBgWrapper({ children }: PropsWithChildren) {
  const [bgImage, setBgImage] = useState(backgrounds[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    setBgImage(backgrounds[randomIndex]);
  }, []);

  return (
    <div className="relative w-full text-white py-8 sm:py-12 md:py-16">
      {/* Background Layer */}
      <div
        className="absolute inset-0 bg-center bg-cover transition-all duration-1000 z-0 pointer-events-none"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      
      {/* Overlay Layer */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backdropFilter: "blur(25px)",
          WebkitBackdropFilter: "blur(25px)",
          backgroundColor: "rgba(0, 0, 0, 0.45)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

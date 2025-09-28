"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/searchbar/SearchBar";
import { mockListings } from "@/data/listings";
import ListingCard from "@/components/ListingCard";
import GetawaySection from "@/components/GetawayInspiration/GetawaySection";
import Footer from "@/components/Footer";
import RandomBgWrapper from "@/components/RandomBgWrapper";

interface User {
  name?: string;
}

interface HomesClientProps {
  user: User | null;
}

export default function HomesClient({ user }: HomesClientProps) {
  const [filteredListings, setFilteredListings] = useState(mockListings);

  const handleSearch = (destination: string) => {
    if (!destination) {
      setFilteredListings(mockListings);
      return;
    }
    const filtered = mockListings.filter((listing) =>
      listing.location.toLowerCase().includes(destination.toLowerCase())
    );
    setFilteredListings(filtered);
  };

  return (
    <>
      <Navbar />

      <main className="px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 max-w-6xl mx-auto p-4">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold break-words">
            Welcome back{user?.name ? `, ${user.name}` : ""} 👋
          </h1>
          <div className="mt-3 md:mt-0 w-full md:w-auto">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>

        <section className="max-w-6xl mx-auto mb-12">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
            Explore Stays
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredListings.length > 0 ? (
              filteredListings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))
            ) : (
              <p className="text-gray-500 col-span-full text-center">
                No listings found for this destination.
              </p>
            )}
          </div>
        </section>

        <RandomBgWrapper>
          <GetawaySection />
        </RandomBgWrapper>

        <Footer />
      </main>
    </>
  );
}

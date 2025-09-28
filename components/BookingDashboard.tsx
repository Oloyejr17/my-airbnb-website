"use client";

import { useEffect, useState } from "react";
import BookingCard from "./BookingCard";

interface Booking {
  id: string;
  itemType: string;
  itemId: string;
  checkIn: string | null;
  checkOut: string | null;
  guests: number | null;
  totalPrice: number;
  status: string;
  createdAt: string;
}

export default function BookingDashboard() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBookings = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/bookings/me");
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to fetch bookings");
      setBookings(data.bookings || []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleBookingDeleted = (id: string) => {
    setBookings((prev) => prev.filter((b) => b.id !== id));
  };

  if (loading) return <p className="text-gray-500">Loading your bookings...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  if (!bookings.length) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          No bookings yet
        </h2>
        <p className="text-gray-500 mb-6">
          When you book a home or experience, it will appear here.
        </p>
        <a
          href="/homes"
          className="px-6 py-3 rounded-xl bg-red-500 text-white font-medium hover:bg-red-600 transition"
        >
          Explore Homes
        </a>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {bookings.map((booking) => (
        <BookingCard
          key={booking.id}
          booking={booking}
          onBookingDeleted={handleBookingDeleted}
        />
      ))}
    </div>
  );
}

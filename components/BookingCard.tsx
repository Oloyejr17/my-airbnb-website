"use client";

interface BookingCardProps {
  booking: {
    id: string; 
    itemType: string;
    itemId: string;
    checkIn: string | null;
    checkOut: string | null;
    guests: number | null;
    totalPrice: number;
    status: string;
    createdAt: string;
  };
  onBookingDeleted?: (id: string) => void; 
}

export default function BookingCard({ booking, onBookingDeleted }: BookingCardProps) {
  const handleDelete = async () => {
    try {
      const res = await fetch(`/api/bookings/${booking.id}`, { method: "DELETE" });
      if (res.ok && onBookingDeleted) {
        onBookingDeleted(booking.id);
      }
    } catch (err) {
      console.error("Failed to delete booking", err);
    }
  };

  return (
    <div className="border rounded-xl shadow-sm p-4 flex flex-col">
      <h3 className="text-lg font-semibold capitalize">{booking.itemType}</h3>
      <p className="text-sm text-gray-500">Guests: {booking.guests ?? 0}</p>
      <p className="text-sm text-gray-500">
        {booking.checkIn ? new Date(booking.checkIn).toLocaleDateString() : "—"} →{" "}
        {booking.checkOut ? new Date(booking.checkOut).toLocaleDateString() : "—"}
      </p>
      <p className="text-sm text-gray-700 font-medium mt-2">
        Total: ${booking.totalPrice}
      </p>
      <span className="mt-2 inline-block px-3 py-1 text-xs rounded-full bg-gray-200 text-gray-700">
        {booking.status}
      </span>

      <button
        onClick={handleDelete}
        className="mt-4 px-4 py-2 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition"
      >
        Cancel Booking
      </button>
    </div>
  );
}

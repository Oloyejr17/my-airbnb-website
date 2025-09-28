import BookingDashboard from "@/components/BookingDashboard";

export default function BookingsPage() {
  return (
    <main className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">My Bookings</h1>
      <BookingDashboard />
    </main>
  );
}

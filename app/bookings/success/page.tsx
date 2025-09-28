import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function BookingSuccessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const sessionId = searchParams.get("session_id");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!sessionId) return;
    // In production, you can fetch session details from Stripe
    // For now, simulate delay
    setTimeout(() => setLoading(false), 1000);
  }, [sessionId]);

  if (!sessionId) {
    return (
      <div className="max-w-2xl mx-auto p-6 text-center">
        <h1 className="text-xl font-semibold">No session found</h1>
        <p className="text-gray-600">Booking could not be confirmed.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 text-center space-y-4">
      {loading ? (
        <p className="text-lg">Verifying payment...</p>
      ) : (
        <>
          <h1 className="text-2xl font-bold">Booking Confirmed ✅</h1>
          <p className="text-gray-600">Thank you! Your payment was successful.</p>
          <button
            onClick={() => router.push("/")}
            className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-lg font-semibold transition"
          >
            Go to Home
          </button>
        </>
      )}
    </div>
  );
}

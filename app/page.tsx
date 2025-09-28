// app/page.tsx
import { redirect } from "next/navigation";

export default function Home() {
  // Redirect users to the onboarding page
  redirect("/auth/onboarding");

  // Optional fallback in case redirect doesn't trigger immediately
  return (
    <main className="relative w-full min-h-screen bg-[url('/images/airbnb.jpg')] bg-cover bg-center">
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>
    </main>
  );
}

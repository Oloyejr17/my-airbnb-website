import Navbar from "@/components/Navbar";

export default function WithNavbarLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar always visible */}
      <Navbar />

      {/* Page content */}
      <main className="flex-1 bg-gray-50 pt-24 px-4">
        {children}
      </main>
    </div>
  );
}

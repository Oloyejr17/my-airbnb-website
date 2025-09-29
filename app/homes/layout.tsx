import HomesClient from "./HomesClient";

export default async function HomesLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="pt-24 sm:pt-32">
      {children}
    </main>
  );
}

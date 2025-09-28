import { getCurrentUser } from "@/lib/auth";
import HomesClient from "./HomesClient";

export default async function HomesPage() {
  const user = await getCurrentUser();

  // ✅ Map only the needed fields for the client
  const safeUser = user
    ? {
        name: user.name ?? undefined,
      }
    : null;

  return <HomesClient user={safeUser} />;
}

import { prisma } from "./prisma";

export async function getUserBookings(userId: number) {
  const now = new Date();

  const bookings = await prisma.booking.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });

  const upcoming = bookings.filter((b) => b.status === "upcoming");
  const history = bookings.filter((b) => b.status === "completed" || b.status === "canceled");

  return { upcoming, history };
}

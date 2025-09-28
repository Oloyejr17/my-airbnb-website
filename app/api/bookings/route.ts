import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const user = await getCurrentUser();
    if (!user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { itemType, itemId, checkIn, checkOut, guests, totalPrice } = await req.json();

    const booking = await prisma.booking.create({
      data: {
        userId: Number(user.id),
        itemType,
        itemId,
        checkIn: checkIn ? new Date(checkIn) : null,
        checkOut: checkOut ? new Date(checkOut) : null,
        guests,
        totalPrice,
        status: "upcoming",
      },
    });

    return NextResponse.json({ booking });
  } catch (err) {
    console.error("Error creating booking:", err);
    return NextResponse.json({ error: "Failed to create booking" }, { status: 500 });
  }
}

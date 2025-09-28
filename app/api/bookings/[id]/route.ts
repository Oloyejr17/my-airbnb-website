import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await getCurrentUser();
    if (!user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const bookingId = parseInt(params.id, 10);
    const userId = parseInt(user.id as string, 10);
    const data = await req.json();

    const updated = await prisma.booking.updateMany({
      where: { id: bookingId, userId },
      data,
    });

    return NextResponse.json({ updatedCount: updated.count });
  } catch (err) {
    console.error("Error updating booking:", err);
    return NextResponse.json({ error: "Failed to update booking" }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await getCurrentUser();
    if (!user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const bookingId = parseInt(params.id, 10);
    const userId = parseInt(user.id as string, 10);

    await prisma.booking.deleteMany({
      where: { id: bookingId, userId },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error deleting booking:", err);
    return NextResponse.json({ error: "Failed to delete booking" }, { status: 500 });
  }
}

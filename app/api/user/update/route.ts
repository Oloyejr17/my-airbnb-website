import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";

// BigInt-safe helper
function safeUser(user: any) {
  if (!user) return null;
  const safeObj: any = {};
  for (const key in user) {
    safeObj[key] = typeof user[key] === "bigint" ? user[key].toString() : user[key];
  }
  return safeObj;
}

export async function PATCH(req: NextRequest) {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const data = await req.json();

    const updatedUser = await prisma.user.update({
      where: { email: currentUser.email },
      data: {
        name: data.name,
        bio: data.bio,
        phone: data.phone,
        location: data.location,
        occupation: data.occupation,
        maritalStatus: data.maritalStatus,
        social: data.social,
        image: data.image,
      },
    });

    return NextResponse.json(safeUser(updatedUser));
  } catch (err: any) {
    console.error("Error updating user:", err);
    return NextResponse.json(
      { error: err.message || "Something went wrong" },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth"; // your Next-Auth helper

// Convert any BigInt fields to string
function safeUser(user: any) {
  if (!user) return null;
  const safeObj: any = {};
  for (const key in user) {
    const value = user[key];
    safeObj[key] = typeof value === "bigint" ? value.toString() : value;
  }
  return safeObj;
}

export async function GET(req: NextRequest) {
  try {
    // Get logged-in user from session
    const currentUser = await getCurrentUser();
    if (!currentUser?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Fetch user from database
    const user = await prisma.user.findUnique({
      where: { email: currentUser.email },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Send BigInt-safe JSON
    return NextResponse.json(safeUser(user));
  } catch (err) {
    console.error("Error fetching user in /api/user/me:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

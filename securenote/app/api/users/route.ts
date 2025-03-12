import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // Import Prisma Client

// GET all notes (GET /api/users)
export async function GET() {
  try {
    const users = await prisma.user.findMany({
      select: {
        email: true,
        name: true,
      },
    });
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}
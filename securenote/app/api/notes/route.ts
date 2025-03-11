import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // Import Prisma Client

// CREATE a new note (POST /api/notes)
export async function POST(req: Request) {
  try {
    const { title, content } = await req.json();
    const newNote = await prisma.note.create({
      data: { title, content },
    });
    return NextResponse.json(newNote);
  } catch (error) {
    return NextResponse.json({ error: "Failed to create note" }, { status: 500 });
  }
}

// GET all notes (GET /api/notes)
export async function GET() {
  try {
    const notes = await prisma.note.findMany();
    return NextResponse.json(notes);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch notes" }, { status: 500 });
  }
}
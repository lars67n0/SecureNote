import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // Import Prisma Client

// UPDATE a note (PUT /api/notes/:id)
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const { title, content } = await req.json();
    const updatedNote = await prisma.note.update({
      where: { id: params.id },
      data: { title, content },
    });
    return NextResponse.json(updatedNote);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update note" }, { status: 500 });
  }
}

// DELETE a note (DELETE /api/notes/:id)
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    await prisma.note.delete({
      where: { id: params.id },
    });
    return NextResponse.json({ message: "Note deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete note" }, { status: 500 });
  }
}
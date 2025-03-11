import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// UPDATE a note (PUT /api/notes/:id)
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params; // Resolve the params promise
  try {
    const { title, content } = await request.json();
    const updatedNote = await prisma.note.update({
      where: { id:(id) },
      data: { title, content },
    });
    return NextResponse.json(updatedNote);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update note" },
      { status: 500 }
    );
  }
}

// DELETE a note (DELETE /api/notes/:id)
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params; // Resolve the params promise
  try {
    await prisma.note.delete({
      where: { id:(id) },
    });
    return NextResponse.json({ message: "Note deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete note" },
      { status: 500 }
    );
  }
}

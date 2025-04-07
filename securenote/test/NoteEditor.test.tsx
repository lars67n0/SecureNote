import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import NoteEditor from "@/components/custom/NoteEditor";
import { vi, type Mock } from "vitest";
import React from "react";

// Fix TypeScript error for global mock
declare global {
  var __mockInsert: Mock;
}

vi.mock("@/lib/supabase", () => {
  const mockInsert = vi.fn().mockResolvedValue({ data: {}, error: null });
  const mockFrom = vi.fn(() => ({ insert: mockInsert }));

  globalThis.__mockInsert = mockInsert;

  return {
    supabase: {
      auth: {
        getSession: vi.fn().mockResolvedValue({
          data: { session: { user: { id: "test-user-id" } } },
        }),
      },
      from: mockFrom,
    },
  };
});

describe("NoteEditor", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('opens the editor when "New Note" is clicked', () => {
    render(<NoteEditor />);
    fireEvent.click(screen.getByText(/New Note/i));
    expect(screen.getByText(/Write Your Note/i)).toBeInTheDocument();
  });

  it("saves the note with correct data", async () => {
    render(<NoteEditor />);
    fireEvent.click(screen.getByText(/New Note/i));

    fireEvent.change(screen.getByPlaceholderText("Title"), {
      target: { value: "Test Title" },
    });
    fireEvent.change(screen.getByPlaceholderText("Description"), {
      target: { value: "Test Description" },
    });
    fireEvent.change(screen.getByPlaceholderText("Start writing..."), {
      target: { value: "Test Content" },
    });

    fireEvent.click(screen.getByText("Save"));

    await waitFor(() => {
      expect(globalThis.__mockInsert).toHaveBeenCalledWith([
        {
          title: "Test Title",
          description: "Test Description",
          content: "Test Content",
          user_id: "test-user-id",
        },
      ]);
    });
  });

  it('does not call insert when "Cancel" is clicked', async () => {
    render(<NoteEditor />);
    fireEvent.click(screen.getByText(/New Note/i));

    fireEvent.change(screen.getByPlaceholderText("Title"), {
      target: { value: "Should Not Be Saved" },
    });

    fireEvent.click(screen.getByText("Cancel"));

    await waitFor(() => {
      expect(globalThis.__mockInsert).not.toHaveBeenCalled();
    });
  });
});








// test/NotePage.test.tsx
import { render, screen, waitFor } from "@testing-library/react";
import NotePage from "@/app/notes/page";
import { vi } from "vitest";
import { supabase } from "@/lib/supabase";
import React from "react";

vi.mock("next/navigation", () => {
  return {
    useRouter: () => ({
      push: vi.fn(),
      replace: vi.fn(),
      refresh: vi.fn(),
      back: vi.fn(),
      forward: vi.fn(),
      prefetch: vi.fn(),
    }),
  };
});

// Mock supabase
vi.mock("@/lib/supabase", () => {
  const mockEq = vi.fn().mockResolvedValue({
    data: [{ id: "1", title: "Test Note", description: "Some description" }],
    error: null,
  });

  const mockSelect = vi.fn(() => ({ eq: mockEq }));
  const mockFrom = vi.fn(() => ({ select: mockSelect }));

  return {
    supabase: {
      auth: {
        getSession: vi.fn(),
      },
      from: mockFrom,
    },
  };
});

describe("NotePage", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders notes when session is active", async () => {
    (supabase.auth.getSession as any).mockResolvedValue({
      data: { session: { user: { id: "123" } } },
    });

    render(<NotePage />);

    const note = await screen.findByText(/Test Note/i);
    expect(note).toBeInTheDocument();
  });

  it("shows sign-in prompt if session is missing", async () => {
    (supabase.auth.getSession as any).mockResolvedValue({
      data: { session: null },
    });

    render(<NotePage />);

    await waitFor(() => {
      expect(screen.getByText(/Please Sign-in to view your notes/i)).toBeInTheDocument();
    });
  });
});

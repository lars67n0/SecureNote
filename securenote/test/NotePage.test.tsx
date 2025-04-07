// __tests__/NotePage.test.tsx
import { render, screen, waitFor } from "@testing-library/react";
import NotePage from "@/app/notes/page";
import { vi } from "vitest";
import { supabase } from "@/lib/supabase";
import React from "react";

// Mock supabase module
vi.mock("@/lib/supabase", () => {
  const eq = vi.fn().mockResolvedValue({
    data: [{ id: "1", title: "Test Note", description: "Some description" }],
    error: null,
  });

  const select = vi.fn(() => ({
    eq,
  }));

  const from = vi.fn(() => ({
    select,
  }));

  return {
    supabase: {
      auth: {
        getSession: vi.fn(),
      },
      from,
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

    const note = await screen.findByText("Test Note");
    expect(note).toBeInTheDocument();
  });

  it("shows nothing if session is missing", async () => {
    (supabase.auth.getSession as any).mockResolvedValue({
      data: { session: null },
    });

    render(<NotePage />);
    await waitFor(() => {
      expect(screen.queryByText("Test Note")).not.toBeInTheDocument();
    });
  });
});

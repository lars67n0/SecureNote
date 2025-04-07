// test/__mocks__/supabase.ts
export const mockSupabase = {
    from: vi.fn(() => ({
      select: vi.fn(() => ({
        eq: vi.fn().mockResolvedValue({
          data: [{ id: "1", title: "Test Note", description: "Some description" }],
          error: null,
        }),
      })),
    })),
  };
  
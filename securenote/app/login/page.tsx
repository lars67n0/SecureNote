'use client'
import { useEffect, useState } from "react";
import { Flex } from "@/components/ui/flex";
import { Grid, GridItem } from "@/components/ui/grid";
import { LoginWidget } from "@/components/custom/LoginWidget";

export default function LoginPage() {
  const [users, setUsers] = useState<{ name: string; email: string }[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch notes from API
  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("/api/users");
        const data = await response.json();
        setTimeout(() => {
          setUsers(data);
          setIsLoading(false);
        }, 500);
      } catch (error) {
        console.error("Error fetching notes:", error);
        setIsLoading(false);
      }
    }
    fetchUsers();
  }, []);

  return (
    <Flex className="w-full mx-auto">
      <Grid className="lg:grid-cols-4 grid-cols-1 gap-4 w-full">
        <GridItem className="md:col-span-4 py-6 px-12 min-h-[85vh]">
          <LoginWidget />
          </GridItem>
      </Grid>
    </Flex>
  );
}

"use client";

import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { FilterIcon } from "lucide-react";
import { Combobox } from "../combobox";
import { Platform } from "@prisma/client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface FilterGamesProps {
  platforms: { value: string; label: string }[];
  publishers: { value: string; label: string }[];
  developers: { value: string; label: string }[];
  genres: { value: string; label: string }[];
}

export default function FilterGames({
  platforms,
  developers,
  publishers,
  genres,
}: FilterGamesProps) {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selectedPlatforms = searchParams.getAll("platforms") || [];

  const handleSelectPlatforms = (selected: string[]) => {
    const params = new URLSearchParams(searchParams);

    if (selected.length) {
      params.delete("platforms");
      selected.forEach((platform) => {
        params.append("platforms", platform);
      });
    } else {
      params.delete("platforms");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  console.log("selectedPlatforms", selectedPlatforms);
  console.log("platforms", platforms);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <FilterIcon className="h-6 w-6" />
          <span className="sr-only">Filter games</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <div className="grid w-[200px] p-4">
          {/* Platforms */}
          <Combobox
            items={platforms}
            onSelect={handleSelectPlatforms}
            selected={selectedPlatforms}
          />
          {/* Genres */}
          {/* Publishers */}
          {/* Developers */}
        </div>
      </SheetContent>
    </Sheet>
  );
}

"use client";
import React, { useCallback, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { FilterIcon } from "lucide-react";
import { Combobox } from "../combobox";
import { Developer, Genre, Platform, Publisher } from "@prisma/client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface FilterGamesProps {
  platforms: Platform[];
  publishers: Publisher[];
  developers: Developer[];
  genres: Genre[];
}

export default function FilterGames({
  platforms,
  developers,
  publishers,
  genres,
}: FilterGamesProps) {
  const { replace } = useRouter();
  const pathname = usePathname();
  // Handle search params
  const searchParams = useSearchParams();

  const [selectedGenres, setSelectedGenres] = useState(
    searchParams.getAll("genres") || []
  );
  const [selectedPublishers, setSelectedPublishers] = useState(
    searchParams.getAll("publishers") || []
  );
  const [selectedDevelopers, setSelectedDevelopers] = useState(
    searchParams.getAll("developers") || []
  );
  const [selectedPlatforms, setSelectedPlatforms] = useState(
    searchParams.getAll("platforms") || []
  );

  const handleSelect = useCallback(
    (
      key: "platforms" | "publishers" | "genres" | "developers",
      selected: string[]
    ) => {
      const params = new URLSearchParams(searchParams);

      console.log(key, selected);
      if (selected.length) {
        params.delete(key);
        selected.forEach((platform) => {
          params.append(key, platform);
        });
      } else {
        params.delete(key);
      }
      replace(`${pathname}?${params.toString()}`);
    },
    [pathname, replace, searchParams]
  );

  // Developers
  const handleSelectDevelopers = (selected: string[]) => {
    setSelectedDevelopers(selected);
    handleSelect("developers", selected);
  };

  // Publishers
  const handleSelectPublishers = (selected: string[]) => {
    setSelectedPublishers(selected);
    handleSelect("publishers", selected);
  };

  // Genres
  const handleSelectGenres = (selected: string[]) => {
    setSelectedGenres(selected);
    handleSelect("genres", selected);
  };

  // Platforms
  const handleSelectPlatforms = (platform: string) => {
    if (selectedPlatforms.includes(platform)) {
      setSelectedPlatforms([
        ...selectedPlatforms.filter((p) => p !== platform),
      ]);
    } else {
      setSelectedPlatforms([...selectedPlatforms, platform]);
    }
    handleSelect("platforms", selectedPlatforms);
  };

  const handleResetFilters = () => {
    setSelectedGenres([]);
    setSelectedPublishers([]);
    setSelectedDevelopers([]);
    setSelectedPlatforms([]);
    replace(pathname);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <FilterIcon className="h-6 w-6" />
          <span className="sr-only">Filter games</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <div className="w-full p-4">
          {/* Platforms */}
          <div className="py-2">
            <h2 className="text-lg font-semibold">Platforms</h2>
            <div className="flex justify-around w-full py-2">
              {platforms.map(({ logo, id, name }) => (
                <Button
                  key={id}
                  variant="outline"
                  className={cn(
                    "relative",
                    selectedPlatforms.includes(id) ? "bg-gray-200" : ""
                  )}
                  size="lg"
                  onClick={() => handleSelectPlatforms(id)}
                >
                  <span>
                    <Image
                      src={logo}
                      alt={name}
                      fill={true}
                      style={{ objectFit: "contain" }}
                    />
                  </span>
                </Button>
              ))}
            </div>
          </div>

          {/* Genres */}
          <div className="py-2">
            <h2 className="text-lg font-semibold">Genre(s)</h2>
            <Combobox
              items={genres.map((genre) => ({
                value: genre.id,
                label: genre.name,
              }))}
              onSelect={handleSelectGenres}
              value={selectedGenres}
            />
          </div>
          {/* Publishers */}
          <div className="py-2">
            <h2 className="text-lg font-semibold">Publisher(s)</h2>
            <Combobox
              items={publishers.map((genre) => ({
                value: genre.id,
                label: genre.name,
              }))}
              onSelect={handleSelectPublishers}
              value={selectedPublishers}
            />
          </div>
          {/* Developers */}
          <div className="py-2">
            <h2 className="text-lg font-semibold">Developer(s)</h2>
            <Combobox
              items={developers.map((genre) => ({
                value: genre.id,
                label: genre.name,
              }))}
              onSelect={handleSelectDevelopers}
              value={selectedDevelopers}
            />
          </div>
          <div>
            <Button onClick={handleResetFilters}>Reset</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

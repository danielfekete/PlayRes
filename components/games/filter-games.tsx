"use client";
import React, { useCallback, useState } from "react";
import { Button } from "../ui/button";
import { Developer, Genre, Platform, Publisher } from "@prisma/client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { MultiSelect } from "../multi-select";
import { Input } from "../ui/input";
import SearchGames from "./search-games";

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

  const [search, setSearch] = useState(searchParams.get("name") || "");

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
    let newSelectedPlatforms = [];
    if (selectedPlatforms.includes(platform)) {
      newSelectedPlatforms = selectedPlatforms.filter((p) => p !== platform);
    } else {
      newSelectedPlatforms = [...selectedPlatforms, platform];
    }
    console.log(newSelectedPlatforms);
    setSelectedPlatforms(newSelectedPlatforms);
    handleSelect("platforms", newSelectedPlatforms);
  };

  const handleResetFilters = () => {
    setSelectedGenres([]);
    setSelectedPublishers([]);
    setSelectedDevelopers([]);
    setSelectedPlatforms([]);
    replace(pathname);
  };

  return (
    <div className="w-full p-4 space-y-4 mt-20">
      {/* Game name */}
      <div>
        <SearchGames />
      </div>
      {/* Platforms */}
      <div>
        <h2 className="text-lg font-semibold">Platforms</h2>
        <div className="flex w-full gap-3 py-2 justify-center">
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
      <div>
        <h2 className="text-lg font-semibold">Genre(s)</h2>
        <MultiSelect
          options={genres.map((genre) => ({
            value: genre.id,
            label: genre.name,
          }))}
          onValueChange={handleSelectGenres}
          defaultValue={selectedGenres}
          placeholder="Select genre(s)"
          variant="inverted"
          animation={2}
          maxCount={3}
        />
      </div>
      {/* Publishers */}
      <div>
        <h2 className="text-lg font-semibold">Publisher(s)</h2>
        <MultiSelect
          options={publishers.map((genre) => ({
            value: genre.id,
            label: genre.name,
          }))}
          onValueChange={handleSelectPublishers}
          defaultValue={selectedPublishers}
          placeholder="Select publisher(s)"
          variant="inverted"
          animation={2}
          maxCount={3}
        />
      </div>
      {/* Developers */}
      <div>
        <h2 className="text-lg font-semibold">Developer(s)</h2>
        <MultiSelect
          options={developers.map((genre) => ({
            value: genre.id,
            label: genre.name,
          }))}
          onValueChange={handleSelectDevelopers}
          defaultValue={selectedDevelopers}
          placeholder="Select developer(s)"
          variant="inverted"
          animation={2}
          maxCount={3}
        />
      </div>
      <div>
        <Button onClick={handleResetFilters}>Reset filters</Button>
      </div>
    </div>
  );
}

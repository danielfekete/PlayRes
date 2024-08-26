import { getDevelopers } from "@/data/developers";
import { getGamesTotalPages } from "@/data/games";
import { getGenres } from "@/data/genres";
import { getPlatforms } from "@/data/platforms";
import { getPublishers } from "@/data/publishers";
import React from "react";
import FilterGames from "./filter-games";

export default async function FilterGamesWrapper() {
  // Parallel data fetching
  const [platforms = [], publishers = [], developers = [], genres = []] =
    await Promise.all([
      getPlatforms(),
      getPublishers(),
      getDevelopers(),
      getGenres(),
    ]);

  return (
    <FilterGames
      platforms={platforms}
      developers={developers}
      genres={genres}
      publishers={publishers}
    />
  );
}

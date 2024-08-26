import React from "react";
import { GameCard } from "./game-card";
import { getGames } from "@/data/games";
import { getArrayParamValue } from "@/lib/functions";
import GamesPagination from "./games-pagination";

export default async function GamesList({
  searchParams: { name, publishers, developers, genres, platforms },
}: {
  searchParams: {
    name?: string;
    genres?: string | string[];
    developers?: string | string[];
    publishers?: string | string[];
    platforms?: string | string[];
  };
}) {
  const games =
    (await getGames({
      name,
      publishers: getArrayParamValue(publishers),
      developers: getArrayParamValue(developers),
      genres: getArrayParamValue(genres),
      platforms: getArrayParamValue(platforms),
    })) || [];

  const totalPages = Math.ceil(games.length / 18);

  return (
    <div>
      {/* Top pagination */}
      <GamesPagination totalPages={totalPages} />
      <div className="grid grid-cols-3 gap-5 p-4">
        {games.map((game) => (
          <GameCard
            key={game.id}
            id={game.id}
            img={game.coverImage}
            name={game.name}
            platforms={game.platforms.map(({ platform }) => platform)}
          />
        ))}
      </div>
      {/* Bottom pagination */}
      <GamesPagination totalPages={totalPages} />
    </div>
  );
}

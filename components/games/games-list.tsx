import React from "react";
import { GameCard } from "./game-card";
import { getGames } from "@/data/games";

export default async function GamesList({
  searchParams: { name, publisherId, developerId },
}: {
  searchParams: {
    name?: string;
    genre?: string;
    developerId?: string;
    publisherId?: string;
    platforms?: string;
  };
}) {
  const games = await getGames({ name, publisherId, developerId });

  if (!games) {
    return <div>No games found</div>;
  }

  return (
    <div className="grid grid-cols-3 gap-5">
      {games.map((game) => (
        <GameCard
          img={game.coverImage}
          name={game.name}
          platforms={[]}
          key={game.id}
        />
      ))}
    </div>
  );
}

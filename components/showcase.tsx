import { getShowcase } from "@/data/showcase";
import { Game } from "@prisma/client";
import React from "react";
import { GameCard } from "./games/game-card";

interface ShowCaseProps {
  title: string;
  games: Game[];
}

export default async function Showcase({ title, games }: ShowCaseProps) {
  // const showcase = await getShowcase();

  // if (!showcase) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      <h2 className="text-3xl font-bold">{title}</h2>
      <div className="grid grid-cols-3 gap-x-3">
        {games.map((game) => (
          <GameCard
            key={game.id}
            img={game.coverImage}
            name={game.name}
            platforms={game.platforms.map(({ platform }) => platform)}
          />
        ))}
      </div>
    </div>
  );
}

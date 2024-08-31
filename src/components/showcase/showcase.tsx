import { Platform } from "@prisma/client";
import React from "react";
import GameCard from "../games/game-card";

interface ShowCaseProps {
  title: string;
  games: {
    id: string;
    coverImage: string;
    name: string;
    platforms: Platform[];
    performanceTags: string[];
  }[];
}

export default function Showcase({ title, games }: ShowCaseProps) {
  return (
    <div>
      <h2 className="text-3xl font-bold">{title}</h2>
      <div className="grid grid-cols-3 gap-6 py-4">
        {games.map((game) => (
          <GameCard
            key={game.id}
            id={game.id}
            img={game.coverImage}
            name={game.name}
            platforms={game.platforms}
            tags={game.performanceTags}
          />
        ))}
      </div>
    </div>
  );
}

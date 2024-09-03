import React from 'react'
import GameCard from '../games/game-card'
import { Media, Platform } from 'payload-types'

interface ShowCaseProps {
  title: string
  games: {
    id: number
    name: string
    coverImage: Media
    platforms: Platform[]
    performanceTags: string[]
  }[]
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
            rating={game.rating}
            img={game.coverImage}
            name={game.name}
            platforms={game.platforms}
            tags={game.performanceTags}
          />
        ))}
      </div>
    </div>
  )
}

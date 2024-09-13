import React from 'react'
import GameCard from './game-card'
import { getGames } from '@/data/games'
import { getArrayParamValue } from '@/lib/functions'
import GamesPagination from './games-pagination'
import OrderGames from './order-games'

export default async function GamesList({
  searchParams: { name, publishers, developers, genres, platforms, page, sortBy },
}: {
  searchParams: {
    page?: string
    name?: string
    genres?: string | string[]
    developers?: string | string[]
    publishers?: string | string[]
    platforms?: string | string[]
    sortBy?: string
  }
}) {
  const options = {
    name,
    publishers: getArrayParamValue(publishers),
    developers: getArrayParamValue(developers),
    genres: getArrayParamValue(genres),
    platforms: getArrayParamValue(platforms),
    page,
    sortBy,
  }

  const { docs: games, totalDocs } = (await getGames(options)) || {
    docs: [],
    totalDocs: 0,
  }

  const totalPages = Math.ceil(totalDocs / 18)

  return (
    <div>
      <div className="grid grid-cols-3 p-4">
        {/* Total number of games */}
        <div className="flex items-center">
          <span>Total: {totalDocs}</span>
        </div>
        {/* Top pagination */}
        <GamesPagination totalPages={totalPages} />
        {/* Order by */}
        <div className="flex justify-end">
          <OrderGames />
        </div>
        {/* <div>
          <div className="flex items-center">
            Sort by:
            <select
              value={page || 1}
              onChange={(e) => {
                const page = e.target?.value
                window.location = new URLSearchParams({ page }).toString()
              }}
            >
              {[...Array(totalPages).keys()].map((i) => (
                <option key={i + 1} value={i + 1}>
                  Page {i + 1}
                </option>
              ))}
            </select>
          </div>
        </div> */}
      </div>
      <div className="grid grid-cols-2 gap-5 p-4">
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
      {/* Bottom pagination */}
      <div className="p-4">
        <GamesPagination totalPages={totalPages} />
      </div>
    </div>
  )
}

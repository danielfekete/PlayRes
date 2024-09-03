import { listGamesMap } from '@/lib/functions'
import payload from '@/lib/payload'

export const getGames = async ({
  name = '',
  genres = [],
  developers = [],
  publishers = [],
  platforms = [],
}: {
  name?: string
  genres?: string[]
  developers?: string[]
  publishers?: string[]
  platforms?: string[]
}) => {
  try {
    const { docs: games } = await payload.find({
      collection: 'game',
      depth: 2,

      where: {
        name: {
          contains: name,
        },
        'genres.id': {
          in: genres,
        },
        'developer.id': {
          in: developers,
        },
        'publisher.id': {
          in: publishers,
        },
        'platforms.id': {
          in: platforms,
        },
      },
      sort: '-firstReleaseDate',
    })

    return games.map(listGamesMap)
  } catch (error) {
    console.error(error)
  }
}

export const getGamesTotalPages = async () => {
  const { totalDocs: totalGames } = await payload.count({
    collection: 'game',
  })

  return Math.ceil(totalGames / 30)
}

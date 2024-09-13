import { listGamesMap } from '@/lib/functions'
import payload from '@/lib/payload'

export const getGames = async ({
  name = '',
  genres = [],
  developers = [],
  publishers = [],
  platforms = [],
  page = '',
  sortBy = '-firstReleaseDate',
}: {
  name?: string
  genres?: string[]
  developers?: string[]
  publishers?: string[]
  platforms?: string[]
  page?: string
  sortBy?: string
}) => {
  try {
    const { docs: games, totalDocs } = await payload.find({
      collection: 'game',
      depth: 2,
      limit: 18,
      page: Number(page || 1),
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
      sort: sortBy,
    })

    return {
      docs: games.map(listGamesMap),
      totalDocs,
    }
  } catch (error) {
    console.error(error)
  }
}

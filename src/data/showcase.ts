import { listGamesMap } from '@/lib/functions'
import payload from '@/lib/payload'

export const getRecentlyReleasedGames = async () => {
  try {
    const { docs } = await payload.find({
      collection: 'game',
      sort: '-firstReleaseDate',
      limit: 6,
    })

    return docs.map(listGamesMap)
  } catch (error) {
    console.error(error)
  }
}

export const getMostHypedGames = async () => {
  try {
    const { docs } = await payload.find({
      collection: 'game',
      sort: '-hype',
      limit: 6,
    })

    return docs.map(listGamesMap)
  } catch (error) {
    console.error(error)
  }
}

export const getMasterpieceGames = async () => {
  try {
    const { docs } = await payload.find({
      collection: 'game',
      sort: '-rating',
      limit: 6,
    })

    return docs.map(listGamesMap)
  } catch (error) {
    console.error(error)
  }
}

// export const recentlyUpdatedGames = async () => {

// }

import payload from '@/lib/payload'
import { Developer, Genre, Platform, Publisher, Media } from 'payload-types'

export const getGame = async (id: number) => {
  try {
    const game = await payload.findByID({
      collection: 'game',
      id,
      depth: 2,
    })

    return {
      name: game.name,
      genres: game.genres as Genre[],
      developer: game.developer as Developer | null,
      publisher: game.publisher as Publisher | null,
      platforms: game.platforms as Platform[],
      releaseDates: game.releaseDates,
      cover: game.coverImage as Media,
      dfVideoId: game.dfVideoId,
      performances: game.performances || [],
    }
  } catch (error) {
    console.error(error)
  }
}

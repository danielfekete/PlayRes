import payload from '@/lib/payload'

export const getGenres = async () => {
  try {
    const { docs } = await payload.find({
      collection: 'genre',
    })

    return docs
  } catch (error) {
    console.error(error)
  }
}

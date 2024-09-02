import payload from '@/lib/payload'

export const getDevelopers = async () => {
  try {
    const { docs } = await payload.find({
      collection: 'developer',
    })

    return docs
  } catch (error) {
    console.error(error)
  }
}

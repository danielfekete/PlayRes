import payload from '@/lib/payload'

export const getPlatforms = async () => {
  try {
    const { docs } = await payload.find({
      collection: 'platform',
    })

    return docs
  } catch (error) {
    console.error(error)
  }
}

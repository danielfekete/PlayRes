import payload from '@/lib/payload'

export const getPublishers = async () => {
  try {
    const { docs } = await payload.find({
      collection: 'publisher',
    })

    return docs
  } catch (error) {
    console.error(error)
  }
}

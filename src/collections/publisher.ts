import { CollectionConfig } from 'payload'

export const PublishersCollection: CollectionConfig = {
  slug: 'publisher',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
  ],
}

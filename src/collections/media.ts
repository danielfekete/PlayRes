import { CollectionConfig } from 'payload'

export const MediaCollection: CollectionConfig = {
  slug: 'media',
  upload: true,
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'text',
      type: 'text',
    },
  ],
}

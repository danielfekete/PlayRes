import { CollectionConfig } from 'payload'

export const DevelopersCollection: CollectionConfig = {
  slug: 'developer',
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

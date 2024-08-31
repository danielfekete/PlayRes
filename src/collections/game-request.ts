import { CollectionConfig } from 'payload'

export const gameRequestsCollection: CollectionConfig = {
  slug: 'game-request',
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
    {
      name: 'performance',
      type: 'textarea',
    },
  ],
}

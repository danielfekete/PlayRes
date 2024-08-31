import { CollectionConfig } from 'payload'

export const informationsCollection: CollectionConfig = {
  slug: 'information',
  admin: {
    useAsTitle: 'gameId',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'gameId',
      type: 'relationship',
      relationTo: 'game',
      required: true,
    },
    {
      name: 'information',
      type: 'textarea',
      required: true,
    },
  ],
}

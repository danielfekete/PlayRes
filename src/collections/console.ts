import { CollectionConfig } from 'payload'

export const consolesCollection: CollectionConfig = {
  slug: 'console',
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
      name: 'platformId',
      type: 'relationship',
      relationTo: 'platform',
      required: true,
    },
  ],
}

import { CollectionConfig } from 'payload'

export const platformsCollection: CollectionConfig = {
  slug: 'platform',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'igdbId',
      type: 'number',
      required: false,
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'consoles',
      type: 'relationship',
      relationTo: 'console',
      hasMany: true,
    },
  ],
}

import { CollectionConfig } from 'payload'

export const GamesCollection: CollectionConfig = {
  slug: 'game',
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
      name: 'coverImage',
      type: 'relationship',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'rating',
      type: 'number',
      required: false,
    },
    {
      name: 'hype',
      type: 'number',
      required: false,
    },
    {
      name: 'summary',
      type: 'textarea',
      required: false,
    },
    {
      name: 'similarGames',
      type: 'number',
      hasMany: true,
      required: false,
    },
    {
      name: 'developer',
      type: 'text',
      required: true,
    },
    {
      name: 'publisher',
      type: 'text',
      required: true,
    },
    {
      name: 'platforms',
      type: 'relationship',
      relationTo: 'platform',
      hasMany: true,
    },
    {
      name: 'genres',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'performances',
      type: 'relationship',
      relationTo: 'performance',
      hasMany: true,
    },
    {
      name: 'releaseDates',
      type: 'array',
      fields: [
        {
          name: 'date',
          type: 'date',
        },
        {
          name: 'region',
          type: 'text',
          required: true,
          defaultValue: 'Worldwide',
        },
        {
          name: 'platform',
          type: 'relationship',
          relationTo: 'platform',
          required: true,
        },
      ],
    },
  ],
}

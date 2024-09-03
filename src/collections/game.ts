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
      required: true,
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
      type: 'relationship',
      relationTo: 'developer',
      required: false,
    },
    {
      name: 'publisher',
      type: 'relationship',
      relationTo: 'publisher',
      required: false,
    },
    {
      name: 'platforms',
      type: 'relationship',
      relationTo: 'platform',

      hasMany: true,
      required: true,
    },
    {
      name: 'genres',
      type: 'relationship',
      relationTo: 'genre',
      hasMany: true,
      required: true,
    },
    {
      name: 'performances',
      type: 'relationship',
      relationTo: 'performance',
      hasMany: true,
      defaultValue: [],
    },
    {
      name: 'firstReleaseDate',
      type: 'date',
      required: false,
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
      required: true,
      defaultValue: [],
    },
  ],
}

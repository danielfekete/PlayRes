import { CollectionConfig } from 'payload'

export const performancesCollection: CollectionConfig = {
  slug: 'performance',
  admin: {
    useAsTitle: 'gameId',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'hdr',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'threeDAudio',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'updated',
      type: 'date',
      defaultValue: new Date(),
    },
    {
      name: 'console',
      type: 'relationship',
      relationTo: 'console',
      required: true,
    },
    {
      name: 'gameId',
      type: 'relationship',
      relationTo: 'game',
      required: true,
    },
    {
      name: 'performanceModes',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'frameRate',
          type: 'text',
          required: true,
        },
        {
          name: 'resolution',
          type: 'text',
          required: true,
        },
        {
          name: 'rayTracing',
          type: 'checkbox',
          defaultValue: false,
        },
        {
          name: 'upscalingMethod',
          type: 'text',
          required: false,
        },
      ],
    },
  ],
}

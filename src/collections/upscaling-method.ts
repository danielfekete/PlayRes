import { CollectionConfig } from 'payload'

export const upscalingMethodsCollection: CollectionConfig = {
  slug: 'upscalingMethod',
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

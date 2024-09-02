import path from 'path'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { en } from 'payload/i18n/en'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
// import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'
import { gameRequestsCollection } from '@/collections/game-request'
import { GamesCollection } from '@/collections/game'
import { consolesCollection } from '@/collections/console'
import { informationsCollection } from '@/collections/information'
import { performancesCollection } from '@/collections/performance'
import { platformsCollection } from '@/collections/platform'
import { MediaCollection } from '@/collections/media'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { DevelopersCollection } from '@/collections/developer'
import { PublishersCollection } from '@/collections/publisher'
import { GenresCollection } from '@/collections/genre'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  //editor: slateEditor({}),
  editor: lexicalEditor(),
  collections: [
    gameRequestsCollection,
    GamesCollection,
    consolesCollection,
    informationsCollection,
    performancesCollection,
    platformsCollection,
    MediaCollection,
    DevelopersCollection,
    PublishersCollection,
    GenresCollection,
  ],
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URI || '',
    },
  }),
  plugins: process.env.BLOB_READ_WRITE_TOKEN
    ? [
        vercelBlobStorage({
          collections: {
            [MediaCollection.slug]: true,
          },
          token: process.env.BLOB_READ_WRITE_TOKEN || '',
        }),
      ]
    : [],

  /**
   * Payload can now accept specific translations from 'payload/i18n/en'
   * This is completely optional and will default to English if not provided
   */
  // i18n: {
  //   supportedLanguages: { en },
  // },

  admin: {
    autoLogin: {
      email: 'dev@payloadcms.com',
      password: 'test',
      prefillOnly: true,
    },
  },
  async onInit(payload) {
    const existingUsers = await payload.find({
      collection: 'users',
      limit: 1,
    })

    if (existingUsers.docs.length === 0) {
      await payload.create({
        collection: 'users',
        data: {
          email: 'dev@payloadcms.com',
          password: 'test',
        },
      })
    }
  },
  // Sharp is now an optional dependency -
  // if you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.

  // This is temporary - we may make an adapter pattern
  // for this before reaching 3.0 stable
  sharp,
})

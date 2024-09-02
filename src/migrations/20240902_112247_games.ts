import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "performance" ALTER COLUMN "updated" SET DEFAULT '2024-09-02T11:22:47.255Z';`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "performance" ALTER COLUMN "updated" SET DEFAULT '2024-08-31T08:41:25.592Z';`)
}

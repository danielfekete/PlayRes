import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   CREATE TABLE IF NOT EXISTS "developer" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"igdb_id" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "publisher" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"igdb_id" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "genre" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"igdb_id" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  DROP TABLE "game_genres";
  ALTER TABLE "performance" ALTER COLUMN "updated" SET DEFAULT '2024-09-02T13:08:04.227Z';
  ALTER TABLE "game" ADD COLUMN "developer_id" integer;
  ALTER TABLE "game" ADD COLUMN "publisher_id" integer;
  ALTER TABLE "game_rels" ADD COLUMN "genre_id" integer;
  CREATE INDEX IF NOT EXISTS "developer_created_at_idx" ON "developer" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "publisher_created_at_idx" ON "publisher" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "genre_created_at_idx" ON "genre" USING btree ("created_at");
  DO $$ BEGIN
   ALTER TABLE "game" ADD CONSTRAINT "game_developer_id_developer_id_fk" FOREIGN KEY ("developer_id") REFERENCES "public"."developer"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "game" ADD CONSTRAINT "game_publisher_id_publisher_id_fk" FOREIGN KEY ("publisher_id") REFERENCES "public"."publisher"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "game_rels" ADD CONSTRAINT "game_rels_genre_fk" FOREIGN KEY ("genre_id") REFERENCES "public"."genre"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  ALTER TABLE "game" DROP COLUMN IF EXISTS "developer";
  ALTER TABLE "game" DROP COLUMN IF EXISTS "publisher";`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   CREATE TABLE IF NOT EXISTS "game_genres" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL
  );
  
  DROP TABLE "developer";
  DROP TABLE "publisher";
  DROP TABLE "genre";
  ALTER TABLE "game" DROP CONSTRAINT "game_developer_id_developer_id_fk";
  
  ALTER TABLE "game" DROP CONSTRAINT "game_publisher_id_publisher_id_fk";
  
  ALTER TABLE "game_rels" DROP CONSTRAINT "game_rels_genre_fk";
  
  ALTER TABLE "performance" ALTER COLUMN "updated" SET DEFAULT '2024-09-02T11:22:47.255Z';
  ALTER TABLE "game" ADD COLUMN "developer" varchar NOT NULL;
  ALTER TABLE "game" ADD COLUMN "publisher" varchar NOT NULL;
  DO $$ BEGIN
   ALTER TABLE "game_genres" ADD CONSTRAINT "game_genres_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."game"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "game_genres_order_idx" ON "game_genres" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "game_genres_parent_id_idx" ON "game_genres" USING btree ("_parent_id");
  ALTER TABLE "game" DROP COLUMN IF EXISTS "developer_id";
  ALTER TABLE "game" DROP COLUMN IF EXISTS "publisher_id";
  ALTER TABLE "game_rels" DROP COLUMN IF EXISTS "genre_id";`)
}

import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   CREATE TABLE IF NOT EXISTS "game_request" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"performance" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "game_genres" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "game_release_dates" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"date" timestamp(3) with time zone,
  	"region" varchar DEFAULT 'Worldwide' NOT NULL,
  	"platform_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "game" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"igdb_id" numeric,
  	"name" varchar NOT NULL,
  	"cover_image_id" integer,
  	"rating" numeric,
  	"hype" numeric,
  	"summary" varchar,
  	"developer" varchar NOT NULL,
  	"publisher" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "game_numbers" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"number" numeric,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "game_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"platform_id" integer,
  	"performance_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "console" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"platform_id_id" integer NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "information" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"game_id_id" integer NOT NULL,
  	"information" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "performance_performance_modes" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"frame_rate" varchar NOT NULL,
  	"resolution" varchar NOT NULL,
  	"ray_tracing" boolean DEFAULT false,
  	"upscaling_method" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "performance" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hdr" boolean DEFAULT false,
  	"three_d_audio" boolean DEFAULT false,
  	"updated" timestamp(3) with time zone DEFAULT '2024-08-31T08:41:25.592Z',
  	"console_id" integer NOT NULL,
  	"game_id_id" integer NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "platform" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"igdb_id" numeric,
  	"name" varchar NOT NULL,
  	"logo_id" integer NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "platform_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"console_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE IF NOT EXISTS "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  DO $$ BEGIN
   ALTER TABLE "game_genres" ADD CONSTRAINT "game_genres_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."game"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "game_release_dates" ADD CONSTRAINT "game_release_dates_platform_id_platform_id_fk" FOREIGN KEY ("platform_id") REFERENCES "public"."platform"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "game_release_dates" ADD CONSTRAINT "game_release_dates_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."game"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "game" ADD CONSTRAINT "game_cover_image_id_media_id_fk" FOREIGN KEY ("cover_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "game_numbers" ADD CONSTRAINT "game_numbers_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."game"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "game_rels" ADD CONSTRAINT "game_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."game"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "game_rels" ADD CONSTRAINT "game_rels_platform_fk" FOREIGN KEY ("platform_id") REFERENCES "public"."platform"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "game_rels" ADD CONSTRAINT "game_rels_performance_fk" FOREIGN KEY ("performance_id") REFERENCES "public"."performance"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "console" ADD CONSTRAINT "console_platform_id_id_platform_id_fk" FOREIGN KEY ("platform_id_id") REFERENCES "public"."platform"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "information" ADD CONSTRAINT "information_game_id_id_game_id_fk" FOREIGN KEY ("game_id_id") REFERENCES "public"."game"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "performance_performance_modes" ADD CONSTRAINT "performance_performance_modes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."performance"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "performance" ADD CONSTRAINT "performance_console_id_console_id_fk" FOREIGN KEY ("console_id") REFERENCES "public"."console"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "performance" ADD CONSTRAINT "performance_game_id_id_game_id_fk" FOREIGN KEY ("game_id_id") REFERENCES "public"."game"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "platform" ADD CONSTRAINT "platform_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "platform_rels" ADD CONSTRAINT "platform_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."platform"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "platform_rels" ADD CONSTRAINT "platform_rels_console_fk" FOREIGN KEY ("console_id") REFERENCES "public"."console"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "game_request_created_at_idx" ON "game_request" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "game_genres_order_idx" ON "game_genres" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "game_genres_parent_id_idx" ON "game_genres" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "game_release_dates_order_idx" ON "game_release_dates" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "game_release_dates_parent_id_idx" ON "game_release_dates" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "game_created_at_idx" ON "game" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "game_numbers_order_parent_idx" ON "game_numbers" USING btree ("order","parent_id");
  CREATE INDEX IF NOT EXISTS "game_rels_order_idx" ON "game_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "game_rels_parent_idx" ON "game_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "game_rels_path_idx" ON "game_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "console_created_at_idx" ON "console" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "information_created_at_idx" ON "information" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "performance_performance_modes_order_idx" ON "performance_performance_modes" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "performance_performance_modes_parent_id_idx" ON "performance_performance_modes" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "performance_created_at_idx" ON "performance" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "platform_created_at_idx" ON "platform" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "platform_rels_order_idx" ON "platform_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "platform_rels_parent_idx" ON "platform_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "platform_rels_path_idx" ON "platform_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX IF NOT EXISTS "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX IF NOT EXISTS "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX IF NOT EXISTS "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   DROP TABLE "game_request";
  DROP TABLE "game_genres";
  DROP TABLE "game_release_dates";
  DROP TABLE "game";
  DROP TABLE "game_numbers";
  DROP TABLE "game_rels";
  DROP TABLE "console";
  DROP TABLE "information";
  DROP TABLE "performance_performance_modes";
  DROP TABLE "performance";
  DROP TABLE "platform";
  DROP TABLE "platform_rels";
  DROP TABLE "media";
  DROP TABLE "users";
  DROP TABLE "payload_preferences";
  DROP TABLE "payload_preferences_rels";
  DROP TABLE "payload_migrations";`)
}

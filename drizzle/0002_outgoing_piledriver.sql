CREATE TABLE "start" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"is_deleted" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"name" varchar(255) NOT NULL,
	"category_id" varchar(255) NOT NULL,
	"speciality_id" varchar(255) NOT NULL
);
--> statement-breakpoint
ALTER TABLE "start" ADD CONSTRAINT "start_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "start" ADD CONSTRAINT "start_speciality_id_speciality_id_fk" FOREIGN KEY ("speciality_id") REFERENCES "public"."speciality"("id") ON DELETE no action ON UPDATE no action;
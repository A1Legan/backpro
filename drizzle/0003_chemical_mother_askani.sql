CREATE TABLE "categoriesStart" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"is_deleted" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"name" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "specialityStart" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"is_deleted" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"name" varchar(255) NOT NULL
);
--> statement-breakpoint
ALTER TABLE "start" DROP CONSTRAINT "start_category_id_categories_id_fk";
--> statement-breakpoint
ALTER TABLE "start" DROP CONSTRAINT "start_speciality_id_speciality_id_fk";
--> statement-breakpoint
ALTER TABLE "start" ADD CONSTRAINT "start_category_id_categoriesStart_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categoriesStart"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "start" ADD CONSTRAINT "start_speciality_id_specialityStart_id_fk" FOREIGN KEY ("speciality_id") REFERENCES "public"."specialityStart"("id") ON DELETE no action ON UPDATE no action;
ALTER TABLE "categoriesStart" RENAME TO "industry";--> statement-breakpoint
ALTER TABLE "specialityStart" RENAME TO "stage";--> statement-breakpoint
ALTER TABLE "start" RENAME COLUMN "category_id" TO "industry_id";--> statement-breakpoint
ALTER TABLE "start" RENAME COLUMN "speciality_id" TO "stage_id";--> statement-breakpoint
ALTER TABLE "start" DROP CONSTRAINT "start_category_id_categoriesStart_id_fk";
--> statement-breakpoint
ALTER TABLE "start" DROP CONSTRAINT "start_speciality_id_specialityStart_id_fk";
--> statement-breakpoint
ALTER TABLE "start" ADD CONSTRAINT "start_industry_id_industry_id_fk" FOREIGN KEY ("industry_id") REFERENCES "public"."industry"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "start" ADD CONSTRAINT "start_stage_id_stage_id_fk" FOREIGN KEY ("stage_id") REFERENCES "public"."stage"("id") ON DELETE no action ON UPDATE no action;
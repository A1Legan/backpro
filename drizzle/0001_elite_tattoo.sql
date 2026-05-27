ALTER TABLE "frame" DROP CONSTRAINT "frame_category_id_speciality_id_fk";
--> statement-breakpoint
ALTER TABLE "frame" ADD COLUMN "speciality_id" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "frame" ADD CONSTRAINT "frame_speciality_id_speciality_id_fk" FOREIGN KEY ("speciality_id") REFERENCES "public"."speciality"("id") ON DELETE no action ON UPDATE no action;
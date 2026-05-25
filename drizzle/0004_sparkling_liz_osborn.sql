CREATE TABLE "frame_speciality_to_category" (
	"speciality_id" varchar(255) NOT NULL,
	"category_id" varchar(255) NOT NULL
);
--> statement-breakpoint
ALTER TABLE "frame_speciality" DROP CONSTRAINT "frame_speciality_category_id_frame_category_id_fk";
--> statement-breakpoint
ALTER TABLE "start_up_speciality" DROP CONSTRAINT "start_up_speciality_category_id_start_up_category_id_fk";
--> statement-breakpoint
ALTER TABLE "frame_speciality_to_category" ADD CONSTRAINT "frame_speciality_to_category_speciality_id_frame_speciality_id_fk" FOREIGN KEY ("speciality_id") REFERENCES "public"."frame_speciality"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "frame_speciality_to_category" ADD CONSTRAINT "frame_speciality_to_category_category_id_frame_category_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."frame_category"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "frame_speciality" DROP COLUMN "category_id";--> statement-breakpoint
ALTER TABLE "start_up_speciality" DROP COLUMN "category_id";
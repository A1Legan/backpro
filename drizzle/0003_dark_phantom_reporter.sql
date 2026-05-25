ALTER TABLE "frame_category" ALTER COLUMN "is_deleted" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "frame_speciality" ALTER COLUMN "is_deleted" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "start_up_category" ALTER COLUMN "is_deleted" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "start_up_speciality" ALTER COLUMN "is_deleted" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "frame_category" ADD COLUMN "created_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "frame_speciality" ADD COLUMN "created_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "start_up_category" ADD COLUMN "created_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "start_up_speciality" ADD COLUMN "created_at" timestamp DEFAULT now() NOT NULL;
ALTER TABLE "stage" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
DROP TABLE "stage" CASCADE;--> statement-breakpoint
ALTER TABLE "start" DROP CONSTRAINT "start_stage_id_stage_id_fk";
--> statement-breakpoint
ALTER TABLE "start" DROP COLUMN "stage_id";
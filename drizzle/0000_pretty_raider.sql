CREATE TABLE "frame_category" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"is_deleted" boolean DEFAULT false,
	"frame_category" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "frame_speciality" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"is_deleted" boolean DEFAULT false,
	"frame_speciality" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "start_up_category" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"is_deleted" boolean DEFAULT false,
	"start_up_category" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "start_up_speciality" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"is_deleted" boolean DEFAULT false,
	"start_up_speciality" varchar(255) NOT NULL
);

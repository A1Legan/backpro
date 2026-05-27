import { relations } from "drizzle-orm";
import * as pg from "drizzle-orm/pg-core";

export const commonFields = {
    id: pg
        .varchar("id", { length: 255 })
        .notNull()
        .primaryKey()
        .$defaultFn(() => Bun.randomUUIDv7()),
    isDeleted: pg.boolean("is_deleted").default(false),
    createdAt: pg.timestamp("created_at").notNull().defaultNow(),
};

export const frame = pg.pgTable("frame", {
    ...commonFields,
    name: pg.varchar("name", { length: 255 }).notNull(),
    categoryId: pg
        .varchar("category_id", { length: 255 })
        .notNull()
        .references(() => categories.id),
    specialityId: pg
        .varchar("speciality_id", { length: 255 })
        .notNull()
        .references(() => speciality.id),
});

export const categories = pg.pgTable("categories", {
    ...commonFields,
    name: pg.varchar("name", { length: 255 }).notNull(),
});

export const speciality = pg.pgTable("speciality", {
    ...commonFields,
    name: pg.varchar("name", { length: 255 }).notNull(),
});

export const frameRelations = relations(frame, ({ one }) => ({
    category: one(categories, {
        references: [categories.id],
        fields: [frame.categoryId],
    }),
}));

export const categoriesRelations = relations(categories, ({ many }) => ({
    frame: many(frame),
}));

export const specialityRelations = relations(speciality, ({ many }) => ({
    frame: many(frame),
}));

export const start = pg.pgTable("start", {
    ...commonFields,
    name: pg.varchar("name", { length: 255 }).notNull(),
    industryId: pg
        .varchar("industry_id", { length: 255 })
        .notNull()
        .references(() => industry.id),
    stageId: pg
        .varchar("stage_id", { length: 255 })
        .notNull()
        .references(() => stage.id),
});

export const industry = pg.pgTable("industry", {
    ...commonFields,
    name: pg.varchar("name", { length: 255 }).notNull(),
});

export const stage = pg.pgTable("stage", {
    ...commonFields,
    name: pg.varchar("name", { length: 255 }).notNull(),
});

export const startRelations = relations(start, ({ one }) => ({
    industries: one(industry, {
        references: [industry.id],
        fields: [start.industryId],
    }),
}));

export const industryRelations = relations(industry, ({ many }) => ({
    frame: many(frame),
}));

export const stageRelations = relations(stage, ({ many }) => ({
    frame: many(frame),
}));

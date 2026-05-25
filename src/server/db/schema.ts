import { relations } from "drizzle-orm";
import * as pg from "drizzle-orm/pg-core";

const commonFields = {
    id: pg
        .varchar("id", { length: 255 })
        .notNull()
        .primaryKey()
        .$defaultFn(() => Bun.randomUUIDv7()),
    isDeleted: pg.boolean("is_deleted").notNull().default(false),
    createdAt: pg.timestamp("created_at").notNull().defaultNow(),
};

export const frameCategory = pg.pgTable("frame_category", {
    ...commonFields,
    name: pg.varchar("frame_category", { length: 255 }).notNull(),
});

export const frameSpeciality = pg.pgTable("frame_speciality", {
    ...commonFields,
    name: pg.varchar("frame_speciality", { length: 255 }).notNull(),
});

export const startUpCategory = pg.pgTable("start_up_category", {
    ...commonFields,
    name: pg.varchar("start_up_category", { length: 255 }).notNull(),
});

export const startUpSpeciality = pg.pgTable("start_up_speciality", {
    ...commonFields,
    name: pg.varchar("start_up_speciality", { length: 255 }).notNull(),
});

export const frameSpecialityToCategory = pg.pgTable("frame_speciality_to_category", {
    specialityId: pg
        .varchar("speciality_id", { length: 255 })
        .notNull()
        .references(() => frameSpeciality.id),
    categoryId: pg
        .varchar("category_id", { length: 255 })
        .notNull()
        .references(() => frameCategory.id),
});

export const frameCategoryRelations = relations(frameCategory, ({ many }) => ({
    frameSpecialities: many(frameSpecialityToCategory),
}));

export const frameSpecialityRelations = relations(frameSpeciality, ({ many }) => ({
    frameCategories: many(frameSpecialityToCategory),
}));

export const frameSpecialityToCategoryRelations = relations(frameSpecialityToCategory, ({ one }) => ({
    speciality: one(frameSpeciality, {
        fields: [frameSpecialityToCategory.specialityId],
        references: [frameSpeciality.id],
    }),
    category: one(frameCategory, {
        fields: [frameSpecialityToCategory.categoryId],
        references: [frameCategory.id],
    }),
}));
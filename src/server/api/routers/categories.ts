import Elysia from "elysia";
import { db } from "../../db";
import { and, eq } from "drizzle-orm";
import { categories } from "../../db/schema";
import z from "zod/v4";

export const categoriesRouter = new Elysia({
    prefix: "/categories"
})
.get("/", async () => {
    return await db.query.categories.findMany({
        where: eq(categories.isDeleted, false),
    });
})
.get("/:id", async ({ params }) => {
    return await db.query.categories.findFirst({
        where: and(
            eq(categories.id, params.id),
            eq(categories.isDeleted, false),
        ),
    });
}, {
    params: z.object({
        id: z.string(),
    }),
});
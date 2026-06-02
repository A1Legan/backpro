import Elysia from "elysia";
import { db } from "../../db";
import { and, eq } from "drizzle-orm";
import { categories } from "../../db/schema";
import z from "zod/v4";
import { categorySchema } from "@/src/app/lib/schemas/category";

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
})
.post("/", async ({ body }) => {
    await db.insert(categories).values({
        name: body.name,
    })
}, {
    body: categorySchema
})
.put("/:id", async ({ body, params }) => {
    await db.update(categories).set(body).where(eq(categories.id, params.id));
}, 
{
    body: categorySchema,
    params: z.object({
        id: z.string,
    }),
})
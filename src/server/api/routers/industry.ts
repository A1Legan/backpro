import Elysia from "elysia";
import { db } from "../../db";
import { and, eq } from "drizzle-orm";
import { industry } from "../../db/schema";
import z from "zod/v4";

export const industryRouter = new Elysia({
    prefix: "/industry"
})
.get("/", async () => {
    return await db.query.industry.findMany({
        where: eq(industry.isDeleted, false),
    });
})
.get("/:id", async ({ params }) => {
    return await db.query.industry.findFirst({
        where: and(
            eq(industry.id, params.id),
            eq(industry.isDeleted, false),
        ),
    });
}, {
    params: z.object({
        id: z.string(),
    }),
});
import Elysia from "elysia";
import { db } from "../../db";
import { eq } from "drizzle-orm";
import { start } from "../../db/schema";
import z from "zod/v4";

export const startRouter = new Elysia({
    prefix: "/startup",
})
.get("/", async () => {
    const foundStart = await db.query.start.findMany({
        where: eq(start.isDeleted, false),
    });
    return foundStart;
})
.get("/:id", async ({ params }) => {
    const foundedStart = await db.query.start.findFirst({
        where: eq(start.id, params.id),
    });
    return foundedStart ?? null;
}, {
        params: z.object({
            id: z.string(),
        }),
    },
);
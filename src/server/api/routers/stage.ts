import Elysia from "elysia";
import { db } from "../../db";
import { and, eq } from "drizzle-orm";
import { stage } from "../../db/schema";
import z from "zod/v4";

export const stageRouter = new Elysia({
    prefix: "/stage"
})
.get("/", async () => {
    return await db.query.stage.findMany({
        where: eq(stage.isDeleted, false),
    });
})
.get("/:id", async ({ params }) => {
    return await db.query.stage.findFirst({
        where: and(
            eq(stage.id, params.id),
            eq(stage.isDeleted, false),
        ),
    });
}, {
    params: z.object({
        id: z.string(),
    }),
});
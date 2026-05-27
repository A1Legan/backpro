import Elysia from "elysia";
import { db } from "../../db";
import { eq } from "drizzle-orm";
import { frame } from "../../db/schema";
import z from "zod/v4";

export const frameRouter = new Elysia({
    prefix: "/frames",
})
.get("/", async () => {
    const foundFrame = await db.query.frame.findMany({
        where: eq(frame.isDeleted, false),
    });
    return foundFrame;
})
.get("/:id", async ({ params }) => {
    const foundedFrame = await db.query.frame.findFirst({
        where: eq(frame.id, params.id),
    });
    return foundedFrame ?? null;
}, {
        params: z.object({
            id: z.string(),
        }),
    },
);
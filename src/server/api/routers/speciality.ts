import Elysia from "elysia";
import { db } from "../../db";
import { and, eq } from "drizzle-orm";
import { speciality } from "../../db/schema";
import z from "zod/v4";

export const specialityRouter = new Elysia({
    prefix: "/speciality"
})
.get("/", async () => {
    return await db.query.speciality.findMany({
        where: eq(speciality.isDeleted, false),
    });
})
.get("/:id", async ({ params }) => {
    return await db.query.speciality.findFirst({
        where: and(
            eq(speciality.id, params.id),
            eq(speciality.isDeleted, false),
        ),
    });
}, {
    params: z.object({
        id: z.string(),
    }),
});
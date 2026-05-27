import { eq } from "drizzle-orm";
import { db } from "./src/server/db";
import { frame, categories, speciality } from "@/src/server/db/schema";

// const foundFrame = await db.query.frame.findMany();

// console.log(foundFrame);

// await db.insert(frame).values({
//     name: "second frame",
//     categoryId: "019e6af3-e4da-7000-bf4e-5d015a692c3d",
//     specialityId: "019e6af3-e4e0-7000-b076-4fe697907654",
// });

// await db.insert(frame).values({
//     name: "third frame",
//     categoryId: "019e6af3-e4da-7000-bf4e-5d015a692c3d",
//     specialityId: "019e6af3-e4e0-7000-b076-4fe697907654",
// });

// await db.update(frame).set({
//     name: "best frame"
// })
// .where(eq(frame.id, "019e6af5-84df-7000-8895-0a20c8a0c8a7"));

// await db.update(frame).set({
//     isDeleted: true,
// })
// .where(eq(frame.id, "019e6af5-84df-7000-8895-0a20c8a0c8a7"));

const frameWithCategoty = await db.query.frame.findMany({
    where: eq(frame.isDeleted, false),
    with: {
        category: true,
    },
});

// console.log(frameWithCategoty);

// const categoryWithFrame = await db.query.categories.findMany({
//     where: eq(categories.isDeleted, false),
//     with: {
//         frame: {
//             where: eq(frame.isDeleted, false),
//         },
        
//     },
// })

// console.log(categoryWithFrame);

const category = await db.query.categories.findFirst({
    where: eq(categories.id, "019e6af3-e4da-7000-bf4e-5d015a692c3d"),
    with: {
        frame: {
            where: eq(frame.isDeleted, false),
        },
    },
});

console.log(category);
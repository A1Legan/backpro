import { eq } from "drizzle-orm";
import { db } from "./src/server/db";
import { frameCategory, frameSpeciality, frameSpecialityToCategory } from "./src/server/db/schema";

// const foundSpeciality = await db.query.frameSpeciality.findMany();

// console.log(foundSpeciality);

// await db.insert(frameCategory).values({
//     name: "HTML"

// });

// await db.insert(frameSpeciality).values({
//     name: "Бухгалтер",
//     categoryId: "019e6065-d86f-7000-a1f7-2e08b2dcd5f1",
// });

// await db.insert(frameSpeciality).values({
//     name: "Бухгалтер Про",
//     categoryId: "019e6065-d86f-7000-a1f7-2e08b2dcd5f1",
// });

// await db.insert(frameSpeciality).values({
//     name: "Бухгалтер Вип",
//     categoryId: "019e6065-d86f-7000-a1f7-2e08b2dcd5f1",
// });

// const frameSpecialityAfter = await db.query.frameSpeciality.findMany();

// console.log(frameSpecialityAfter);

// await db.update(frameSpeciality).set({
//     name: "Бухгалтер Мини",
// })
// .where(eq(frameSpeciality.id, "019e606a-4200-7000-aec2-f3a14329aacb"));

// foundSpeciality = await db.query.frameSpeciality.findMany();

// console.log(foundSpeciality);

await db.update(frameSpeciality).set({
    isDeleted: true,
})
.where(eq(frameSpeciality.id, "019e606a-4200-7000-aec2-f3a14329aacb"))

await db.insert(frameSpecialityToCategory).values({
    specialityId: "019e606c-5410-7000-939f-0d68f5e5c3d2",
    categoryId: "019e6065-d86f-7000-a1f7-2e08b2dcd5f1", 
});

await db.insert(frameSpecialityToCategory).values({
    specialityId: "019e606c-5416-7000-b6b7-97c91f2227b4",
    categoryId: "019e6065-d86f-7000-a1f7-2e08b2dcd5f1",
});

const foundSpecialityWithCategory = await db.query.frameSpeciality.findMany({
    where: eq(frameSpeciality.isDeleted, false),
    with: {
        frameCategories: {
            with: {
                category: true,
            }
        },
    }
});

console.log(foundSpecialityWithCategory);

// const foundCategoryWithSpeciality = await db.query.frameCategory.findMany({
//     where: eq(frameSpeciality.isDeleted, false),
//     with: {
//         frameSpecialities: {
//             with: {
//                 speciality: {
//                     where: eq(frameSpeciality.isDeleted, false),
//                 },
//             }
//         },
//     }
// });

// console.log(foundCategoryWithSpeciality);

const frameCategories = await db.query.frameCategory.findMany({
    where: eq(frameCategory.id, "019e6065-d86f-7000-a1f7-2e08b2dcd5f1"),
    with: {
        frameSpecialities: {
            with: {
                speciality: true,
            }
        }
    }
});

const filtered = frameCategories.map(category => ({
    ...category,
    frameSpecialities: category.frameSpecialities.filter(
        fs => !fs.speciality.isDeleted
    ),
}));

console.log(filtered);

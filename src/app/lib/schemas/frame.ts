import { z } from "zod/v4";

export const statusEnum = z.enum(["Идея", "Разработка", "Готово"])

export const frameSchema = z.object({
    name: z
        .string({ message: "Введите имя..." })
        .min(2, { message: "Имя не может быть менее 2 букв"})
        .max(100, { message: "Имя слишком длинное"}),
    categoryId: z.string({ message: "Выберите категорию"}).optional,
    specialityId: z.string({ message: "Выберите специальность"}).optional,
    status: statusEnum,
})
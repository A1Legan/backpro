import { z } from "zod/v4";


export const categorySchema = z.object({
    name: z
        .string({ message: "Введите имя категории..." })
        .min(2, { message: "Имя категории не может быть менее 2 букв"})
        .max(100, { message: "Имя категории слишком длинное"})
})
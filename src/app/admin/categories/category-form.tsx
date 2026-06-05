"use client";

import { useForm } from "@tanstack/react-form";
import { useMutation } from "@tanstack/react-query";
import { api } from "../../lib/client/api";
import z from "zod/v4";
import { categorySchema } from "../../lib/schemas/category";

export function CategoryForm() {

    const createCategoryMutation = useMutation({
        mutationKey: ["create-category"],
        mutationFn: async(data: z.infer<typeof categorySchema>) => {
            await api.categories.post(data);
        },
        onSuccess: () => {
            alert("Категория создана");
        },
        onError: (e) => {
            alert(`Ошибка ${e.message}`);
        }
    });

    const CategoryForm = useForm({
        defaultValues: {} as z.infer<typeof categorySchema>,
        onSubmit: ({value }) => {
            createCategoryMutation.mutate(value);
        },
        validators: {
            onSubmit: categorySchema,
        }
    });

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                CategoryForm.handleSubmit(e);
            }}
            className="flex flex-col gap-4 bg-blue-300 p-4 rounded-xl"
        >
            <CategoryForm.Field name="name">
                {(field) => (
                    <div className="flex flex-col">
                        <input
                            className="bg-zinc-500 border-zinc-700 border-2 rounded-lg px-4 py-2 text-white placeholder:text-zinc-700"
                            value={field.state.value}
                            placeholder="Введите имя"
                            onChange={(e) => field.handleChange(e.target.value)}
                        />
                        {field.state.meta.errors.map((er) => (
                            <p className="text-red-700" key={er?.message}>
                                {er?.message}
                            </p>
                        ))}
                    </div>
                )}
            </CategoryForm.Field>
            <CategoryForm.Subscribe>
                {(state) => (
                    <button
                        type="submit"
                        className="px-10 py-2 rounded-lg bg-green-900"
                    >
                        Отправить форм 
                    </button>
                )}
            </CategoryForm.Subscribe>
        </form>
    )
}
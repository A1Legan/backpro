"use client";

import { useMutation, useQuery } from "@tanstack/react-query"
import { api } from "../../lib/client/api"
import z from "zod/v4"
import { frameSchema } from "../../lib/schemas/frame"
import { useForm } from "@tanstack/react-form"
import { queryClient } from "../../lib/client/query-client";

export function FrameForm() {

    const createFrameMutation = useMutation({
        mutationKey: ["create-frames"],
        mutationFn: async (data: z.infer<typeof frameSchema>) => {
            await api.frames.post(data)
        },
        onSuccess: () => {
            alert("Продукт создан"),
            queryClient.invalidateQueries({
                queryKey: ["frames"],
            });
        },
    });

    const frameForm = useForm({
        defaultValues: {} as z.infer<typeof frameSchema>,
        onSubmit: ({ value }) => {
            createFrameMutation.mutate(value)
        },
        validators: {
            onSubmit: frameSchema,
        },
    });

    const { data: categories } = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            return (await api.categories.get()).data;
        }
    })

    return (
        <form 
            className="flex flex-col gap-2 border border-zinc-500 p-4 rounded-xl"
            onSubmit={(e) => {
                e.preventDefault(),
                e.stopPropagation(),
                frameForm.handleSubmit(e)
            }}
        >
            <frameForm.Field name="name">
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
            </frameForm.Field>
            <frameForm.Field name="categoryId">
                {(field) => (
                    <div className="flex flex-col gap-1">
                        <select onChange={(e) => field.handleChange(e.target.value)}>
                            {categories?.map((cat) => (
                                <option key={cat.id} value={cat.id}>
                                    {cat.name}
                                </option>
                            ))}
                        </select>
                        {field.state.meta.errors.map((er) => (
                            <p className="text-red-700" key={er?.message}>
                                {er?.message}
                            </p>
                        ))}
                    </div>
                )}
            </frameForm.Field>
            <frameForm.Subscribe>
                {(state) => (
                    <button
                        type="submit"
                        className="px-10 py-2 rounded-lg bg-green-900"
                    >
                        {state.canSubmit ? "Создать продукт" : "Что-то не так"}
                    </button>
                )}
            </frameForm.Subscribe>
        </form>
    )
}
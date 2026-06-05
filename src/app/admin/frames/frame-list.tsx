"use client";

import { useQuery } from "@tanstack/react-query";
import { api } from "../../lib/client/api";

export function FrameList() {

    const { data: frames, isLoading } = useQuery({
        queryKey: ["frames"],
        queryFn: async () => {
            return (await api.frames.get()).data;
        }
    })

    return (
        <div className="flex flex-col gap-6">
            {isLoading && <p className="text-4xl">Продукты загружаются...</p>}
            {frames?.map((fram) => (
                <div key={fram.id} className="flex flex-col gap-2 p-4 bg-zinc-700 border border-white">
                    <p>{fram.name}</p>
                    <p>{fram.createdAt.toDateString()}</p>
                </div>
            ))}
        </div>
    )
}
import { FrameList } from "./frame-list";
import { FrameForm } from "./frame-form";

export default function FramePage() {
    return (
        <div className="flex flex-row gap-4 container mx-auto pt-20">
            <FrameList />
            <FrameForm />
        </div>
    )
}
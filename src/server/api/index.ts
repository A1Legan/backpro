import Elysia from "elysia";
import { frameRouter } from "./routers/frame";
import { categoriesRouter } from "./routers/categories";
import { specialityRouter } from "./routers/speciality";
import { startRouter } from "./routers/start";
import { industryRouter } from "./routers/industry";

export const app = new Elysia({
    prefix: "/api",
})
.use(frameRouter)
.use(startRouter)
.use(categoriesRouter)
.use(industryRouter)
.use(specialityRouter)
.get("/", () => {
    return "hello world!";
})
.get("/test", () => {
    return "test test 123";
});
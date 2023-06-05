import { defineConfig } from "sanity";
import {deskTool} from 'sanity/desk'
import post from "./sanity/schemas/blog-post";
import { codeInput } from "@sanity/code-input";

const config = defineConfig({
    projectId: "inclc88x",
    dataset: "production",
    title: "Omar Jabraoui",
    apiVersion: "2023-06-04",
    basePath: "/admin",
    plugins: [deskTool(), codeInput()],
    schema: {types: [post]}
})

export default config
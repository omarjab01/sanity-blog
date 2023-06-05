import { defineConfig } from "sanity";
import {deskTool} from 'sanity/desk'
import post from "./sanity/schemas/blog-post";

const config = defineConfig({
    projectId: "inclc88x",
    dataset: "production",
    title: "Omar Jabraoui",
    apiVersion: "2023-06-04",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: {types: [post]}
})

export default config
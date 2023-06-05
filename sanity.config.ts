import { defineConfig } from "sanity";
import {deskTool} from 'sanity/desk'
import post from "./sanity/schemas/blog-post";
import { codeInput } from "@sanity/code-input";
import categoria from "./sanity/schemas/blog-category";
import { visionTool } from "@sanity/vision";
import autore from "./sanity/schemas/blog-author";

const config = defineConfig({
    projectId: "inclc88x",
    dataset: "production",
    title: "Omar Jabraoui",
    apiVersion: "2023-06-04",
    basePath: "/admin",
    plugins: [deskTool(), codeInput(), visionTool()],
    schema: {types: [post, categoria, autore]}
})

export default config
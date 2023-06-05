import { PostType } from "@/types/blog";
import { createClient, groq } from "next-sanity";
import { useNextSanityImage } from 'next-sanity-image';


const client = createClient({
    projectId: "inclc88x",
    dataset: "production",
    apiVersion: "2023-06-04",
});



export async function getPosts(): Promise <PostType[]>{
    return client.fetch(
        groq`*[_type == 'blog']{
            _id, _createdAt, title, description, "slug": slug.current, "image": image.asset->url, tag, content, dataPubblicazione
        }`
    )
}

export async function getPost(slug: string): Promise <PostType>{
    return client.fetch(
        groq`*[_type == 'blog' && slug.current == $slug][0]{
            _id, _createdAt, title, description, "slug": slug.current, "image": image.asset->url, tag, content, dataPubblicazione
        }`, {slug}
    )
}
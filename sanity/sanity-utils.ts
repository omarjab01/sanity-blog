import { PostType } from "@/types/blog";
import { createClient, groq } from "next-sanity";
import ImageUrlBuilder from '@sanity/image-url';


const client = createClient({
    projectId: "inclc88x",
    dataset: "production",
    apiVersion: "2023-06-04",
    useCdn: true
});

const builder = ImageUrlBuilder(client)

export function urlFor(source: string) {
  return builder.image(source)
}

export async function getPosts(): Promise <PostType[]>{
    return client.fetch(
        groq`*[_type == 'blog']{
            _id, _createdAt, title, description, "slug": slug.current, "image": image.asset->url,
            'categoria' : *[_id == ^.categoria._ref][0],
            content, dataPubblicazione
        }`
    )
}

export async function getPost(slug: string): Promise <PostType>{
    return client.fetch(
        groq`*[_type == 'blog' && slug.current == $slug][0]{
            _id, _createdAt, title, description,
            'categoria' : *[_id == ^.categoria._ref][0],
            'autore' : *[_id == ^.autore._ref][0],
            "slug": slug.current, "image": image.asset->url, tag, content, dataPubblicazione
        }`, {slug}
    )
}

export async function getCategoryPost(category: string): Promise <PostType>{
    return client.fetch(
        groq`*[_type == 'blog' && category.slug == $category]{
            _id, _createdAt, title, description, "slug": slug.current, "image": image.asset->url,
            'categoria' : *[_id == ^.categoria._ref][0],
            content, dataPubblicazione
        }`, {category}
    )
}


export function convertToSlug(input: string) {
    return input.toLowerCase().replace(/\s+/g, '-');
}
import { PostType } from "@/types/blog";
import { createClient, groq } from "next-sanity";
import ImageUrlBuilder from '@sanity/image-url';

const projectId = "inclc88x"

const client = createClient({
    projectId: projectId,
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
        groq`*[_type == 'blog'] | order(dataPubblicazione desc){
            _id, _createdAt, title, description, "slug": slug.current, "image": image.asset->url,
            'categoria' : *[_id == ^.categoria._ref][0],
            content, dataPubblicazione
        }`
    )
}

export async function getLatestPosts(): Promise <PostType[]>{

    var inizio = 0;
    var fine = 9

    return client.fetch(
        groq`*[_type == 'blog'][$inizio..$fine] | order(dataPubblicazione desc){
            _id, _createdAt, title, description, "slug": slug.current, "image": image.asset->url,
            'categoria' : *[_id == ^.categoria._ref][0],
            content, dataPubblicazione
        }`, {inizio, fine}
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
        groq`*[_type == 'blog' && categoria._ref in *[_type == 'categoria' && slug.current == $category]._id]{
            _id,
            _createdAt,
            title,
            description, 
            "slug": slug.current,
            "image": image.asset->url,
            "categoria": *[_id == ^.categoria._ref][0],
            content
      }`, {category}
    )
}

export async function getCategoriesSlug(): Promise<[]>{
    return client.fetch(
        groq` *[_type=="categoria"]{
            "slug" : slug.current
          }`
    )
}

export async function categoryNameFromSlug(slug: string){
    return client.fetch(
        groq`*[_type == 'categoria' && slug.current == $slug][0]{
            nome
        }`, {slug}
    )
}

export function convertToSlug(input: string) {
    return input.toLowerCase().replace(/\s+/g, '-');
}

export async function getFilteredPosts(q: string): Promise <PostType[]>{
    return client.fetch(
        groq`*[_type == 'blog'][title match '*${q}*'] | order(dataPubblicazione desc){
            _id, _createdAt, title, description, "slug": slug.current, "image": image.asset->url,
            'categoria' : *[_id == ^.categoria._ref][0],
            content, dataPubblicazione
        }`
    )
}
import { getPost, getPosts } from '@/sanity/sanity-utils'
import {Suspense} from 'react'
import PostLayout from '@/app/components/postLayout/PostLayout'

export const revalidate = 60

type paramsType = {
  params: {
    slug: string
  }
}

export const generateMetadata = async ({params} : paramsType) => {
  const post = await getPost(params.slug)
  
  return {
    title: post.title,
    description: post.description
  }
}


const page = async ({params} : paramsType) => {
  const post = getPost(params.slug)
  return (
      <Suspense fallback={<h3>Loading..</h3>}>
        <PostLayout promise={post} />
      </Suspense>
  )
}


export async function generateStaticParams(){
  const posts = await getPosts()
  return posts.map(post => {slug: post.slug})
}


export default page
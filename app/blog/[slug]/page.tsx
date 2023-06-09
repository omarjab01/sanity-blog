import { getPost } from '@/sanity/sanity-utils'
import {Suspense} from 'react'
import PostLayout from '@/app/components/layoutComponents/PostLayout'

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

export default page
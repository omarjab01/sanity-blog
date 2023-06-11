import React, { Suspense } from 'react'
import { getPosts } from '@/sanity/sanity-utils'
import PostsListNoAsync from '../components/PostsListNoAsync'
import Search from '../components/Search'

export const metadata = {
  title: 'Blog',
  description: 'Blog Articles About Web Design and Development',
}

const BlogPage = async () => {
  const posts = getPosts()
  return (
    <div>
      <h3 className='text-2xl font-semibold mb-4'>Blog Page</h3>
      <Search />
      <Suspense fallback={<h3>Loading...</h3>}>
        <PostsListNoAsync promise={posts}/>
      </Suspense>
    </div>
  )
}

export default BlogPage
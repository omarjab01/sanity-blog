
import React from 'react'
import Post from './Post'
import { getPosts } from '@/sanity/sanity-utils'


const PostsList = async ({ posts }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12'>
            {
                posts.map((post) => {
                    return (<Post key={post._id} data={post} />)
                }
                )
            }
        </div>
    )
}

export default PostsList
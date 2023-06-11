import PostHeader from './PostHeader'
import PostContent from './PostContent'
import { promisePost } from '@/types/types'
import {notFound} from 'next/navigation'

const PostLayout = async ({promise} : promisePost) => {
    const post = await promise
    if(post){
      return (
        <div className="mx-auto max-w-3xl">
            <PostHeader post={post}/>
            <PostContent post={post}/>
        </div>
      )
    } else return notFound()
}

export default PostLayout
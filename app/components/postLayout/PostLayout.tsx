import PostHeader from './PostHeader'
import PostContent from './PostContent'
import { promisePost } from '@/types/types'

const PostLayout = async ({promise} : promisePost) => {
    const post = await promise
  return (
    <div className="mx-auto max-w-3xl">
        <PostHeader post={post}/>
        <PostContent post={post}/>
    </div>
  )
}

export default PostLayout
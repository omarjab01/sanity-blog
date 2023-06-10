import Post from './Post'
import { promisePosts } from '@/types/types'

const PostsListNoAsync = async ({ posts }: any) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
            {
                posts.map((post) => {
                    return (<Post key={post._id} data={post} />)
                }
                )
            }
        </div>
    )
}

export default PostsListNoAsync
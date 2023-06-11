import { PostType } from '@/types/blog'
import Post from './Post'

const PostsListNoAsync = async ({ promise }: any) => {
    const posts = await promise
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
            {
                posts.map((post: PostType) => {
                    return (<Post key={post._id} data={post} />)
                }
                )
            }
        </div>
    )
}

export default PostsListNoAsync
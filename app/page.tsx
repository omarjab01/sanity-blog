import Herosection from './components/Herosection'
import Post from './components/Post'
import { getPosts } from '@/sanity/sanity-utils'
import PostsList from './components/PostsList';


export default async function Home() {
  // const posts = await getPosts()
  const posts = getPosts();
  return (
    <div>
      {/* <Herosection /> */}
      <div>
        <h6 className='text-xl mb-8'>Recent Blog Articles</h6>
        <PostsList promise={posts} />
      </div>
    </div>
  )
}

import Herosection from './components/Herosection'
import Post from './components/Post'
import { getPosts } from '@/sanity/sanity-utils'


export default async function Home() {
  const posts = await getPosts()
  return (
    <div>
      {/* <Herosection /> */}
      <div>
        <h6 className='text-xl mb-8'>Recent Blog Articles</h6>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12'>
          {
            posts.map((post) => {
                return (<Post key={post._id} data={post}/>)
              }
            )
          }
        </div>
      </div>
    </div>
  )
}

import { getLatestPosts } from '@/sanity/sanity-utils'
import PostsList from './components/PostsList';
import Herosection from './components/Herosection';
import Services from './components/Services'

export const revalidate = 60

export const metadata = {
  title: 'Omar Jabraoui',
  description: 'Web Designer and Developer',
}

export default async function Home() {
  const posts = getLatestPosts();
  return (
    <div>
      <Herosection />
      <Services />
      <div className='my-32'>
        <h6 className='text-2xl mb-8 font-semibold'>Recent Blog Articles</h6>
        <PostsList promise={posts} />
      </div>
    </div>
  )
}

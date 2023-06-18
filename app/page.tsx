import { getLatestPosts } from '@/sanity/sanity-utils'
import PostsList from './components/PostsList';

export const revalidate = 60

export const metadata = {
  title: 'Omar Jabraoui',
  description: 'Web Designer and Developer',
}

export default async function Home() {
  const posts = getLatestPosts();
  return (
    <div>
      <div>
        <h6 className='text-2xl mb-12 font-semibold'>Recent Blog Articles</h6>
        <PostsList promise={posts} />
      </div>
    </div>
  )
}

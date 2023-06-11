import PostsList from "@/app/components/PostsList"
import { getFilteredPosts } from "@/sanity/sanity-utils"

export const revalidate = 60

type searchType = {
  searchParams: {
    q: string
  }
}

const SearchPage = ({searchParams}: searchType) => {
  const {q} = searchParams
  const posts = getFilteredPosts(q)
  return (
    <div>
        <header>
          <p className='mb-1 text-slate-300'>Search</p>
          <h3 className='mb-8 text-3xl font-semibold'>{q}</h3>
        </header>
        <PostsList promise={posts}/>
    </div>
  )
}

export default SearchPage
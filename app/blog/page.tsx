'use client'
import {useState, useEffects} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import PostsList from '@/app/components/PostsList'
import { getPosts } from '@/sanity/sanity-utils'
import {Suspense} from 'react'
import PostsListNoAsync from '../components/PostsListNoAsync'

const BlogPage = async () => {
  const [numPagina, setNumPagina] = useState(1)
  const [posts, setPosts] = useState(await getPosts(numPagina))
  useEffects(() => {
    const changePage = async () => {
      setPosts(await getPosts(numPagina))
    }

    changePage();
  }, [numPagina])
  return (
    <div>
      <h4>Blog Page</h4>

      {/* Trasforma in componente */}
      <form className='flex flex-row items-center gap-2 my-8' >
        <input type="search" placeholder='How to host React Js apps' className='bg-slate-200 dark:bg-slate-950 text-black dark:text-white p-4 rounded-md w-full md:max-w-[420px]'/>
        <button className='bg-black text-white dark:bg-white dark:text-black p-4 text-2xl rounded-md'>
          <AiOutlineSearch />
        </button>
      </form>

      <PostsListNoAsync promise={posts}/>

      {/* <Suspense fallback={<h3>Caricando...</h3>}>
        <PostsList promise={posts}/>
      </Suspense> */}

      <div>
        <button onClick={() => setNumPagina(prev => prev+1)}>next  page</button>
      </div>
    </div>
  )
}

export default BlogPage
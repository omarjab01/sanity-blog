'use client'
import React, {useRef, useState} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import PostsList from '@/app/components/PostsList'
import { getPosts } from '@/sanity/sanity-utils'
// import { useRouter } from 'next/router'

const BlogPage = async () => {
  const search = useRef('')
  const posts = await getPosts()
  // const router = useRouter();
  return (
    <div>
      <h4>Blog Page</h4>

      {/* Trasforma in componente */}
      <form className='flex flex-row items-center gap-2 my-8' >
        <input type="search" placeholder='How to host React Js apps' className='bg-slate-200 dark:bg-slate-950 text-black dark:text-white p-4 rounded-md w-full md:max-w-[420px]' ref={search}/>
        <button className='bg-black text-white dark:bg-white dark:text-black p-4 text-2xl rounded-md'>
          <AiOutlineSearch />
        </button>
      </form>


      <PostsList posts={posts}/>
    </div>
  )
}

export default BlogPage
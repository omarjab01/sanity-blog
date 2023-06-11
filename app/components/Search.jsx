'use client'

import { useRouter } from 'next/navigation'
import React, { useRef } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

const Search = () => {
    const search = useRef()
    const router = useRouter()

    const handleSearch = (e) => {
        e.preventDefault()
        router.push(`/search?q=${search?.current.value}`)    
    }


  return (
    <form className='flex flex-row items-center gap-2 my-8 mb-16' onSubmit={handleSearch}>
        <input
          type="search"
          placeholder='How to host React Js apps'
          className='bg-slate-100 text-black p-4 rounded-md w-full md:max-w-[480px]'
          ref={search}
        />
        <button className='bg-black text-white p-4 text-2xl rounded-md'>
          <AiOutlineSearch />
        </button>
  </form>
  )
}

export default Search
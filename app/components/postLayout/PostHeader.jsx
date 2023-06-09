import Image from 'next/image'
import React from 'react'
import Tag from '../Tag'
import { PostType } from '@/types/blog'

const PostHeader = ({post}) => {
  return (
    <header className="border-b border-b-slate-400 dark:border-b-slate-900 pb-8">
        <h1 className="text-4xl font-semibold mb-4 text-black">{post.title}</h1>
        <p className="text-gray-900 dark:text-gray-800 mb-4">{post.description}</p>
        <div className="mb-5 flex flex-row items-center gap-2">
          <Tag tag={post?.categoria?.nome || post?.categoria?.categoria}/>
          <p>{post?.dataPubblicazione}</p>
          <span>·</span>
          <p>{post?.autore?.nome}</p>
          {/* esempio */}
        </div>
        <Image src={post.image} width={1280} height={720} className="aspect-video rounded-md" alt={post.slug}/>
    </header>
  )
}

export default PostHeader
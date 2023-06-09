import Image from 'next/image'
import React from 'react'
import Tag from '../Tag'

const PostHeader = ({post}) => {
  return (
    <header className="border-b border-b-slate-100 pb-8">
        <h1 className="text-4xl font-semibold mb-4 text-black">{post.title}</h1>
        {post.description && post.description !=  <p className="text-gray-900 dark:text-gray-800 mb-4">{post.description}</p>}
        <div className="mb-5 flex flex-row items-center gap-2">
          <Tag tag={post?.categoria?.nome || post?.categoria?.categoria}/>
          <p>{post?.dataPubblicazione}</p>
          <span>·</span>
          <p>{post?.autore?.nome}</p>
        </div>
        <Image src={post.image} width={1280} height={720} className="aspect-video rounded-md" alt={post.slug}/>
    </header>
  )
}

export default PostHeader
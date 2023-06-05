import React from 'react'
import Tag from '@/app/components/Tag'
import { getPost } from '@/sanity/sanity-utils'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
// import { RichTextComponent } from '@/app/components/RichTextComponents'
import CustomPortableText from '@/app/components/CustomPortableText'

const page = async ({params}) => {
  const post = await getPost(params.slug)
  console.log(post.content)
  return (
    <div className='mx-auto max-w-3xl'>
      <header className='border-b border-b-slate-400 dark:border-b-slate-900 pb-8'>
        <h1 className='text-4xl font-semibold mb-4 text-black dark:text-white'>{post.title}</h1>
        <p className='text-gray-900 dark:text-gray-400 mb-4'>{post.description}</p>
        <div className='mb-5'>
          <Tag tag="Javascript"/>
          <span>{post?.data}</span>
        </div>
        <Image src={post.image} width={1920} height={1080} className='aspect-video rounded-md' alt={post.slug}/>
      </header>
      <div className='mt-8 containerPostContent'>
        <PortableText value={post.content} components={CustomPortableText}/>
      </div>
    </div>
  )
}

export default page
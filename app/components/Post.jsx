import React from 'react'
import { PostType } from '@/types/blog'
import Link from 'next/link'
import Image from 'next/image'
import Tag from './Tag'

const Post = ({ data }) => {
    return (
        <article className="mb-8">
            <div className="relative">
                {/* <span className="px-3 py-1 rounded-full absolute top-2 right-2 bg-purple-500 text-sm">{data.tag}</span> */}
                <div className="absolute top-2 right-2">
                    <Tag tag={data.categoria.nome || data.categoria.categoria} />
                </div>
                <Link href={`/blog/${data.slug}`}>
                    {/* <img src={data.image} className='rounded-md' /> */}
                    <Image
                        src={data.image} width={1920} height={1080} alt={data.slug} className='aspect-video rounded-md'
                    />
                </Link>
            </div>
            <div className="mt-2">
                <Link href={`/blog/${data.slug}`}>
                    <h2 className='text-lg font-semibold'>{data.title}</h2>
                </Link>
            </div>
        </article>
    )
}

export default Post
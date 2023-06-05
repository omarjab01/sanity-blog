import { PostType } from '@/types/blog'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const RichTextComponent = {
    types: {
        image: ({value}: any) => {
            return (
                <Image src={value} alt={value?.alt} width={1920} height={1080} />
            )
        },
        list: {
            bullet: ({children}: any) => (
                <ul className='ml-10 py-5 list-disc space-y-5'>{children}</ul>
            ),
            number: ({children}: any) => (
                <ul className='ml-10 py-5 list-disc space-y-5'>{children}</ul>
            )
        },
        block: {
            h1: ({children}: any) => {
                <h1 className='text-5xl py-10 font-bold'>{children}</h1>
            },
            h2: ({children}: any) => {
                <h2 className='text-4xl py-10 font-bold'>{children}</h2>
            },
            h3: ({children}: any) => {
                <h3 className='text-3xl py-10 font-bold'>{children}</h3>
            },
            h4: ({children}: any) => {
                <h4 className='text-2xl py-10 font-bold'>{children}</h4>
            },
            h5: ({children}: any) => {
                <h5 className='text-xl py-10 font-bold'>{children}</h5>
            },
            h6: ({children}: any) => {
                <h6 className='text-lg py-10 font-bold'>{children}</h6>
            },
            blockquote: ({children}: any) => (
                <blockquote className='p-4 border border-slate-800'>{children}</blockquote>
            )
        },
        marks: {
            link: ({children, value}: any) => {
                const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined

                return (
                    <Link href={value.href} rel={rel} className='underline'>{children}</Link>
                )
            }
        }
    }
}
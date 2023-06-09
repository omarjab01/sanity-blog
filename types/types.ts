import {ReactNode} from 'react'
import { PostType } from './blog'

export type params = {
    slug: string
}

export type childrenProps = {
    children: ReactNode
}

export type promisePost = {
    promise: Promise<PostType>
}

export type promisePosts = {
    promise: Promise<PostType[]>
}
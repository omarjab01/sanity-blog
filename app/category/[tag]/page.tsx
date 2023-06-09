import { getCategoryPost } from '@/sanity/sanity-utils';
import React from 'react'

const CategoryPage = async ({params}) => {
    const {tag} = params
    const posts = await getCategoryPost(tag);
    console.log(posts)
  return (
    <div>CategoryPage : {tag}</div>
  )
}

export default CategoryPage
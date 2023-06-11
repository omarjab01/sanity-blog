import Link from "next/link";
import {categories} from '@/functions/data.js'

/* const categories = [
  {
      name: 'Php',
      slug: 'php',
      textStyle: 'text-black',
      bgStyle: 'bg-purple-400'
  },
  {
      name: 'CSS',
      slug: 'css',
      textStyle: 'text-white',
      bgStyle: 'bg-blue-400'
  },
  {
      name: 'HTML',
      slug: 'html',
      textStyle: 'text-white',
      bgStyle: 'bg-orange-500'
  },
  {
      name: 'React Js',
      slug: 'react-js',
      textStyle: 'text-white',
      bgStyle: 'bg-blue-500'
  },
  {
      name: 'Javascript',
      slug: 'javascript',
      textStyle: 'text-black',
      bgStyle: 'bg-yellow-300'
  },
]
 */
const Tag = ({ tag }) => {
  const { name, textStyle, slug, bgStyle } = categories.find(c => c.name == tag)
  return (
    <Link
      href={`/category/${slug}`}
      className={`px-3 py-1 w-fit rounded-full text-xs ${textStyle} ${bgStyle}`}
    >{name}</Link>
  )

}

export default Tag
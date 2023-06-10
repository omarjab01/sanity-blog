import { convertToSlug } from "@/sanity/sanity-utils";
import Link from "next/link";
import { categories } from '@/lib/data'

const Tag = ({ tag }) => {
  const { name, textStyle, slug, bgStyle } = categories.find(c => c.name == tag)
  console.log(name, textStyle, slug)
  return (
    <Link
      href={`/category/${slug}`}
      className={`px-3 py-1 w-fit rounded-full text-xs ${textStyle} ${bgStyle}`}
    >{name}</Link>
  )

}

export default Tag
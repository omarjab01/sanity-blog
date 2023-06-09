import { convertToSlug } from "@/sanity/sanity-utils";
import Link from "next/link";
import {categories} from '@/lib/data'

const Tag = ({ tag }) => {
  const {name, textStyle, slug} = categories.filter(c => c.name == tag)[0]
  console.log(name, textStyle, slug)
  return (
    <Link href={`/category/${convertToSlug(slug)}`}>
      <p className={`px-3 py-1 w-fit rounded-full text-xs ${textStyle}`}>{name}</p>
    </Link>
  )

}

export default Tag
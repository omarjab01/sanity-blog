import PostsList from '@/app/components/PostsList';
import CategoryName from '@/app/components/CategoryName';
import { getCategoryPost, getCategoriesSlug } from '@/sanity/sanity-utils';
import { categories } from '@/functions/data';

export const revalidate = 60

const CategoryPage = async ({ params }) => {
  const { tag } = params
  const posts = getCategoryPost(tag);
  return (
    <div>
      <div>
        <CategoryName category={tag} />
      </div>
      <PostsList promise={posts} />
    </div>
  )
}

export async function generateStaticParams(){
  const categories = await getCategoriesSlug()
  return categories.map(c => {slug: c.slug})
}

export const generateMetadata = async ({params}) => {
  const a = categories.find(c => c.slug == params.tag)
  return {
    title: a.name,
    description: `Articles about ${a.name}`
  }
}

export default CategoryPage
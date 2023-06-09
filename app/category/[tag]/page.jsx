import PostsList from '@/app/components/PostsList';
import CategoryName from '@/app/components/CategoryName';
import { getCategoryPost, getCategoriesSlug, categoryNameFromSlug } from '@/sanity/sanity-utils';

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

export default CategoryPage
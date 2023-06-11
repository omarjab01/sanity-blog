import {categories} from '@/functions/data.js'

const CategoryName = ({category}: {category: string}) => {
  const {name, bgStyle} = categories.filter(c => c.slug == category)[0]
  return (
    <header className="py-8 pb-16">
      <h2 className="text-3xl font-semibold">{name}</h2>
      <div className={`h-2 w-36 ${bgStyle}`}></div>
    </header>
  )
}

export default CategoryName
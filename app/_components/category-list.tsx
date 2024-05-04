import { db } from "../_lib/prisma"
import { CategoryItem } from "./category-item"

export async function CategoryList(){
  const categories = await db.category.findMany({})
  return (
    <div className="flex overflow-x-scroll scroll-smooth gap-3 [&::-webkit-scrollbar]:hidden pb-2">
    {categories.map((category) => (
      <CategoryItem key={category.id} category={category}/>
    ))}
    </div>
  )
}
import Image from "next/image";
import { Header } from "./_components/header";
import { Search } from "./_components/search";
import { CategoryList } from "./_components/category-list";
import { ProductList } from "./_components/product-list";
import { db } from "./_lib/prisma";

export default async function Home() {
  const products = await db.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
    take: 10,
    include: {
      restaurant: {
        select: {
          name: true,
        }
      }
    }
  });

  return (
    <>
      <Header />
      <div className="px-5 pt-6">
        <Search />
      </div>
      <div className="px-5 pt-6">
        <CategoryList />
      </div>

      <div className="px-5 pt-6">
        <Image
          src="/promo-banner-01.png"
          alt="Até 30% de desconto em pizzas"
          sizes="100vw"
          width={0}
          height={0}
          className="h-auto w-full object-contain"
        />
      </div>

      <div className="pt-6">
        <ProductList products={products}/>
      </div>
    </>
  );
}

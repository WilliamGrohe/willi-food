import Image from "next/image";
import { Header } from "./_components/header";
import { Search } from "./_components/search";
import { CategoryList } from "./_components/category-list";
import { ProductList } from "./_components/product-list";
import { db } from "./_lib/prisma";
import { Button } from "./_components/ui/button";
import { ChevronRightIcon } from "lucide-react";

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

      <div className="space-y-4 pt-6">
        <div className="flex px-5 items-center justify-between">
          <h2 className="font-semibold">Pedidos Recomendados</h2>
          <Button variant="ghost" className="h-fit p-0 text-primary hover:bg-transparent">
            Ver todos
            <ChevronRightIcon size={16} />
          </Button>
        </div>
        <ProductList products={products}/>
      </div>
    </>
  );
}

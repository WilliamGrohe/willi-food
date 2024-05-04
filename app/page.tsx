import Image from "next/image";
import { Header } from "./_components/header";
import { Search } from "./_components/search";
import { CategoryList } from "./_components/category-list";
import { ProductList } from "./_components/product-list";

export default function Home() {
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
        <ProductList />
      </div>
    </>
  );
}

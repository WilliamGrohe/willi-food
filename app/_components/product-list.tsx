import { Prisma } from "@prisma/client";
import { db } from "../_lib/prisma";
import { ProductItem } from "./product-item";

interface ProductListProps {
  products: Prisma.ProductGetPayload<{
    include: {
      restaurant: {
        select: {
          name: true
        }
      }
    }
  }>[];
}

export async function ProductList({products}: ProductListProps) {

  return (
    <div className="flex overflow-x-scroll scroll-smooth gap-4 px-5 [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

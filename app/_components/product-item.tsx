import { Prisma, Product } from "@prisma/client";
import Image from "next/image";
import { calculateProductTotalPrice, formatCurrency } from "../_helpers/price";

interface ProductItemProps {
  product: Prisma.ProductGetPayload<{
    include: {
      restaurant: {
        select: {
          name: true
        }
      }
    }
  }>;
}

export function ProductItem({ product }: ProductItemProps) {
  return (
    <div className="w-[150px] min-w-[150px] space-y-2">
      <div className="relative h-[150px] w-full">
        <Image
          src={product.imageUrl}
          alt={product.name}
          className="rounded-lg object-cover shadow-md"
          fill
        />
      </div>
      <div className="">
        <h2 className="text-sm truncate">{product.name}</h2>
        <div className="flex gap-1">
          <h3 className="font-semibold">
           {formatCurrency(calculateProductTotalPrice(product))}
          </h3>
          {product.discountPercentage > 0 && (
            <span className="text-muted-foreground text-xs line-through">
              {formatCurrency(Number(product.price))}
            </span>
          )}
        </div>
        <span className="text-muted-foreground text-xs block">
          {product.restaurant.name}
        </span>
      </div>
    </div>
  );
}

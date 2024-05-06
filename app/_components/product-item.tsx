import { Prisma, Product } from "@prisma/client";
import Image from "next/image";
import { calculateProductTotalPrice, formatCurrency } from "../_helpers/price";
import { ArrowDownIcon } from "lucide-react";
import Link from "next/link";

interface ProductItemProps {
  product: Prisma.ProductGetPayload<{
    include: {
      restaurant: {
        select: {
          name: true;
        };
      };
    };
  }>;
}

export function ProductItem({ product }: ProductItemProps) {
  return (
    <Link className="w-[150px] min-w-[150px]" href={`/products/${product.id}`}>
      <div className="w-full space-y-2">
        <div className="relative h-[150px] w-full">
          <Image
            src={product.imageUrl}
            alt={product.name}
            className="rounded-lg object-cover shadow-md"
            fill
          />

          {product.discountPercentage !== 0 && (
            <div className="absolute left-2 top-2 flex items-center gap-[2px] rounded-full bg-primary px-2 text-white">
              <ArrowDownIcon size={12} />
              <span className="text-xs font-semibold">
                {product.discountPercentage} %
              </span>
            </div>
          )}
        </div>

        <div className="">
          <h2 className="truncate text-sm">{product.name}</h2>
          <div className="flex gap-1">
            <h3 className="font-semibold">
              {formatCurrency(calculateProductTotalPrice(product))}
            </h3>
            {product.discountPercentage > 0 && (
              <span className="text-xs text-muted-foreground line-through">
                {formatCurrency(Number(product.price))}
              </span>
            )}
          </div>
          <span className="block text-xs text-muted-foreground">
            {product.restaurant.name}
          </span>
        </div>
      </div>
    </Link>
  );
}

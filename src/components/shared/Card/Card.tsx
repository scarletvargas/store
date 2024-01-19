import Image from "next/image";
import Link from "next/link";

interface ProductCardInterface {
  product: ProductType;
}

export const Card = ({ product }: ProductCardInterface) => {
  return (
    <Link href={`/product/${product.handle}?id=${product.id}`}>
      <div className="flex flex-col gap-2">
        <div className="relative min-h-80 h-80 w-80 min-w-80 pl-2 border border-border rounded-xl">
          <Image
            src={product.image}
            alt={product.title}
            fill
            loading="eager"
            className="rounded-xl object-cover object-center"
          />
        </div>
        <h3 className="text-lg/5 text-contrast-light line-clamp-1">
          {product.title}
        </h3>
        <p className="text-lg/5 text-text">$ {product.price} USD</p>
      </div>
    </Link>
  );
};

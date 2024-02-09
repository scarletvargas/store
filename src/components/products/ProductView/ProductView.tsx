import Image from "next/image";
import { ProductViewItemsOrder } from "./ProductViewItemsOrder";

interface ProductViewProps {
  product: ProductType;
}

export const ProductView = ({ product }: ProductViewProps) => {
  return (
    <main className="text-white grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 py-6 sm:py-12 px-6 sm:px-12 xl:max-w-screen-xl">
      <section className="w-full h-80 sm:h-96 md:h-[500px] relative border border-border rounded-xl">
        <Image
          src={product.image}
          alt={product.title}
          loading="eager"
          fill
          className="rounded-xl object-cover object-center"
        />
      </section>
      <section className="flex flex-col gap-6">
        <h3 className="text-white text-xl/5 font-semibold">{product.title}</h3>
        <p className="text-text text-lg/5">$ {product.price} value</p>
        <ProductViewItemsOrder
          maxQuantity={product.quantity}
          product={product}
        />
        <hr className="h-px border-0 bg-border" />
        <p className="text-white text-lg font-medium">Description</p>
        <p className="text-text text-base/5">{product.description}</p>
      </section>
    </main>
  );
};

import { getMainProducts } from "app/services/products";
import Image from "next/image";
import Link from "next/link";

export const MainProducts = async () => {
  const products = await getMainProducts();

  return (
    <section className="grid grid-cols-products gap-10 justify-center	items-center py-6 sm:py-12 px-6 sm:px-12 xl:max-w-screen-xl">
      {products?.map(
        (product: {
          id: string;
          title: string;
          handle: string;
          images: {
            src: string;
          }[];
        }) => {
          const imageSrc = product.images[0].src;
          return (
            <Link href={`/product/${product.handle}?id=${product.id}`} key={product.id} className="flex flex-col gap-2">
              <div className="relative min-h-80 h-80 w-80 min-w-80 pl-2 border border-border rounded-xl">
                <Image
                  src={imageSrc}
                  alt={product.title}
                  fill
                  loading="eager"
                  className="rounded-xl object-cover object-center"
                />
              </div>
              <h3 className="text-lg/5 text-contrast-light line-clamp-1">
                {product.title}
              </h3>
            </Link>
          );
        }
      )}
    </section>
  );
};

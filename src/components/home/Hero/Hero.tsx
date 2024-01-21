import { Carousel } from "../Carousel";

interface Props {
  products: ProductType[];
}

export const Hero = ({ products }: Props) => {
  return (
    <div className="border-b border-border">
      <main className="mx-auto 2xl:max-w-screen-2xl px-6 sm:px-12">
        <div className="py-6 sm:py-12 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
          <div className="flex flex-col gap-6">
            <h1 className="font-semibold text-6xl/10 text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
            <p className="text-text text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              voluptatem libero consectetur possimus et quae.
            </p>
          </div>
          <Carousel products={products} />
        </div>
      </main>
    </div>
  );
};

import { Carousel } from "../Carousel";

interface Props {
  products: ProductType[];
}

export const Hero = ({ products }: Props) => {
  return (
    <main className="py-6 md:py-12 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 border-b border-border pt-6">
      <div className="flex flex-col gap-6">
        <h1 className="font-semibold text-6xl/10 text-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <p className="text-text text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          voluptatem libero consectetur possimus et quae.
        </p>
      </div>
      <div>
        <Carousel products={products} />
      </div>
    </main>
  );
};

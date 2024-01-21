import { Hero } from "app/components/home/Hero";
import { MainProducts } from "app/components/home/MainProducts";
import { getProducts } from "app/services/products";

export default async function Home() {
  const products = await getProducts();
  return (
    <>
      <Hero products={products} />
      <MainProducts />
    </>
  );
}

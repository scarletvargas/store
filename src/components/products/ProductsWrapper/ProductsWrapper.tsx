import { Card } from "app/components/shared/Card/Card";

interface ProductsWrapperProps {
  products: ProductType[];
}

export const ProductsWrapper = ({ products }: ProductsWrapperProps) => {
  return (
    <div className="grid grid-cols-products gap-10 justify-center	items-center py-6 sm:py-12 px-6 sm:px-12 xl:max-w-screen-xl">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

"use client";
import { Button } from "app/components/shared";
import { useShoppingCart } from "app/hooks/useShoppingCart";
import { ShoppingCartIcon } from "app/icons";
import { SyntheticEvent, useState } from "react";

interface ProductViewItemsOrderProps {
  maxQuantity: number;
  product: ProductType;
}

export const ProductViewItemsOrder = ({
  maxQuantity,
  product,
}: ProductViewItemsOrderProps) => {
  const [counter, setCounter] = useState(1);
  const { addToCart } = useShoppingCart();

  const handleAddToCart = (event: SyntheticEvent) => {
    event.preventDefault();
    addToCart({
      title: product.title,
      price: product.price,
      quantity: counter,
      id: product.id,
      image: product.image,
      merchandiseId: product.gql_id,
    });
  };

  const handleSubtract = (event: SyntheticEvent) => {
    event.preventDefault();
    if (counter === 1) return;
    setCounter(counter - 1);
  };

  const handleAdd = (event: SyntheticEvent) => {
    event.preventDefault();
    if (counter === maxQuantity) return;
    setCounter(counter + 1);
  };
  return (
    <div className="flex flex-row gap-6 items-center w-full">
      <div className="bg-transparent text-white hover:border-white border rounded-lg border-border py-2 px-4 flex flex-row items-center gap-6 justify-center font-medium whitespace-nowrap ">
        <button>-</button>
        <p>{counter}</p>
        <button>+</button>
      </div>
      <form className="w-full">
        <Button variant="white" className="w-full">
          <ShoppingCartIcon className="stroke-black" /> Add to card
        </Button>
      </form>
    </div>
  );
};

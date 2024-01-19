"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
  products: ProductType[];
}

export const Carousel = ({ products }: Props) => {
  const [currentImage, setCurrentImage] = useState(0);
  const quantity = products?.length;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === quantity - 1 ? 0 : prevImage + 1
      );
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentImage, quantity]);

  const getPreviousIndex = (index: number) =>
    index === 0 ? quantity - 1 : index - 1;
  const getNextIndex = (index: number) =>
    index === quantity - 1 ? 0 : index + 1;

  return (
    <div className="overflow-hidden relative w-[600px]">
      <div className="flex justify-center items-center gap-6">
        {[
          getPreviousIndex(currentImage),
          currentImage,
          getNextIndex(currentImage),
        ].map((index, idx) => (
          <div
            key={idx}
            className={`relative border-4 rounded-xl border-border overflow-hidden ${
              idx === 0 || idx === 2 ? "w-1/4" : ""
            }`}
          >
            {idx === 0 || idx === 2 ? (
              <div
                className={`absolute top-0 ${
                  idx === 0 ? "left-0" : "right-0"
                } w-1/2 h-full bg-background z-10`}
              ></div>
            ) : null}
            <Image
              src={products[index].image}
              alt={products[index].title}
              width={idx === 1 ? 320 : 280}
              height={idx === 1 ? 320 : 280}
              className="object-center object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

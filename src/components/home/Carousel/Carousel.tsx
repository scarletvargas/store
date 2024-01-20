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
    <div className="overflow-hidden relative w-[568px] h-[360px]">
      <div className="flex justify-center items-center gap-6 absolute h-full">
        {[
          getPreviousIndex(currentImage),
          currentImage,
          getNextIndex(currentImage),
        ].map((index, idx) => (
          <div
            key={idx}
            className={`animate-carousel relative ${idx === 0 ? "-ml-[220px]" : ""} ${
              idx === 2 ? "-mr-[220px]" : ""
            } ${idx === 1 ? "w-[360px] h-[360px]" : "w-[300px] h-[300px]"}`}
          >
            <Image
              fill={true}
              src={products[index].image}
              alt={products[index].title}
              // width={idx === 1 ? 360 : 200}
              // height={idx === 1 ? 360 : 200}
              className="object-center object-cover border-[6px] rounded-xl bg-border border-border"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

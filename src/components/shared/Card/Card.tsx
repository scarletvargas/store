import Image from "next/image";

interface Props {
  alt: string;
  src: string;
  nameProduct: string;
  price: number;
}

export const Card = ({ alt, src, nameProduct, price }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="min-h-56 min-w-56 pl-2 border border-border">
        <Image
          src={src}
          alt={alt}
          fill
          className="rounded-xl object-cover object-center"
        />
      </div>
      <h3 className="text-lg/5 text-contrast-light">{nameProduct}</h3>
      <p className="text-lg/5 text-text">${price} USD</p>
    </div>
  );
};

"use client";
import { useState } from "react";
import Link from "next/link";
import { CloseIcon, SearchIcon } from "app/icons";

interface Props {
  products: ProductType[];
}

export const Search = ({ products }: Props) => {
  const [search, setSearch] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const searcher = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  const results = !search
    ? []
    : products.filter((product) => {
        const searchTitle = product.title
          .toLowerCase()
          .includes(search.toLowerCase());
        const searchTags = product.tags
          .toLowerCase()
          .includes(search.toLowerCase());
        return searchTitle || searchTags;
      });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        onClick={openModal}
        className="flex flex-row items-center gap-2 font-medium whitespace-nowrap hover:border-white border border-border w-full bg-black text-text rounded-lg py-3 px-4"
      >
        <SearchIcon /> Search products...
      </button>
      <div
        className={`${
          isModalOpen
            ? "fixed z-20 inset-0 flex items-center justify-center bg-black/70"
            : "hidden"
        }`}
      >
        <div className="flex bg-white flex-col px-4 py-2 rounded-xl w-[80%] md:w-[40%] h-auto bg-secundario lg:max-w-[550px] max-h-[70%]">
          <div className="flex rounded-xl gap-3 items-center">
            <SearchIcon className="stroke-text" />
            <input
              value={search}
              onChange={searcher}
              placeholder="Search..."
              type="text"
              className="focus:outline-none py-2 text-black w-full"
            />
            <button
              onClick={closeModal}
              className="rounded-full p-0.5 text-white  bg-text"
            >
              <CloseIcon width={12} height={12} />
            </button>
          </div>
          {products.length > 0 ? (
            <div className="overflow-y-auto">
              {results.map((product) => (
                <Link
                  href={`/product/${product.handle}?id=${product.id}`}
                  key={product.id}
                  className="hover:bg-[#F3F3F2] flex flex-col bg-transparent p-2 w-full"
                >
                  <p className="text-black line-clamp-1">{product.title}</p>
                  <p className="text-text text-sm line-clamp-1">
                    {product.tags}
                  </p>
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

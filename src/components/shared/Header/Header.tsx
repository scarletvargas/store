"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "app/components/shared/Button";
import { CloseIcon, MenuIcon, ShoppingCartIcon } from "app/icons";

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`flex md:flex-row items-center justify-between w-full md:h-[72px] border-b border-border p-4 ${
        isMenuOpen ? "flex-col gap-6" : "flex-row"
      }`}
    >
      <div className="flex flex-row justify-between items-center w-full">
        <h2 className="font-bold text-xl text-white">Store</h2>
        <div className="flex flex-row justify-between items-center gap-4">
          <button className="flex md:hidden">
            <ShoppingCartIcon className="stroke-text hover:stroke-white" />
          </button>
          <button className="md:hidden flex" onClick={toggleMenu}>
            {isMenuOpen ? (
              <CloseIcon className="stroke-text hover:stroke-white" />
            ) : (
              <MenuIcon className="stroke-text hover:stroke-white" />
            )}
          </button>
        </div>
      </div>
      <ul
        className={`md:flex md:flex-row md:w-fit w-full gap-6 md:items-center items-start justify-between ${
          isMenuOpen ? "flex flex-col" : "hidden"
        }`}
      >
        <li>
          <Link
            className="text-base text-text hover:text-contrast-light"
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="text-base text-text hover:text-contrast-light"
            href="/products"
          >
            Products
          </Link>
        </li>
        <button className="md:flex hidden">
          <ShoppingCartIcon className="stroke-text hover:stroke-white" />
        </button>
        <Button type="link" href="/signin" variant="transparent">
          Sign In
        </Button>
      </ul>
    </header>
  );
};

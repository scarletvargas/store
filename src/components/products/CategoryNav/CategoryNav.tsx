"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface CategoryNavProps {
  collections: CollectionType[];
}

export const CategoryNav = ({ collections }: CategoryNavProps) => {
  const pathname = usePathname();

  return (
    <nav className="mx-auto pt-6 sm:pt-12 px-6 sm:px-12 xl:max-w-screen-xl">
      <ul>
        <Link
          className={`text-primary hover:text-white py-2 px-4 rounded-4xl ${
            pathname === "/products" ? "bg-border text-white" : ""
          }`}
          href={"/products"}
        >
          All
        </Link>
        {collections?.map((collection: any) => (
          <Link
            className={`text-primary hover:text-white py-2 px-4 rounded-4xl ${
              pathname === "/products/" + collection.handle ? "bg-border text-white" : ""
            }`}
            key={collection.id}
            href={"/products/" + collection.handle}
          >
            {collection.title}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

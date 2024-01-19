import { CategoryNav } from "app/components/products/CategoryNav";
import { getCollections } from "app/services/collections";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const collections = await getCollections();

  return (
    <main>
      <CategoryNav collections={collections} />
      {children}
    </main>
  );
}

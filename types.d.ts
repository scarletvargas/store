interface PropsIcons {
  className?: string;
  width?: number;
  height?: number;
  strokeWidth?: number;
}

type ProductType = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
  handle: string;
  tags: string;
  gql_id: string;
};

type CollectionType = {
  id: string;
  title: string;
  handle: string;
}

type CartItem = {
  title: string;
  price: number;
  quantity: number;
  id: string;
  image: string;
  merchandiseId: string;
}
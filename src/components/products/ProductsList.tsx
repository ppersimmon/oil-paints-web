import ProductItem from "./ProductItem";
import type { ProductType } from "./constants";

interface ProductsListProps {
  products: ProductType[];
}

const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <div className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;

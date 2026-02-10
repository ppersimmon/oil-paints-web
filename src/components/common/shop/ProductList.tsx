import ProductCard from "./ProductCard";
import type { ProductType } from "./constants";

interface ProductListProps {
  products: ProductType[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;

import type { ProductType } from "./constants";

interface ProductItemProps {
  product: ProductType;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="group flex flex-col">
      <div className="sm:px-0">
        <img
          src={product.image}
          alt={`Product ${product.id}`}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default ProductItem;

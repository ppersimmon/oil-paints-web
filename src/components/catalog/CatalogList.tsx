import CatalogItem from "./CatalogItem";
import type { CatalogType } from "./constants";

interface CatalogTypeListProps {
  products: CatalogType[];
}

const CatalogList = ({ products }: CatalogTypeListProps) => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {products.map((product) => (
        <CatalogItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default CatalogList;

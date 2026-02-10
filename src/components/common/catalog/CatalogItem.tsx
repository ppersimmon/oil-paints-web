import type { CatalogType } from "./constants";

interface CatalogItemProps {
  product: CatalogType;
}

const CatalogItem = ({ product }: CatalogItemProps) => {
  return (
    <div className="group flex flex-col">
      <div className="sm:px-0">
        <img
          src={product.image}
          alt={`Catalog ${product.id}`}
          className="h-full w-full"
        />
      </div>
    </div>
  );
};

export default CatalogItem;

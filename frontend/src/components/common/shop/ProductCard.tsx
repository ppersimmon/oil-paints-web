import type { ProductType } from "./constants";
import StarIcon from "../../../assets/icons/star.svg?react";
import MessageIcon from "../../../assets/icons/message.svg?react";

interface ProductCardProps {
  product: ProductType;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group border-border flex flex-col border bg-white p-4">
      <div className="relative mb-4 w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      <div className="mb-2 flex items-center gap-x-4">
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className={"h-5 w-5"} />
          ))}
        </div>
        <div className="text-text flex items-center gap-x-1 text-base">
          <MessageIcon className="h-5 w-5" />
          <span>{product.reviewsCount}</span>
        </div>
      </div>

      <h3 className="font-inter font-reqular text-text mb-2 text-base">
        {product.title}
      </h3>

      <div className="mt-auto">
        <span className="font-inter text-text text-base font-bold">
          {product.price} ₴
        </span>
      </div>
    </div>
  );
};

export default ProductCard;

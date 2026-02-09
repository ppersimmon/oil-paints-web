import { products } from "./constants";
import ProductsList from "./ProductsList";

const Products = () => {
  return (
    <section className="bg-grey100 items-center">
      <div className="mx-auto max-w-250 px-5 py-8 lg:px-0">
        <h2 className="font-sen text-2xl font-extrabold text-black lg:text-[40px]">
          Rosa Key Products
        </h2>

        <hr className="bg-border mt-8 mb-8 h-px border-0"></hr>
        <ProductsList products={products} />
      </div>
    </section>
  );
};

export default Products;

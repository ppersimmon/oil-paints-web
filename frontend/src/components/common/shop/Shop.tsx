import { products } from "./constants";
import ProductList from "./ProductList";
import Filter from "./Filter";
import FilterBar from "./FilterBar";

const ShopSection = () => {
  return (
    <section className="mb-16 bg-white">
      <div className="mx-auto w-full max-w-250 px-5 xl:px-0">
        <div className="flex flex-col lg:flex-row lg:gap-x-10">
          <div className="hidden lg:block">
            <Filter />
          </div>

          <div className="w-full flex-1">
            <FilterBar />
            <ProductList products={products} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;

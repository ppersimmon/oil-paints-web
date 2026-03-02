import ProductList from "./ProductList";
import Filter from "./Filter";
import FilterBar from "./FilterBar";
import { useProducts } from "../../../hooks/useProducts";

const ShopSection = () => {
  const { products, isLoading, error } = useProducts();

  return (
    <section className="mb-16 bg-white">
      <div className="mx-auto w-full max-w-250 px-5 xl:px-0">
        <div className="flex flex-col lg:flex-row lg:gap-x-10">
          <div className="hidden lg:block">
            <Filter />
          </div>

          <div className="w-full flex-1">
            <FilterBar />

            {isLoading && (
              <div className="font-inter py-10 text-center text-lg">
                Loading products...
              </div>
            )}

            {error && (
              <div className="font-inter py-10 text-center text-red-500">
                Error loading products: {error}
              </div>
            )}

            {!isLoading && !error && <ProductList products={products} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;

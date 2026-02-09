import { products } from "./constants";
import CatalogList from "./CatalogList";

const Catalog = () => {
  return (
    <section className="sm: items-center bg-black px-5 lg:pt-24">
      <div className="mx-auto max-w-250 py-16 lg:px-0">
        <div>
          <h2 className="font-sen text-center text-2xl font-extrabold text-white lg:text-[40px]">
            View Catalog
          </h2>
        </div>

        <hr className="mt-8 mb-8 h-px border-0 bg-white"></hr>

        <CatalogList products={products} />
      </div>
    </section>
  );
};

export default Catalog;

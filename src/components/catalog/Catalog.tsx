import { products } from "./constants";

const Catalog = () => {
  return (
    <section className="bg-black items-center lg:pt-24">
      <div className="mx-auto max-w-285 py-16 lg:px-0 md:px-24">
        <div>
          <h2 className="text-4xl font-sen font-extrabold text-white text-center">
            View Catalog
          </h2>
        </div>

        <hr className="border-0 h-px bg-white mb-10 mt-8"></hr>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col group">
              <div className="px-5 lg:px-0 md:px-24">
                <img src={product.image} className="w-full h-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;

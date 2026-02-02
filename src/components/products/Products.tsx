import { products } from "./constants";

const Products = () => {
  return (
    <section className="bg-grey100 items-center">
      <div className="mx-auto max-w-285 py-16 lg:px-0 md:px-24">
        <h2 className="text-4xl font-sen font-extrabold text-black text-center">
          Rosa Key Products
        </h2>

        <hr className="border-0 h-px bg-border mb-10 mt-8"></hr>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col group">
              <div className="px-5 lg:px-0 md:px-24">
                <img src={product.image} className="w-full h-full"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

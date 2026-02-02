import { articles } from "./constants";

const News = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-285 px-5 xl:px-0">
        <h2 className="text-4xl font-sen font-extrabold text-black">
          News
        </h2>

        <hr className="border-0 h-px bg-border mb-10 mt-8"></hr>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.id} className="border border-border p-5 flex flex-col h-full bg-white">
              <div className="w-full overflow-hidden mb-5">
                <img src={article.image} className="w-full h-full object-cover"/>
              </div>
         
              <p className="text-text-secondary text-sm font-inter mb-6">
                {article.title}
              </p>
              
              <button className="text-red font-medium text-sm self-start">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
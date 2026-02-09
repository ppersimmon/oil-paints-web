import { articles } from "./constants";

const News = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-250 px-5 xl:px-0">
        <h2 className="font-sen text-2xl font-extrabold text-black lg:text-[40px]">
          News
        </h2>

        <hr className="bg-border mt-8 mb-8 h-px border-0"></hr>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {articles.map((article) => (
            <div
              key={article.id}
              className="border-border flex h-full flex-col border bg-white p-10 sm:p-5"
            >
              <div className="mb-5 w-full overflow-hidden">
                <img
                  src={article.image}
                  className="h-full w-full object-cover"
                />
              </div>

              <p className="text-text-secondary font-inter mb-6 text-base">
                {article.title}
              </p>

              <button className="text-red mt-auto self-start text-base font-medium">
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

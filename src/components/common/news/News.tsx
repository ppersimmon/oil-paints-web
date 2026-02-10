import { articles } from "./constants";
import NewsList from "./NewsList";

const News = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-250 px-5 sm:px-12 xl:px-0">
        <h2 className="font-sen text-2xl font-extrabold text-black lg:text-[40px]">
          News
        </h2>

        <hr className="bg-border mt-8 mb-8 h-px border-0"></hr>

        <NewsList articles={articles} />
      </div>
    </section>
  );
};

export default News;

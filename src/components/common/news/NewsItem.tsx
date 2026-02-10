import type { NewsType } from "./constants";

interface NewsItemProps {
  article: NewsType;
}

const NewsItem = ({ article }: NewsItemProps) => {
  return (
    <div className="border-border flex h-full flex-col border bg-white p-10 sm:p-5">
      <div className="mb-5 w-full overflow-hidden">
        <img
          src={article.image}
          alt={`Article ${article.id}`}
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
  );
};

export default NewsItem;

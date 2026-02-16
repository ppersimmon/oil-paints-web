import NewsItem from "./NewsItem";
import type { NewsType } from "./constants";

interface NewsListProps {
  articles: NewsType[];
}

const NewsList = ({ articles }: NewsListProps) => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
      {articles.map((article) => (
        <NewsItem key={article.id} article={article} />
      ))}
    </div>
  );
};

export default NewsList;

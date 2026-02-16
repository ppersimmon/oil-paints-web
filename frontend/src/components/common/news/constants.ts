import article1 from "../../../assets/images/article_1.jpg";
import article2 from "../../../assets/images/article_2.jpg";
import article3 from "../../../assets/images/article_3.jpg";
import article4 from "../../../assets/images/article_4.jpg";
import article5 from "../../../assets/images/article_5.jpg";
import article6 from "../../../assets/images/article_6.jpg";

export interface NewsType {
  id: number;
  image: string;
  title: string;
}

export const articles: NewsType[] = [
  {
    id: 1,
    image: article1,
    title: "Expansion of ROSA Studio Drawing Paper Range.",
  },
  {
    id: 2,
    image: article2,
    title: "ROSA Studio Spiral-Bound Watercolour Sketchbook.",
  },
  {
    id: 3,
    image: article3,
    title: "Updated packaging for ROSA Studio 20 ml oil paint sets.",
  },
  {
    id: 4,
    image: article4,
    title: "New Textured Watercolour Paper Medium Grain from ROSA Studio.",
  },
  {
    id: 5,
    image: article5,
    title:
      "Limited edition series of Special Edition watercolour sets from ROSA Gallery.",
  },
  { id: 6, image: article6, title: "Season 6 of the Student Day competition." },
];

export default articles;

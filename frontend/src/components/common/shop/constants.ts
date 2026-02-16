import cardImage from "../../../assets/images/shop_item_card.jpg";

export interface ProductType {
  id: number;
  image: string;
  title: string;
  rating: number;
  reviewsCount: number;
  price: number;
  isNew?: boolean;
}

export const products: ProductType[] = [
  {
    id: 1,
    image: cardImage,
    title: "Oil paint set, 10 ml, ROSA Gallery",
    rating: 5,
    reviewsCount: 11,
    price: 944,
  },
  {
    id: 2,
    image: cardImage,
    title: "Oil paint set, 10 ml, ROSA Gallery",
    rating: 5,
    reviewsCount: 11,
    price: 944,
  },
  {
    id: 3,
    image: cardImage,
    title: "Oil paint set, 10 ml, ROSA Gallery",
    rating: 5,
    reviewsCount: 11,
    price: 944,
  },
  {
    id: 4,
    image: cardImage,
    title: "Oil paint set, 10 ml, ROSA Gallery",
    rating: 5,
    reviewsCount: 11,
    price: 944,
  },
  {
    id: 5,
    image: cardImage,
    title: "Oil paint set, 10 ml, ROSA Gallery",
    rating: 5,
    reviewsCount: 11,
    price: 944,
  },
  {
    id: 6,
    image: cardImage,
    title: "Oil paint set, 10 ml, ROSA Gallery",
    rating: 5,
    reviewsCount: 11,
    price: 944,
  },
];

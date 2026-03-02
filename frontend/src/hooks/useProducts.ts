import { useState, useEffect } from "react";
import axios from "axios";
import type { ProductType } from "../components/common/shop/constants";
import cardImage from "../assets/images/shop_item_card.jpg";

export const useProducts = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  interface ProductApiResponseI {
    id: number;
    title: string;
    slug: string;
    price: number;
    image: string | null;
    rating: number;
    reviews_count: number;
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const baseUrl = import.meta.env.VITE_API_URL;
        const response = await axios.get<ProductApiResponseI[]>(
          `${baseUrl}/products`,
        );

        const formattedProducts: ProductType[] = response.data.map((item) => ({
          id: item.id,
          title: item.title,
          slug: item.slug,
          price: item.price,
          image: cardImage,
          rating: item.rating,
          reviewsCount: item.reviews_count,
        }));

        setProducts(formattedProducts);
        setError(null);
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          setError(err.message);
        } else if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Failed to fetch products");
        }
      } finally {
        setIsLoading(false);
      }
    };

    void fetchProducts();
  }, []);

  return { products, isLoading, error };
};

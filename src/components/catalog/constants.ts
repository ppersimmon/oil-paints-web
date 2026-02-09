import catalogItem1 from "../../assets/images/catalog_item1.jpg";
import catalogItem2 from "../../assets/images/catalog_item2.jpg";
import catalogItem3 from "../../assets/images/catalog_item3.jpg";
import catalogItem4 from "../../assets/images/catalog_item4.jpg";

export interface CatalogType {
  id: number;
  image: string;
}

export const products: CatalogType[] = [
  { id: 1, image: catalogItem1 },
  { id: 2, image: catalogItem2 },
  { id: 3, image: catalogItem3 },
  { id: 4, image: catalogItem4 },
];

export default products;

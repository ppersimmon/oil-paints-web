import Hero from "../common/hero/Hero";
import Catalog from "../common/catalog/Catalog";
import Products from "../common/products/Products";
import News from "../common/news/News";
import Newsletter from "../common/newsletter/Newsletter";
import Mission from "../common/mission/Mission";

const HomePage = () => (
  <div>
    <Hero />
    <Catalog />
    <Mission />
    <Products />
    <News />
    <Newsletter />
  </div>
);

export default HomePage;

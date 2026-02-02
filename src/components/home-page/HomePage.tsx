import Hero from "../hero/Hero";
import Catalog from "../catalog/Catalog";
import Products from "../products/Products";
import News from "../news/News";
import Newsletter from "../newsletter/Newsletter";
import Mission from "../mission/Mission";

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

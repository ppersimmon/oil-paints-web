import { Routes, Route } from "react-router";
import Layout from "./Layout";
import HomePage from "./components/home-page/HomePage";
import AboutUsPage from "./components/about-us-page/AboutUsPage";
import ShopPage from "./components/shop-page/ShopPage";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutUsPage />} />
      <Route path="shop" element={<ShopPage />} />
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Route>
  </Routes>
);

export default AppRoutes;

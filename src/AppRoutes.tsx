import { Routes, Route } from "react-router";
import Layout from "./Layout";
import HomePage from "./components/home-page/HomePage";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      {/* </Route><Route path="about" element={<AboutPage />} /> */}
      {/* <Route path="shop" element={<ShopPage />} /> */}
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Route>
  </Routes>
);

export default AppRoutes;

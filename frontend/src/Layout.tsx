import { Outlet } from "react-router";
import Footer from "./components/common/footer/Footer";
import Header from "./components/common/header/Header";

const Layout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

export default Layout;

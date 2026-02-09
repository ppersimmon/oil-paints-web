import { Link } from "react-router";
import logoImg from "../../assets/images/logo/logo_ROSA.png";
import MenuIcon from "../../assets/icons/menu.svg?react";
import ArrowMenuIcon from "../../assets/icons/menu_arrow.svg?react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-black">
      <div className="mx-auto w-full px-5 sm:px-12 lg:max-w-250 lg:px-0">
        <div className="grid grid-cols-3 items-center py-4 lg:hidden">
          <div className="justify-self-start">
            <button type="button" className="-m-2 p-2 text-white">
              <span className="sr-only">Open menu</span>
              <MenuIcon />
            </button>
          </div>

          <div className="justify-self-center">
            <Link to="/">
              <img src={logoImg} className="h-12 w-16" />
            </Link>
          </div>

          <div className="justify-self-end text-white">
            <div className="font-regular text-sm">
              <span>UK</span>
              <span className="opacity-50e mx-1">|</span>
              <span>EN</span>
            </div>
          </div>
        </div>

        <div className="hidden items-center justify-between py-4 lg:flex">
          <Link to="/" className="shrink-0">
            <img src={logoImg} className="h-10 w-auto" />
          </Link>

          <nav className="flex gap-x-8">
            <Link
              to="/"
              className="font-regular hover:text-red text-sm tracking-wide text-white"
            >
              HOME
            </Link>

            <button
              type="button"
              className="group font-regular hover:text-red flex items-center gap-x-1 text-sm tracking-wide text-white"
            >
              PRODUCTS
              <ArrowMenuIcon />
            </button>

            <button
              type="button"
              className="group font-regular hover:text-red flex items-center gap-x-1 text-sm tracking-wide text-white uppercase"
            >
              BRANDS
              <ArrowMenuIcon />
            </button>

            <a
              href="#"
              className="font-regular hover:text-red text-sm tracking-wide text-white"
            >
              ROSA & ARTISTS
            </a>
            <Link
              to="/about"
              className="font-regulartracking-wide hover:text-red text-sm text-white"
            >
              COMPANY
            </Link>
            <Link
              to="/shop"
              className="font-regular hover:text-red text-sm tracking-wide text-white"
            >
              SHOP
            </Link>
          </nav>

          <div className="font-regular flex items-center gap-x-1 text-sm">
            <button type="button" className="hover:text-red text-white">
              UK
            </button>
            <span className="text-gray-500">|</span>
            <button type="button" className="hover:text-red text-white">
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

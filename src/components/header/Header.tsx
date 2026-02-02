import { Link } from "react-router-dom";
import MenuIcon from "../../assets/icons/menu.svg?react";
import ArrowMenuIcon from "../../assets/icons/menu_arrow.svg?react";

const Header = () => {

  return (
    <header className="bg-black sticky top-0 z-50">
      <div className="mx-auto w-full lg:max-w-285 px-5 lg:px-0  md:px-12">
        <div className="grid grid-cols-3 items-center py-4 lg:hidden">
            <div className="justify-self-start">
                <button type="button" className="-m-2 p-2 text-white">
                    <span className="sr-only">Open menu</span>
                    <MenuIcon />
                </button>
            </div>

            <div className="justify-self-center">
                <Link to="/">
                    <img src="src/assets/images/logo/logo_ROSA.png" className="h-8 w-auto" />
                </Link>
            </div>

            <div className="justify-self-end text-white">
                 <div className="text-sm font-regular">
                    <span>UK</span>
                    <span className="mx-1 opacity-50e">|</span>
                    <span>EN</span>
                </div>
            </div>
        </div>

        <div className="hidden lg:flex items-center justify-between py-4">
            <Link to="/" className="shrink-0">
                <img src="src/assets/images/logo/logo_ROSA.png" alt="" className="h-10 w-auto" />
            </Link>

            <nav className="flex gap-x-8">
                <Link to="/" className="text-sm font-regular tracking-wide text-white hover:text-red">
                    HOME
                </Link>
                
                <button type="button" className="group flex items-center gap-x-1 text-sm font-regular tracking-wide text-white hover:text-red">
                    PRODUCTS
                    <ArrowMenuIcon />
                </button>

                <button type="button" className="group flex items-center gap-x-1 text-sm font-regular uppercase tracking-wide text-white hover:text-red">
                    BRANDS
                    <ArrowMenuIcon />
                </button>

                <a href="#" className="text-sm font-regular tracking-wide text-white hover:text-red">
                    ROSA & ARTISTS
                </a>
                <Link to="/about" className="text-sm font-regulartracking-wide text-white hover:text-red">
                    COMPANY
                </Link>
                <Link to="/shop" className="text-sm font-regular tracking-wide text-white hover:text-red">
                    SHOP
                </Link>
            </nav>

            <div className="flex items-center gap-x-1 text-sm font-regular">
                 <button type="button" className="text-white hover:text-red">UK</button>
                 <span className="text-gray-500">|</span>
                 <button type="button" className="text-white hover:text-red">EN</button>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
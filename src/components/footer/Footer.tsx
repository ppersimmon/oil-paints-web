import FacebookIcon from "../../assets/icons/facebook.svg?react";
import InstagramIcon from "../../assets/icons/instagram.svg?react";
import YoutubeIcon from "../../assets/icons/youtube.svg?react";
import PinterestIcon from "../../assets/icons/pinterest.svg?react";

const Footer = () => {
  return (
    <footer>
      <div className="bg-white py-16">
        <div className="mx-auto max-w-285 px-5 xl:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-20">
            <div className="flex flex-col">
              <h3 className="text-text font-bold mb-6">Categories</h3>
              <ul className="flex flex-col gap-3 text-text text-sm">
                <li>
                  <a href="#">ROSA PRODUCTS</a>
                </li>
                <li>
                  <a href="#">ROSA BRANDS</a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col">
              <h3 className="text-text font-bold mb-6">Contact Information</h3>
              <div className="text-text flex flex-col gap-4">
                <p>“ROSA GROUP” LLC , Ukraine, 45400, Volyn region, Novovolynsk,Knyahynia Olha str., 64</p>
                <p>Call us: +38(067) 332-03-23</p>
                <p>Email: art@rosa.ua</p>
              </div>
            </div>

            <div className="flex flex-col">
              <h3 className="text-gray-900 font-bold mb-6">
                Follow Us On Social
              </h3>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <YoutubeIcon />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <PinterestIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black py-5">
        <div className="mx-auto max-w-285 px-5 xl:px-0 text-center">
          <p className="text-white text-sm font-inter font-light">
            &copy; ROSA, 2026. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import FacebookIcon from "../../../assets/icons/facebook.svg?react";
import InstagramIcon from "../../../assets/icons/instagram.svg?react";
import YoutubeIcon from "../../../assets/icons/youtube.svg?react";
import PinterestIcon from "../../../assets/icons/pinterest.svg?react";

const Footer = () => {
  return (
    <footer>
      <div className="bg-white pt-10 pb-16">
        <div className="mx-auto max-w-250 px-5 sm:px-12 xl:px-0">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            <div className="flex flex-col">
              <h3 className="text-text mb-6 font-bold">Categories</h3>
              <ul className="text-text flex flex-col gap-3 text-base">
                <li>
                  <a href="#">ROSA PRODUCTS</a>
                </li>
                <li>
                  <a href="#">ROSA BRANDS</a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col">
              <h3 className="text-text mb-6 font-bold">Contact Information</h3>
              <div className="text-text flex flex-col gap-4 text-base">
                <p>
                  “ROSA GROUP” LLC , Ukraine, 45400, Volyn region,
                  Novovolynsk,Knyahynia Olha str., 64
                </p>
                <span>
                  Call us: <a>+38(067) 332-03-23</a>
                </span>
                <span>
                  Email: <a>art@rosa.ua</a>
                </span>
              </div>
            </div>

            <div className="flex flex-col">
              <h3 className="text-text mb-6 font-bold">Follow Us On Social</h3>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center transition-opacity hover:opacity-80"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center transition-opacity hover:opacity-80"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center transition-opacity hover:opacity-80"
                >
                  <YoutubeIcon />
                </a>
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center transition-opacity hover:opacity-80"
                >
                  <PinterestIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black py-5">
        <div className="mx-auto max-w-285 px-5 text-center xl:px-0">
          <p className="font-inter text-sm font-light text-white">
            &copy; ROSA, 2026. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import shopHeroImg from "../../../assets/images/backgrounds/shop-hero-background.jpg";
import ChevronLeftIcon from "../../../assets/icons/chevron_left.svg?react";
import ChevronRightIcon from "../../../assets/icons/chevron_right.svg?react";

const slides = [
  {
    id: 1,
    image: shopHeroImg,
  },
];

const ShopHero = () => {
  return (
    <section className="mb-16 h-100 bg-white">
      <div className="mx-auto">
        <div className="relative h-100 w-full overflow-hidden sm:h-96">
          <img
            src={slides[0].image}
            className="h-full w-full object-cover object-center"
          />

          <div className="absolute top-1/2 left-2 z-20 -translate-y-1/2 cursor-pointer p-2 sm:left-5">
            <ChevronLeftIcon className="text-icons-grey h-6 w-6 md:h-16 md:w-16" />
          </div>

          <div className="absolute top-1/2 right-2 z-20 -translate-y-1/2 cursor-pointer p-2 sm:right-5">
            <ChevronRightIcon className="text-icons-grey h-6 w-6 md:h-16 md:w-16" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopHero;

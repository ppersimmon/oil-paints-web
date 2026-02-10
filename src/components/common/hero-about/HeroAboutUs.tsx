import sliderImg1 from "../../../assets/images/backgrounds/hero-about-background.jpg";
import ChevronLeftIcon from "../../../assets/icons/chevron_left.svg?react";
import ChevronRightIcon from "../../../assets/icons/chevron_right.svg?react";

const slides = [
  {
    id: 1,
    image: sliderImg1,
  },
];

const AboutHero = () => {
  return (
    <section className="h-125 bg-white pt-10 pb-16 sm:h-150 lg:h-200">
      <div className="mx-auto w-full max-w-250 px-5 xl:px-0">
        <h1 className="font-sen mb-10 text-center text-[32px] font-extrabold text-black lg:text-[40px]">
          About Us
        </h1>

        <div className="relative h-60 w-full sm:h-125">
          <img
            src={slides[0].image}
            alt="About Slide"
            className="h-full w-full object-cover object-center sm:object-contain"
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

export default AboutHero;

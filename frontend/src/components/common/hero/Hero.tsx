import heroBackground from "../../../assets/images/backgrounds/hero-background.jpg";

const Hero = () => (
  <section className="mb-16 flex max-h-150 w-full bg-white lg:mb-40 lg:max-h-180">
    <div
      className="absolute left-0 mt-8 h-125 w-full bg-cover bg-center bg-no-repeat lg:mt-15"
      style={{ backgroundImage: `url(${heroBackground})` }}
    ></div>
    <div className="z-10 w-full lg:mt-15">
      <div className="mx-auto grid h-125 w-full max-w-250 grid-cols-1 items-center px-5 sm:justify-items-center sm:px-24 lg:grid-cols-2 lg:px-0">
        <div className="lg:col-span-1 lg:block"></div>
        <div className="flex h-100 flex-col items-start gap-y-4 overflow-x-hidden bg-black p-10 sm:w-115 sm:justify-center lg:w-full">
          <h1 className="font-sen text-[28px] leading-9 font-extrabold wrap-break-word text-white sm:text-[32px] md:text-[40px]">
            UKRAINIAN MANUFACTURER OF FINE ART MATERIALS
          </h1>
          <p className="font-regular font-inter text-sm text-white/70">
            Ready to bring your vision to life? The perfect canvas is waiting
            for you. Turn your creative ideas into reality with
            <br />
            ROSA today.
          </p>
          <button className="bg-red px-8 py-2 text-sm font-semibold text-white">
            OUR SHOP
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;

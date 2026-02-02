import heroBackground from "../../assets/images/backgrounds/hero-background.jpg";

const Hero = () => (
    <section className="bg-cover bg-center mt-6 mb-12 lg:mb-32 bg-no-repeat w-full" style={{backgroundImage: `url(${heroBackground})`}}>
        <div className="grid grid-cols-1 px-5 lg:grid-cols-2 mx-auto w-full max-w-285 py-16 lg:px-0 md:px-24">
            <div className="lg:block lg:col-span-1"></div>
            <div className="bg-black p-5 flex flex-col items-start gap-y-4 overflow-x-hidden md:p-10">
                <h1 className="text-3xl leading-tight font-extrabold text-white font-sen wrap-break-words md:text-5xl">
                    UKRAINIAN MANUFACTURER OF FINE ART MATERIALS
                </h1>
                <p className="text- font-regular text-white/70 font-inter">
                    Ready to bring your vision to life? The perfect canvas is
                    waiting for you. Turn your creative ideas into reality
                    with ROSA today.
                </p>
                <button className="bg-red text-white px-8 py-2 text-sm font-semibold ">
                    OUR SHOP
                </button>
            </div>
        </div>
    </section>
);

export default Hero;
import cardBackground from "../../assets/images/backgrounds/card_background.jpg";

const Mission = () => {
  return (
    <section className="bg-grey100 py-20">
      <div className="mx-auto max-w-285 px-5 xl:px-0">
        <h2 className="text-4xl font-sen font-extrabold text-black text-center">
          Our Mission
        </h2>

        <hr className="border-0 h-px bg-border mb-10 mt-8"></hr>

        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-[65%]">
            <img src={cardBackground} className="w-full h-full object-cover" />
          </div>
          <div className="bg-white p-8 md:p-12 shadow-xl w-[90%] md:w-[80%] lg:w-[45%] -mt-16 lg:mt-0 lg:-ml-24 flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-sen font-semibold text-black mb-6">
              ROSA is a leading Ukrainian manufacturer of professional art
              products
            </h3>

            <div className="text-text text-sm font-inter flex flex-col gap-6 mb-8">
              <p>
                Our history begins in 1996 with experience in the production of
                art materials.
              </p>
              <p>
                We help people of all ages and artistic levels open and realize
                their creative potential by carefully selecting and producing
                high-quality art materials as well as giving the chance to our
                customers to buy ROSA products either in retail stores all over
                Ukraine or in online stores.
              </p>
            </div>
            <button className="text-red font-medium self-start">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;

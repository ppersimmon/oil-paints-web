import cardBackground from "../../../assets/images/backgrounds/card_background.jpg";

const Mission = () => {
  return (
    <section className="bg-gray-100 py-16 lg:pb-32">
      <div className="mx-auto max-w-250 px-5 sm:px-12 xl:px-0">
        <h2 className="font-sen text-center text-2xl font-extrabold text-black lg:text-[40px]">
          Our Mission
        </h2>

        <hr className="bg-border mt-8 mb-8 h-px border-0"></hr>

        <div className="flex flex-col items-center sm:flex-row sm:items-start">
          <div className="sm:h-[65%] sm:w-[80%] lg:w-[65%]">
            <img
              src={cardBackground}
              className="h-90 w-full object-cover lg:h-125"
              alt="Art materials"
            />
          </div>

          <div className="z-10 -mt-40 flex w-[90%] flex-col justify-center bg-white p-6 shadow-xl sm:mt-40 sm:-ml-20 sm:h-[50%] sm:w-[80%] sm:p-10 lg:mt-8 lg:-ml-32 lg:w-125 lg:p-12">
            <h3 className="font-sen mb-6 text-xl font-semibold text-black sm:text-2xl">
              ROSA is a leading Ukrainian manufacturer of professional art
              products
            </h3>

            <div className="font-inter text-text mb-8 flex flex-col gap-6 text-sm">
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
            <button className="text-red self-start text-base font-medium transition">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;

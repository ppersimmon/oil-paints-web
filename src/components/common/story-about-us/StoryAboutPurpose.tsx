import storyImage from "../../../assets/images/backgrounds/purpose-background.jpg";

const StoryAboutPurpose = () => {
  return (
    <section className="bg-black py-10 lg:h-140 lg:py-24">
      <div className="mx-auto w-full max-w-250 px-5 sm:px-0 lg:px-0">
        <div className="flex flex-col-reverse sm:flex-row sm:gap-x-5 sm:px-12 lg:items-start lg:gap-x-10 lg:px-0">
          <div className="w-full opacity-80 lg:w-1/2">
            <h2 className="font-inter text-text-neutral mb-2 text-2xl font-bold lg:text-2xl">
              Social Responsibility: Art with a Purpose
            </h2>
            <p className="font-inter mb-6 text-xl text-white">
              We believe that creativity has the power to change the world for
              the better.
            </p>

            <div className="font-inter space-y-6 text-base font-light text-white">
              <p>
                As a proud Ukrainian brand, our mission extends beyond
                manufacturing. We are deeply committed to supporting Ukrainians
                who find themselves in difficult life circumstances.
              </p>
              <p>
                ROSA materials serve as essential instruments in art therapy,
                helping individuals create works filled with deep meaning. Under
                the guidance of professional artists and therapists, many people
                discover art as a way to relieve stress, overcome anxiety, and
                navigate daily challenges.
              </p>
            </div>
          </div>
          <div className="mb-10 w-full sm:w-1/2 lg:mb-0">
            <img
              src={storyImage}
              className="lg:-auto h-auto w-full object-cover sm:h-50 sm:w-50 lg:h-89 lg:w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryAboutPurpose;

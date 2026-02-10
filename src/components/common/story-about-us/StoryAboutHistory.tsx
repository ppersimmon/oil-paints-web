import storyImage from "../../../assets/images/backgrounds/history-background.jpg";

const StoryAboutHistory = () => {
  return (
    <section className="bg-black py-10 lg:h-140 lg:py-24">
      <div className="mx-auto w-full max-w-250 px-5 sm:px-0 lg:px-0">
        <div className="flex flex-col sm:flex-row sm:gap-x-5 sm:px-12 lg:items-start lg:gap-x-10 lg:px-0">
          <div className="mb-10 w-full sm:w-1/2 lg:mb-0">
            <img
              src={storyImage}
              className="lg:-auto h-auto w-full object-cover sm:h-50 sm:w-50 lg:h-89 lg:w-full"
            />
          </div>

          <div className="w-full opacity-80 lg:w-1/2">
            <h2 className="font-inter text-text-neutral mb-2 text-2xl font-bold lg:text-2xl">
              Where Every Masterpiece Begins
            </h2>
            <p className="font-inter mb-6 text-xl text-white">
              A Tradition of Quality Since 1998.
            </p>

            <div className="font-inter space-y-6 text-base font-light text-white">
              <p>
                The story of ROSA began with a clear focus: perfecting the art
                of priming. What started as a dedicated production of primed
                bases for painting has evolved into a comprehensive resource for
                artists worldwide.
              </p>
              <p>
                Over the decades, we have honed our expertise, blending
                time-tested traditions with modern manufacturing capabilities to
                support artists at every stage of their creative journey.
              </p>
              <p>
                We believe that a great painting starts with the right
                foundation. That is why we use exclusively natural linen and
                cotton fabrics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryAboutHistory;

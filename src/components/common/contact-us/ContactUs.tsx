const ContactUs = () => {
  return (
    <section className="bg-grey100 pt-16 pb-8 lg:py-24">
      <div className="mx-auto w-full max-w-250 px-5 sm:px-12 xl:px-0">
        <h2 className="font-sen text-text mb-10 text-center text-2xl font-extrabold lg:text-[40px]">
          Contact Us
        </h2>

        <div className="flex flex-col-reverse gap-y-10 sm:flex-row sm:gap-x-5 lg:gap-x-16">
          <div className="w-full lg:w-1/2">
            <h3 className="font-inter text-text mb-2 text-2xl font-semibold">
              We’d Love to Hear From You
            </h3>
            <p className="font-inter text-text-secondary mb-8 text-xl">
              Let’s Create Together
            </p>

            <div className="font-inter text-text mb-10 space-y-6 text-base leading-6">
              <p>
                Whether you have a question about our canvases, need advice on
                materials, or are interested in partnership opportunities, our
                team is here to help.
              </p>
              <p>
                At ROSA, we are always open to dialogue with artists, partners,
                and friends. If you have an idea, a request, or feedback, share
                it with us. Let’s make the art world better together.
              </p>
            </div>

            <h3 className="font-sen text-text mb-4 text-2xl font-semibold">
              Art Support
            </h3>
            <div className="font-inter text-text-secondary text-sm leading-6 font-medium">
              <p className="mb-4">
                “ROSA GROUP” LLC , Ukraine, 45400, Volyn region, Novovolynsk,
                Knyahynia Olha str., 64
              </p>
              <p>
                Phone:{" "}
                <span className="font-inter text-text-secondary text-sm font-medium">
                  <a>+38(067) 332-03-23</a>
                </span>
                <span>
                  , E-mail <a>art@rosa.ua</a>
                </span>
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <form className="rounded-lg bg-white p-6 sm:p-8">
              <div className="mb-4">
                <label className="text-text font-regular mb-2 block text-base">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="border-border-default font-regular placeholder-border-default w-full resize-none rounded-lg border px-4 py-2 text-base"
                />
              </div>

              <div className="mb-4">
                <label className="text-text font-regular mb-2 block text-base">
                  Phone
                </label>
                <input
                  type="text"
                  placeholder="+38(067) 123-12-12"
                  className="border-border-default font-regular placeholder-border-default w-full resize-none rounded-lg border px-4 py-2 text-base"
                />
              </div>

              <div className="mb-4">
                <label className="text-text font-regular mb-2 block text-base">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="email@gmail.com"
                  className="border-border-default font-regular placeholder-border-default w-full resize-none rounded-lg border px-4 py-2 text-base"
                />
              </div>

              <div className="mb-6">
                <label className="text-text font-regular mb-2 block text-base">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Message"
                  className="border-border-default font-regular placeholder-border-default w-full resize-none rounded-lg border px-4 py-2 text-base"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-red w-full rounded-lg py-2 text-base font-semibold text-white"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

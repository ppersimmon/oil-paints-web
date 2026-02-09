import SubmitIcon from "../../assets/icons/submit_arrow.svg?react";

const Newsletter = () => {
  return (
    <section className="bg-black px-5 py-16">
      <div className="mx-auto flex max-w-285 flex-col items-center text-center">
        <h2 className="font-sen mb-3 text-2xl font-bold text-white md:text-4xl">
          Follow the latest news
        </h2>
        <p className="text-text-secondary font-inter mb-5 text-[18px]">
          With our daily newsletter
        </p>

        <form className="flex max-h-10 w-full max-w-55">
          <input
            type="email"
            placeholder="Enter your e-mail"
            className="text-text-secondary font-inter w-full rounded-l-sm bg-white px-6 py-3.5 text-sm placeholder-gray-400"
          />
          <button className="bg-red flex items-center justify-center rounded-r-sm px-4 text-white transition-colors">
            <SubmitIcon />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;

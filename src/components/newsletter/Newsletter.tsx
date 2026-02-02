import SubmitIcon from "../../assets/icons/submit_arrow.svg?react";

const Newsletter = () => {
  return (
    <section className="bg-black py-24 px-5">
      <div className="mx-auto max-w-285 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-sen font-bold text-white mb-3">
          Follow the latest news
        </h2>
        <p className="text-text-secondary font-inter mb-5">
          With our daily newsletter
        </p>

        <form className="flex w-full max-w-65">
          <input type="email" placeholder="Enter your e-mail" className="w-full bg-white text-text-secondary px-6 py-3.5 font-inter text-sm placeholder-gray-400 rounded-l-sm"/>
          <button className="bg-red text-white px-4 flex items-center justify-center transition-colors rounded-r-sm">
            <SubmitIcon />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
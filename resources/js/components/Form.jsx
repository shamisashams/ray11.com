import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Form = () => {
  return (
    <div className="text-center form ">
      <div className="xl:text-7xl sm:text-5xl text-3xl bold mb-7 text-custom-yellow title">
        Get in touch
      </div>
      <p className="opacity-30 mb-5 ">
        If you have any questions feel free to ask anytime
      </p>
      <form className="max-w-sm mx-auto">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Surname" />
        <input type="text" placeholder="Phone number" />
        <input type="text" placeholder="Email address" />
        <textarea placeholder="Enter message here" />
        <button
          className={`flex items-center justify-center border border-solid border-white bold text-white sm:h-10 h-10 w-fit sm:px-6 px-4 rounded-full transition-all duration-300  sm:text-base text-sm  whitespace-nowrap mx-auto`}
        >
          <span>Send message</span>
          <HiArrowNarrowRight className="w-6 h-6 m-2" />
        </button>
      </form>
    </div>
  );
};

export default Form;

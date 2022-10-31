import React from "react";
import { Link } from "react-router-dom";
// import bg from "../assets/images/bgs/4.png";
// import Img1 from "../assets/images/other/3.png";
// import Img2 from "../assets/images/other/4.png";
import { SocialMedia } from "../components/SmallComps";
import { HiArrowNarrowLeft } from "react-icons/hi";

const SingleNews = () => {
  return (
    <div className="relative py-40">
      <img className="-z-10 absolute top-0 right-0" src="/assets/images/bgs/4.png" alt="" />
      <div className="wrapper">
        <Link
          to="/contact"
          className={`flex items-center justify-center border border-solid border-white bold text-white sm:h-10 h-10 w-fit sm:px-6 px-4 rounded-full   sm:text-base text-sm  whitespace-nowrap`}
        >
          <span>Back to news</span>
          <HiArrowNarrowLeft className="w-6 h-6 m-2" />
        </Link>
        <div className=" max-w-lg mx-auto xl:-mt-12 mt-10">
          <div className=" xl:text-6xl sm:text-5xl text-4xl bold ">
            News name
          </div>
          <p className="my-5">
            Date: <span className="opacity-50">10.12.2022</span>
          </p>
          <img className="mb-8" src="/assets/images/other/3.png" alt="" />
          <p className="mb-8 text-justify">
            From banking and insurance to wealth management and on securities
            distribution, we dedicated financial services them the teams serve
            all major sectors. of the industry. From banking and insurance to
            wealth management and on securities distribution, we dedicated
            financial services them the teams serve all major sectors. of the
            industry.
          </p>
          <p className="mb-8 text-justify">
            From banking and insurance to wealth management and on securities
            distribution, we dedicated financial services them the teams serve
            all major sectors. of the industry. From banking and insurance to
            wealth management and on securities distribution, we dedicated
            financial services them the teams serve all major sectors. of the
            industry.
          </p>
          <p className="mb-8 text-justify">
            From banking and insurance to wealth management and on securities
            distribution, we dedicated financial services them the teams serve
            all major sectors. of the industry. From banking and insurance to
            wealth management and on securities distribution, we dedicated
            financial services them the teams serve all major sectors. of the
            industry.
          </p>
          <img className="mb-8" src="/assets/images/other/4.png" alt="" />
          <p className="mb-8 text-justify">
            From banking and insurance to wealth management and on securities
            distribution, we dedicated financial services them the teams serve
            all major sectors. of the industry. From banking and insurance to
            wealth management and on securities distribution, we dedicated
            financial services them the teams serve all major sectors. of the
            industry.
          </p>
          <p className="mb-8 text-justify">
            From banking and insurance to ties distribution, we dedicated
            financial services them the teams serve all major sectors. of the
            industry.
          </p>
          <div className="max-w-xs mx-auto border-t-2 border-white pt-10 mt-10 text-center">
            <div className="bold mb-5">Share to others:</div>
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleNews;

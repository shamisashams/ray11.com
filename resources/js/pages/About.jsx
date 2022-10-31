import React, { useState } from "react";
import Img1 from "../assets/images/other/5.png";
import Img2 from "../assets/images/other/6.png";
import Img3 from "../assets/images/other/7.png";
import Img4 from "../assets/images/other/8.png";
import ImageLayout from "../components/ImageLayout";
import PlayIcon from "../assets/images/svg/play.svg";
import VideoPopup from "../components/VideoPopup";
import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";
import { companies } from "../components/Data";

const About = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <>
      <section className="relative pt-60">
        <img className="absolute left-0 top-10 -z-10" src={Img1} alt="" />
        <img
          className="absolute right-0 top-0 -z-10 md:w-1/2 w-2/3"
          src={Img3}
          alt=""
        />
        <div className="wrapper relative">
          {" "}
          <img className="absolute left-32 -top-20 z-10" src={Img2} alt="" />
          <div className="bold opacity-50 text-2xl relative w-fit">
            About us
          </div>
          <div className=" 2xl:text-7xl xl:text-6xl sm:text-5xl text-4xl mb-10 max-w-2xl underline italic mt-10">
            We are the best at creating things that's why so many people trusts
            us.
          </div>
        </div>
      </section>
      <section className="lg:mt-40 mt-20">
        <ImageLayout />
      </section>
      <section className="wrapper text-center py-20">
        <div className="bold text-2xl opacity-30 mb-10">History</div>
        <div className="max-w-5xl mx-auto relative">
          <div className="absolute w-8 h-8 -top-5 -left-5 border-l-4 border-t-4"></div>
          <div className="absolute w-8 h-8 -top-5 -right-5 border-r-4 border-t-4"></div>
          <div className="absolute w-8 h-8 -bottom-5 -right-5 border-r-4 border-b-4"></div>
          <div className="absolute w-8 h-8 -bottom-5 -left-5 border-l-4 border-b-4"></div>
          <p className="opacity-50">
            {" "}
            A business goal is an endpoint, accomplishment or target an
            organization wants to achieve in the short term or long term.
            Business goals can take many different forms and be aspirational or
            motivational, such as driving an organization toward a certain
            objective like improved customer service. A business goal is an
            endpoint, accomplishment or target an organization wants to achieve
            in the short term or long term. Business goals can take many
            different forms and be aspirational or motivational, such as driving
            an organization toward a certain objective like improved customer
            service.
          </p>
        </div>
      </section>
      <section
        onClick={() => setShowVideo(true)}
        className="relative h-fit cursor-pointer group"
      >
        <img className="max-h-screen" src={Img4} alt="" />
        <img
          className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 group-hover:animate-pulse"
          src={PlayIcon}
          alt=""
        />
      </section>
      <section className="py-20 wrapper">
        <div className="flex md:items-center items-start justify-start mb-10 flex-col md:flex-row">
          <div className="bold lg:text-4xl text-2xl">Our Companies</div>
          <div className="h-12 w-0.5 bg-white rounded mx-6 md:inline-block hidden"></div>
          <p className="opacity-30 max-w-2xl">
            From banking and insurance to wealth management and on securities
            distribution, we dedicated financial services them the teams serve
            all major sectors. of the industry.
          </p>
        </div>
        <div className="flex items-start 2xl:justify-between justify-center flex-wrap 2xl:flex-nowrap -m-2">
          {companies.map((item, index) => {
            return (
              <div
                key={index}
                className={`group h-80 2xl:w-1/5 max-w-sm border border-solid border-custom-slate-900 py-8 px-6 m-2 transition-all duration-300 companyBox cBox-${item.color}`}
                style={{
                  borderTopLeftRadius: "10px",
                  borderBottomRightRadius: "69px",
                }}
              >
                <img className="h-10" src={item.logo} alt="" />
                <p className="opacity-30 group-hover:opacity-80 h-24 my-5 mb-10 overflow-hidden text-sm !text-white transition-all duration-300">
                  {item.para}
                </p>
                <Link
                  to={item.link}
                  className={`flex items-center justify-center border border-solid border-custom-slate-900 bold text-custom-slate-900 sm:h-12 h-10 w-fit sm:px-7 px-4 rounded-full transition-all duration-300  sm:text-base text-sm  whitespace-nowrap`}
                >
                  <span className="transition-all duration-300">
                    Learn more
                  </span>
                  <HiArrowNarrowRight className="w-6 h-6 " />
                </Link>
              </div>
            );
          })}
        </div>
      </section>
      <VideoPopup
        open={showVideo}
        closeVideo={() => setShowVideo(false)}
        src="https://www.youtube.com/embed/xYrPGIJ2qoo"
      />
    </>
  );
};

export default About;

import React from "react";
import bg from "../assets/images/bgs/2.png";
import Img1 from "../assets/images/raypages/17.png";
import Img2 from "../assets/images/raypages/10.png";
import Img3 from "../assets/images/raypages/11.png";
import Img4 from "../assets/images/raypages/12.png";
import { BiCheck, BiCalendar } from "react-icons/bi";
import PlayIcon from "../assets/images/svg/play.svg";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import VideoPopup from "../components/VideoPopup";
import { useState } from "react";

const SingleCourse = () => {
  const [showVideo, setShowVideo] = useState(false);
  const checks = [
    "From banking and insurance to wealth management and on securities distribution,",
    "From banking and insurance to wealth management and on securities distribution, we dedicated financial services",
    "From banking and insurance to wealth management.",
    "From banking and insurance to wealth management and on securities distribution, we dedicated financial services them the teams serve all major sectors. of the industry.",
  ];
  const includes = [
    "40 online meetings",
    "90 hours lecture",
    "Home works for every lecture",
    "Full lifetime access to video resources",
    "Certificate on completion",
  ];
  const otherCourses = [
    {
      img: Img2,
      name: "Name of the course",
      para: "From banking and insurance to wealth serve all major sectors. of the industry.",
    },
    {
      img: Img3,
      name: "Name of the course",
      para: "From banking and insurance to wealth serve all major sectors. of the industry.",
    },
    {
      img: Img4,
      name: "Name of the course",
      para: "From banking and insurance to wealth serve all major sectors. of the industry.",
    },
  ];

  return (
    <div className="bg-white text-custom-dark singleCourse pb-20">
      <section
        className="sm:h-80 h-52 bg-cover bg-no-repeat bg-center mb-10"
        style={{ backgroundImage: `url(${bg})` }}
      ></section>
      <section className="wrapper flex justify-start items-start lg:flex-row flex-col">
        <div className="lg:w-1/2 lg:mr-10 mb-20">
          <div className=" 2xl:text-7xl xl:text-6xl sm:text-5xl text-4xl bold mb-10">
            Motion designer course
          </div>
          <div className="sm:text-3xl text-2xl bold mb-7">
            What you'll learn
          </div>
          {checks.map((item, index) => {
            return (
              <p key={index} className="mb-5 flex items-start justify-start">
                <BiCheck className="shrink-0 mr-2 w-5 h-5 " />
                <span> {item}</span>
              </p>
            );
          })}

          <div className="mt-16 ">
            <div className="sm:text-3xl text-2xl bold mb-7">
              Register on a course
            </div>
            <form className="max-w-sm ">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Surname" />
              <input type="text" placeholder="Phone number" />
              <input type="text" placeholder="Email address" />
              <button
                className={`flex items-center justify-center border border-solid border-custom-dark bold text-custom-dark sm:h-10 h-10 w-fit sm:px-6 px-4 rounded-full transition-all duration-300  sm:text-base text-sm  whitespace-nowrap mx-auto mt-5`}
              >
                <span>Register</span>
                <HiArrowNarrowRight className="w-6 h-6 m-2" />
              </button>
            </form>
          </div>
        </div>
        <div className="shrink-0 lg:w-1/3 lg:-translate-y-32">
          <div className="bg-white shadow-lg ">
            <div
              onClick={() => setShowVideo(true)}
              className="relative w-full h-80 grayscale cursor-pointer group"
            >
              <img src={Img1} alt="" className="w-full h-full object-cover" />
              <img
                className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 group-hover:animate-pulse"
                src={PlayIcon}
                alt=""
              />
            </div>
            <div className="p-6 pb-10 ">
              <div className="flex items-center justify-start mb-6">
                <div className="text-3xl bold">₾ 750</div>
                <div className="text-2xl bold opacity-70 mx-4">₾ 1200</div>
                <div className="text-2xl bold  text-custom-red">60% Off</div>
              </div>
              <div className="bold mb-3">This course includes:</div>
              {includes.map((item, index) => {
                return (
                  <p className="mb-2" key={index}>
                    {item}
                  </p>
                );
              })}
              <div className="bold mb-3 mt-6">Course starting at:</div>
              <p>
                <BiCalendar className="inline-block mr-1 w-5 h-5 mb-1" /> 15
                Octomber
              </p>
            </div>
          </div>
          <div className="my-10">
            <div className="bold mb-3 mt-6">Other courses</div>
            {otherCourses.map((item, index) => {
              return (
                <Link
                  key={index}
                  to="/"
                  className="p-4 hover:bg-custom-slate-200 flex items-center justify-start transition"
                >
                  <div className="w-20 h-20 rounded-lg overflow-hidden mr-4 shrink-0">
                    <img
                      className="object-cover w-full h-full"
                      src={item.img}
                      alt=""
                    />
                  </div>
                  <div>
                    <div className="bold mb-1">{item.name}</div>
                    <p>{item.para}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <VideoPopup
        open={showVideo}
        closeVideo={() => setShowVideo(false)}
        src="https://www.youtube.com/embed/xYrPGIJ2qoo"
      />
    </div>
  );
};

export default SingleCourse;

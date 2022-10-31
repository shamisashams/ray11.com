import React from "react";
import bg from "../assets/images/bgs/3.png";
import Img1 from "../assets/images/rental/10.png";
import Img2 from "../assets/images/rental/7.png";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState } from "react";

const SingleRental = () => {
  const imgs = [Img1, Img2];
  const [imgIndex, setImgIndex] = useState(0);

  return (
    <div
      className="bg-cover bg-center bg-no-repeat text-custom-dark"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="wrapper flex items-start justify-between py-40 flex-col lg:flex-row">
        <div className=" lg:w-1/2 mb-20">
          <div className="">
            <img className="w-full " src={imgs[imgIndex]} alt="" />
          </div>
          <div className="mt-10 flex items-center justify-start">
            {imgs.map((item, index) => {
              return (
                <div
                  onClick={() => setImgIndex(index)}
                  key={index}
                  className={`cursor-pointer sm:w-32 w-20 hover:opacity-100 transition-all duration-300 mx-2 ${
                    imgIndex === index ? "opacity-100 " : "opacity-50"
                  }`}
                >
                  <img src={item} alt="" />
                </div>
              );
            })}
          </div>
        </div>
        <div className=" lg:w-1/2  lg:ml-10">
          <div className=" xl:text-6xl sm:text-5xl text-4xl bold ">
            ALEXA LF
          </div>
          <p className="my-10">
            The driving force of all speeches, we believe that creation should
            be the point around which any communication strategy revolves.
          </p>
          <div className="bold text-2xl mb-6">Specification</div>
          <div className="sm:columns-2">
            <div className="mb-6">
              processor <br />
              • Processor model: Intel Core i3-12100 <br />
              • Number of cores: 4 <br />
              • Number of streams: 8 <br />
              • Frequency: 3.30 GHz <br />
              • Maximum frequency: 4.40 GHz <br />
              • Cache memory: 12 MB <br />
            </div>
            <div className="mb-6">
              RAM <br />
              Memory capacity: 8GB (1x 8GB DIMM) <br />
              • Memory type: DDR4 <br />
              • RAM frequency: 3200MHz <br />
            </div>
            <div className="mb-6">
              Hard drive <br />
              • Type: SSD <br />
              • Capacity: 256 GB M.2 <br />
            </div>
            <div className="mb-6">
              Video board <br />
              • Type of video board: integrated <br />
              • Manufacturer: Intel <br />
              • Model: Intel UHD Graphics 730 <br />
            </div>
            <div className="mb-6">
              disk drive <br />
              • ODD: DVD-RW (Reads and Writes to DVD/CD) <br />
            </div>
          </div>
          <div className="flex justify-end items-center mt-10">
            <p>For order:</p>
            <Link
              to="/contact"
              className={`flex items-center justify-center border border-solid border-custom-dark bold text-custom-dark sm:h-10 h-10 w-fit sm:px-6 px-4 rounded-full   sm:text-base text-sm  whitespace-nowrap ml-5`}
            >
              <span>Contact us</span>
              <HiArrowNarrowRight className="w-6 h-6 m-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRental;

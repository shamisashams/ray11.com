import React from "react";
// import bg from "../assets/images/bgs/3.png";
// import Img1 from "../assets/images/other/1.png";
import { rentalGrid } from "../components/Data";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const Rental = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat text-custom-dark"
      style={{ backgroundImage: `url('/assets/images/bgs/3.png')` }}
    >
      <div className="wrapper">
        <div className="flex items-center justify-between py-32 md:flex-row flex-col">
          <img className=" md:w-1/2" src="/assets/images/other/1.png" alt="" />
          <div className=" md:w-1/2">
            <div className="2xl:text-7xl xl:text-6xl sm:text-5xl text-4xl bold mb-10">
              Rent modern professional technics for best price
            </div>
            <p className="opacity-70">
              {" "}
              The driving force of all speeches, we believe that creation should
              be the point around which any communication strategy revolves.
            </p>
          </div>
        </div>
        <div className="pb-20">
          <div className="bold text-3xl">Products</div>
          <div className="grid xl:grid-cols-3 md:grid-cols-2 mt-10 border-t-2 border-l-2  border-custom-dark">
            {rentalGrid.map((item, index) => {
              return (
                <Link
                  key={index}
                  to={item.link}
                  className="flex items-start justify-center 2xl:p-10 p-6 border-r-2 border-b-2 border-custom-dark group"
                >
                  <div className="w-1/2 h-40 mr-5 ">
                    <img
                      className="w-full h-full object-contain"
                      src={item.img}
                      alt=""
                    />
                  </div>
                  <div>
                    <div className="bold">{item.name}</div>
                    <p className="text-sm py-2 mb-5">{item.model}</p>
                    <div
                      className={` opacity-0 group-hover:opacity-100 border border-solid border-custom-dark bold sm:px-5 px-4 rounded-full transition-all duration-300 block w-fit`}
                    >
                      <HiArrowNarrowRight className="w-6 h-6 m-2" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="text-center border-b-2 border-l-2 border-r-2 border-custom-dark py-5">
            <button className="bold mx-2">1</button>
            <button className="bold mx-2 opacity-50">2</button>
            <button className="bold mx-2 opacity-50">3</button>
            <button className="bold mx-2 opacity-50">4</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rental;

import React from "react";
// import Pattern from "../assets/images/patterns/1.png";
// import img1 from "../assets/images/other/2.png";
import { newsGrid } from "../components/Data";
// import { Link } from "react-router-dom";
import { Link } from '@inertiajs/inertia-react'
import Layout from "../Layouts/Layout";

const News = ({seo}) => {
  return (
    <Layout seo={seo}>
    <div className="relative py-32">
      <img className="-z-10 absolute top-0 right-0" src="/assets/images/patterns/1.png" alt="" />
      <div className="wrapper">
        <div className="flex justify-start items-center mb-10 flex-col md:flex-row ">
          <img src="/assets/images/other/2.png" alt="" />
          <p className="opacity-50 md:max-w-lg md:ml-5">
            From banking and insurance to wealth management and on securities
            distribution, we dedicated financial services them the teams serve
            all major sectors. of the industry. From banking and insurance to
            wealth management and on securities distribution, we{" "}
          </p>
        </div>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 2xl:gap-x-20 gap-10 2xl:gap-y-14">
          {newsGrid.map((item, index) => {
            return (
              <Link key={index} href={item.link} className="group">
                <div className="relative h-96 w-full overflow-hidden mb-6 ">
                  <img
                    className="w-full h-full object-cover"
                    src={item.img}
                    alt=""
                  />
                  <div className="absolute w-full h-full left-0 top-0 bg-white opacity-0 group-hover:opacity-40 transition-all duration-500"></div>
                </div>
                <p>{item.name}</p>
                <p className="opacity-50 my-3">{item.para}</p>
                <p className="text-sm">
                  Date: <span className="opacity-50">{item.date}</span>
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default News;

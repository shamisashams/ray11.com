import React from "react";
// import Highlight from "../assets/images/shapes/8.png";
// import Highlight2 from "../assets/images/shapes/2.png";
import { SocialMedia } from "../components/SmallComps";
// import Img1 from "../assets/images/raypages/1.png";
// import Img2 from "../assets/images/raypages/3.png";
import RaySection from "../components/RaySection";
// import Icon1 from "../assets/images/icons/4.png";
// import Icon2 from "../assets/images/icons/5.png";
import { Link } from '@inertiajs/inertia-react'
// import Gridimg1 from "../assets/images/raypages/4.png";
// import Gridimg2 from "../assets/images/raypages/5.png";
// import Gridimg3 from "../assets/images/raypages/6.png";
// import Gridimg4 from "../assets/images/raypages/7.png";
// import Gridimg5 from "../assets/images/raypages/8.png";
// import Gridimg6 from "../assets/images/raypages/9.png";
import { SiAppstore } from "react-icons/si";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import Layout from "../Layouts/Layout";

const RayCrypto = ({seo}) => {
  const nftGrid = [
    {
      img: "/assets/images/raypages/4.png",
      name: "Name of Artwork",
    },
    {
      img: "/assets/images/raypages/5.png",
      name: "Name of Artwork",
    },
    {
      img: "/assets/images/raypages/6.png",
      name: "Name of Artwork",
    },
    {
      img: "/assets/images/raypages/7.png",
      name: "Name of Artwork",
    },
    {
      img: "/assets/images/raypages/8.png",
      name: "Name of Artwork",
    },
    {
      img: "/assets/images/raypages/9.png",
      name: "Name of Artwork",
    },
  ];

  return (
    <Layout seo={seo}>
      <section className="relative pt-40 pb-12">
        <div className="wrapper flex items-center justify-between lg:flex-row flex-col">
          <div className="lg:w-2/5 lg:mr-10 lg:mb-0 mb-10">
            <div className="relative 2xl:text-7xl xl:text-6xl sm:text-5xl text-4xl bold w-fit">
              <img
                className="absolute -left-14 top-1/2 -translate-y-1/2 "
                src="/assets/images/shapes/8.png"
                alt=""
              />
              <span className="relative">Just another way to make it</span>
            </div>
            <div className="highlight-title nun-bold relative sm:px-20 px-14 whitespace-nowrap w-fit text-custom-dark xl:text-5xl text-4xl sm:my-14 my-10">
              <img
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                src="/assets/images/shapes/8.png"
                alt=""
              />
              <span className="relative">Ray crypto</span>
            </div>
            <p className="opacity-30 ">
              The driving force of all speeches, we believe that creation should
              be the point around which any communication strategy revolves.
            </p>
            <div className="flex justify-start items-center mt-10 mb-8">
              <div className="text-lg whitespace-nowrap">Social media</div>
              <div className="w-28 h-0.5 bg-white mx-4"></div>
              <SocialMedia />
            </div>
          </div>
          <div className="">
            <img src={"/assets/images/raypages/1.png"} alt="" />
          </div>
        </div>
      </section>
      <section className="wrapper pb-20">
        <div className="bold text-2xl mb-14">What we do?</div>
        <RaySection color="#7261BD" title="NFT art">
          <div className="flex justify-between  flex-col lg:flex-row">
            <div className="lg:w-1/2 lg:max-w-lg">
              <div className="opacity-50 mb-4">
                From banking and insurance to wealth management and on
                securities distribution, we dedicated financial services them
                the teams serve all major sectors. of the industry. From banking
                and insurance to wealth management and on securities
                distribution, we dedicated financial services them the teams
                serve all major sectors. of the industry.
              </div>
              <div className="opacity-50 mb-8">
                management and on securities distribution, we dedicated
                financial services them the teams serve all major sectors. of
                the industry. From banking and insurance to wealth management
                and on securities distribution, we dedicated financial services
                them the teams serve all major sectors. of the industry. From
                banking and insurance to wealth management and on securities
                distribution, we dedicated financial services them the teams
                serve all major sectors. of the industry.
              </div>
              <div className="flex items-center justify-between flex-wrap">
                <div className="">
                  <div className="bold inline-block">Meet community:</div>
                  <a href="#" className="inline-block mx-4 align-middle">
                    <img src={"/assets/images/icons/4.png"} alt="" />
                  </a>
                  <a href="#" className="inline-block align-middle">
                    <img src={"/assets/images/icons/5.png"} alt="" />
                  </a>
                </div>
                <Link
                  href="/"
                  className="bold py-3 px-8 border border-custom-purple border solid rounded-full my-5"
                >
                  Open on market
                </Link>
              </div>
            </div>
            <div className="lg:grid grid-cols-3 gap-10 ml-5 flex flex-wrap justify-center items-start lg:mt-0 mt-10">
              {nftGrid.map((item, index) => {
                return (
                  <div key={index} className="w-48">
                    <div className="w-full h-40 mb-4">
                      <img
                        className="w-full h-full object-cover"
                        src={item.img}
                        alt=""
                      />
                    </div>
                    <p>{item.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </RaySection>
        <RaySection color="#7261BD" title="P2E Games">
          <div className=" mb-8">
            From banking and insurance to wealth management and on securities
            distribution, we dedicated financial services them the teams serve
            all major sectors.
          </div>
          <div className="max-w-xl">
            <div className="h-80 w-full mb-5">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/xYrPGIJ2qoo"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex sm:items-center items-start justify-between flex-col sm:flex-row">
              <div className="flex items-center sm:mr-5 sm:mb-0 mb-5">
                <div className=" rounded-lg overflow-hidden mr-4 w-24 h-24 shrink-0">
                  <img src={"/assets/images/raypages/4.png"} alt="" />
                </div>
                <div>
                  <div className="text-lg mb-2">Game Name</div>
                  <p className="opacity-50 text-sm">
                    From banking and insurance to wealth management and on
                    securities distribution, we dedicated financial services
                  </p>
                </div>
              </div>
              <div>
                <div className="opacity-50">Get on:</div>
                <Link
                  href="/"
                  className="bold text-sm leading-loose mt-3 block py-1 px-4 border border-custom-purple border solid rounded-full  whitespace-nowrap"
                >
                  <SiAppstore className="inline-block  mr-2" />
                  Appstore
                </Link>
                <Link
                  href="/"
                  className="bold text-sm leading-loose block py-1 mt-3 px-4 border border-custom-purple border solid rounded-full  whitespace-nowrap"
                >
                  <IoLogoGooglePlaystore className="inline-block  mr-2" />
                  Playstore
                </Link>
              </div>
            </div>
          </div>
        </RaySection>
      </section>
      <section className="wrapper flex items-center justify-between flex-col md:flex-row pb-10">
        <div className="md:mr-10 mr-0 mb-10">
          <div className="xl:text-7xl sm:text-5xl text-3xl bold mb-7 ">
            Our mission
          </div>
          <div className="max-w-sm opacity-30">
            <p className=" mb-4">
              From banking and insurance to wealth management and on securities
              distribution, we dedicated financial services them the teams serve
              all major sectors. of the industry.
            </p>
            <p className=" mb-4">
              From banking and insurance to wealth management and on securities
              distribution, we dedicated financial services them the teams serve
              all major sectors. of the industry.
            </p>
            <p className=" mb-4">
              management and on securities distribution, we dedicated financial
              services them the teams serve all major sectors. of the industry.
            </p>
            <p className=" mb-4">
              From banking and insurance to wealth management and on securities
              distribution, we dedicated financial services them the teams serve
              all major sectors. of the industry. From banking and insurance to
              wealth management and on securities distribution, we dedicated
              financial services them the teams serve all major sectors. of the
              industry.
            </p>
          </div>
        </div>
        <div className="w-fit h-fit relative mx-auto p-5">
          <div className="w-14 h-14 absolute -top-0 -left-0 border-l-4 border-t-4 border-solid border-custom-purple"></div>
          <div className="w-14 h-14 absolute -bottom-0 -right-0 border-r-4 border-b-4 border-solid border-custom-purple"></div>
          <img src={"/assets/images/raypages/3.png"} alt="" />
        </div>
      </section>
    </Layout>
  );
};

export default RayCrypto;

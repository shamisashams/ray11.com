import React, { useState } from "react";
// import Highlight from "../assets/images/shapes/10.png";
// import Highlight2 from "../assets/images/shapes/5.png";
import { Question, SocialMedia } from "../components/SmallComps";
// import bg from "../assets/images/bgs/1.png";
// import Img1 from "../assets/images/raypages/20.png";
import Slider5 from "../components/Slider5";

const RayAcademy = () => {
  const questions = [
    {
      q: "What will I learn on this course?",
      a: "In today's marketing strategies, nothing tops the power that videos have - 90% of customers say that videos help them decide whether to buy or not. They visually help showcase products and services that reach and attract new customers. Videos convey more information in less time and are much easier for the audience to become immersed in. They also help your business stand out from your competition by putting a face and name to your brand, instilling confidence and trustworthiness. And the fact that Google loves videos is just another reason to start making those business videos!",
    },
    {
      q: "How log the course takes?",
      a: "In today's marketing strategies, nothing tops the power that videos have - 90% of customers say that videos help them decide whether to buy or not. They visually help showcase products and services that reach and aideos!",
    },
    {
      q: "What knowledge should I have to take this course?",
      a: "In today's marketing strategies, notttract new customers. Videos convey more information in less time and are much easier for the audience to become immersed in. They also help your busins vhing tops the power that videos have - 90% of customers say that videos help them decide whether to buy or not. They visually help showcase products and services that reach andeos!",
    },
    {
      q: "What other courses can I get here?",
      a: "In today's marketing strategies, nothing tops the power that videos have - 90% of customers say that videos help them decide whether to buy or not. They visually help showcase products and services that reach and attract new customers. Videos convey more information in less time and are much easier for the audience to become immersed in. They also help your business stand out from your competid attract new customers. Videos convey more information in less time and are much easier for the audience to become immersed in. They also help your business stand out from your competition by putting a face and name to your brand, instilling confidence and trustworthiness. And the fact that Google loves videos is just another reason to start making those business vition by putting a face and name to your brand, instilling confidence and trustworthiness. And the fact that Google loves videos is just another reason to start making those business videos!",
    },
  ];

  return (
    <>
      <section
        className="relative pt-40 pb-12 h-screen bg-cover bg-center"
        style={{ backgroundImage: `url('/assets/images/bgs/1.png')` }}
      >
        <div className="wrapper flex items-center justify-between lg:flex-row flex-col">
          <div className="lg:w-2/5 lg:mr-10 lg:mb-0 mb-10">
            <div className="relative 2xl:text-7xl xl:text-6xl sm:text-5xl text-4xl bold w-fit">
              <img
                className="absolute -left-14 top-1/2 -translate-y-1/2 "
                src="/assets/images/shapes/10.png"
                alt=""
              />
              <span className="relative">We share our knowledge</span>
            </div>
            <div className="highlight-title nun-bold relative sm:px-20 px-14 whitespace-nowrap w-fit text-custom-dark xl:text-5xl sm:text-4xl text-3xl sm:my-14 my-10">
              <img
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                src="/assets/images/shapes/5.png"
                alt=""
              />
              <span className="relative">Ray academy</span>
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
        </div>
      </section>
      <section>
        <Slider5 />
      </section>
      <section className="wrapper flex items-start justify-between lg:py-24 py-20 flex-col lg:flex-row">
        <img className="mt-20 mx-auto " src="/assets/images/raypages/20.png" alt="" />
        <div className="lg:w-2/3 lg:mr-10 mt-10 lg:mt-0">
          <div className="bold text-2xl text-center mb-10">Academy FAQ's</div>
          {questions.map((item, index) => {
            return <Question key={index} q={item.q} a={item.a} />;
          })}
        </div>
      </section>
    </>
  );
};

export default RayAcademy;

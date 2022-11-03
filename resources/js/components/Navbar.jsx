import React, { useState } from "react";
// import {  useLocation } from "react-router-dom";
import { Link, usePage } from "@inertiajs/inertia-react";
// import Logo1 from "../assets/images/logo/1.png";
// import Logo2 from "../assets/images/logo/2.png";
// import Logo3 from "../assets/images/logo/3.png";
// import Logo4 from "../assets/images/logo/4.png";
// import Logo6 from "../assets/images/logo/6.png";
// import Logo7 from "../assets/images/logo/7.png";
// import Logo8 from "../assets/images/logo/8.png";
import { companies } from "./Data";
import { HiArrowNarrowRight } from "react-icons/hi";

    const Navbar = () => {
    const renderHTML = (rawHTML) =>
    React.createElement("div", {
        dangerouslySetInnerHTML: { __html: rawHTML },
    });
    const sharedData = usePage().props.localizations;

  const [menu, setMenu] = useState(false);
//   const { pathname } = useLocation();
const { pathname } = usePage().props;
  let dark = false;
  let logoImg = "/assets/images/logo/1.png";

  if (pathname === "/ray-production") {
    logoImg = "/assets/images/logo/2.png";
  }
  if (pathname === "/ray-animation") {
    logoImg = "/assets/images/logo/3.png";
  }
  if (pathname === "/ray-academy") {
    logoImg = "/assets/images/logo/4.png";
  }
  if (pathname === "/ray-crypto") {
    logoImg = "/assets/images/logo/5.png";
  }
  if (pathname === "/single-course") {
    logoImg = "/assets/images/logo/7.png";
  }
  if (
    pathname === "/rental" ||
    pathname === "/single-rental" ||
    pathname === "/contact"
  ) {
    logoImg = Logo8;
  }
  if (
    pathname === "/single-course" ||
    pathname === "/rental" ||
    pathname === "/single-rental"
  ) {
    dark = true;
  }

  const navs = [

    {
      text: __("client.navbar_home", sharedData),
      link: route("client.home.index"),
    },
    {
      text: __("client.navbar_about", sharedData),
      link: route("client.aboutus"),
    },
    {
      text: __("client.navbar_rental", sharedData),
      link: route("client.rental.index"),
    },
    {
      text: __("client.navbar_news", sharedData),
      link: route("client.news.index"),
    },
    {
      text: __("client.navbar_contact", sharedData),
      link: route("client.contact.index"),
    },
  ];

  return (
    <>
      <div
        className={`fixed w-screen h-screen left-0 top-0 z-50 pt-40 pb-8 transisiton-all duration-500 ${
          menu ? "opacity-100 visible " : "opacity-0 invisible"
        } ${dark ? "text-custom-dark " : "text-white"} `}
        style={{ background: dark ? "#becdf6" : "#1f1f1f" }}
      >
        <div className="wrapper h-full flex flex-col justify-center items-start">
          <div className="xl:grid lg:flex hidden xl:grid-cols-5 xl:gap-4 gap-2 w-full mb-20 flex-wrap items-start justify-center ">
            {companies.map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-white/[0.2] rounded-lg py-8 px-4  text-center relative flex flex-col justify-between items-center xl:w-auto w-80 xl:h-full"
                >
                  <div>
                    <img
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 2xl:max-w-none max-w-lg "
                      src={item.bg}
                      alt=""
                    />
                    <Link href={route("client.home.index")}>
                      <img className="h-10 mx-auto" src={item.logo} alt="" />
                    </Link>
                    <div className="bold xl:text-2xl text-xl xl:mt-6 xl:mb-4 my-2">
                      {item.title}
                    </div>
                    <p className="text-justify text-custom-dark text-sm xl:mb-8 mb-4 2xl:h-auto xl:h-44 h-20 overflow-hidden">
                      {item.para}
                    </p>
                  </div>
                  <Link
                    href={item.link}
                    className={`flex items-center justify-center border border-solid border-white bold text-white sm:h-10 h-10 w-fit sm:px-6 px-4 rounded-full transition-all duration-300  sm:text-base text-sm  whitespace-nowrap mx-auto`}
                  >
                    <span>Learn more</span>
                    <HiArrowNarrowRight className="w-6 h-6 m-2" />
                  </Link>
                </div>
              );
            })}
          </div>
          <ul className="lg:hidden text-center mx-auto md:mb-10 mb-6 ">
            {navs.map((nav, index) => {
              return (
                <li className="block mb-5 md:text-xl" key={index}>
                  <Link className="bold relative navLink" href={nav.link}>
                    {nav.text}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="lg:hidden text-center w-fit mx-auto">
            {companies.map((logo, index) => {
              return (
                <Link key={index} href={logo.link} className="inline-block m-3">
                  <img src={logo.logo} alt="" className="md:h-12 h-8" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <header
        className={`${dark ? "text-custom-dark " : "text-white"} ${
          menu ? "fixed" : "absolute"
        } top-0 left-0 w-full py-4 z-50`}
      >
        <div className="relative wrapper flex items-center justify-between">
          <Link href="/">
            <img className="sm:w-48 w-32" src={logoImg} alt="" />
          </Link>
          <div className="flex items-center justify-end">
            <ul className="lg:mr-20 mr-10 lg:inline-block hidden">
              {navs.map((nav, index) => {
                return (
                  <li className="lg:mx-6 mx-3 inline-block" key={index}>
                    <Link
                      className={`bold relative navLink ${
                        nav.link === pathname ? "active" : ""
                      } `}
                      href={nav.link}
                    >
                      {nav.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <button
              onClick={() => setMenu(!menu)}
              className={menu ? "menuBtn clicked" : "menuBtn"}
            >
              <div className="span"></div>
              <div className="span"></div>
              <div className="span"></div>
            </button>
          </div>
          <div className="absolute right-0 -bottom-10">
            <div className="bold">
              <span>En</span>
              <span className="px-1">/</span>
              <a href="/" className="opacity-50">
                Geo
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;

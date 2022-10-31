import React from "react";
import { Link, useLocation } from "react-router-dom";
import { SocialMedia } from "./SmallComps";
// import Logo from "../assets/images/logo/1.png";
import Form from "./Form";
// import Pattern1 from "../assets/images/patterns/3.png";
// import Pattern2 from "../assets/images/patterns/4.png";

const Footer = () => {
  const { pathname } = useLocation();
  let hide = false;
  if (pathname === "/contact") {
    hide = true;
  }

  return (
    <footer
      id="footer"
      className={`pt-20 relative ${hide ? "hidden " : "block"}`}
    >
      <img
        className="w-1/3 -z-10 absolute left-0 bottom-1/2 translate-y-1/2 hidden lg:block"
        src="/assets/images/patterns/3.png"
        alt=""
      />
      <img
        className="w-1/3 -z-10 absolute right-0 top-0 hidden lg:block"
        src="/assets/images/patterns/4.png"
        alt=""
      />
      <div className="wrapper mb-20">
        <Form />
      </div>
      <div className="text-center mt-20">
        <SocialMedia />
        <div className="my-10 bold">
          <a href="#" className="mx-3">
            +995 032 2 000 000
          </a>
          <a href="#" className="mx-3">
            info@Ray11.com
          </a>
        </div>
        <div className="py-10 border-t border-solid border-black sm:text-base text-sm">
          <ul className="mb-10">
            <li className="inline-block bold sm:mx-4 mx-2">
              <Link to="/">Home</Link>
            </li>
            <li className="inline-block bold sm:mx-4 mx-2">
              <Link to="/">About Ray 11</Link>
            </li>
            <li className="inline-block bold sm:mx-4 mx-2">
              <Link to="/">News</Link>
            </li>
            <li className="inline-block bold sm:mx-4 mx-2">
              <Link to="/">Contact</Link>
            </li>
          </ul>
          <Link className=" w-fit" to="/">
            <img className="mx-auto w-32" src="/assets/images/logo/1.png" alt="" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

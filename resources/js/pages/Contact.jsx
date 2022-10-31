import React from "react";
import Form from "../components/Form";
import bg1 from "../assets/images/bgs/5.png";
import bg2 from "../assets/images/bgs/6.png";
import { SocialMedia } from "../components/SmallComps";

const Contact = () => {
  return (
    <div className="min-h-screen relative contact">
      <img
        className="absolute -z-10 lg:w-1/2 w-full lg:h-full h-80 top-0 left-0 object-cover grayscale opacity-50 lg:opacity-100"
        src={bg1}
        alt=""
      />
      <img
        className="absolute -z-10 w-1/2 h-full top-0 right-0  object-cover"
        src={bg2}
        alt=""
      />
      <div className="wrapper flex justify-between items-start pt-40 pb-20 lg:flex-row flex-col">
        <div className="bg-black/[0.8] p-10  rounded-2xl lg:mx-0 mx-auto mb-20">
          <Form />
        </div>
        <div className="xl:w-1/3 lg:w-2/5 xl:mr-20 w-full">
          <div className=" sm:text-5xl text-3xl bold opacity-50 mb-6">
            Contact us
          </div>
          <div className="opacity-50 mb-3 mt-8">Phone number:</div>
          <div className="bold">+995 032 2 000 000</div>
          <div className="opacity-50 mb-3 mt-8">Email:</div>
          <div className="bold">info@Ray11.com</div>
          <div className="opacity-50 mb-3 mt-8">Address:</div>
          <div className="bold">Street name #123. Tbilisi, Georgia</div>
          <div className="flex my-10 justify-start items-center">
            <div className="opacity-50">Social media</div>
            <div className="sm:w-40 w-20 h-1 bg-white mx-5"></div>
            <SocialMedia />
          </div>
          <div className="opacity-50 mb-5 mt-8">Find us on a map</div>
          <div className="rounded-2xl h-52 w-full overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d95311.0232522216!2d44.81023999999999!3d41.7103872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sge!4v1667214551689!5m2!1sen!2sge"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

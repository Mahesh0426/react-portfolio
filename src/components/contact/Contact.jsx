import React from "react";
import "animate.css";
import "../body/body.css";
import "./contact.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { MdLocationOn } from "react-icons/md";

function Contact() {
  return (
    <div id="contact" className="max-w-7xl mx-auto py-20 px-8 h-full relative">
      <div data-aos="fade-right" className="mb-10">
        <h1 className="font-semibold text-3xl text-white opacity-90 relative inline-block">
          <div data-aos="fade-right" className="h-0.5 bg-blue-500"></div>
        </h1>
      </div>
      <div className="flex flex-col gap-10">
        <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tight pb-2 sm:pb-6 text-amber-200/[.98]">
          About me
        </h2>
        <div className="flex flex-row gap-3 max-sm:gap-y-10 justify-evenly max-sm:flex-col">
          <div className="text-white opacity-90 font-light text-sm">
            <div
              data-aos="zoom-in"
              className="flex flex-row gap-2 items-center shadow-md shadow-[#06092e41] duration-500 p-2 rounded-md"
            >
              <a href="tel:+61415571816" className="flex items-center gap-2">
                <p className="text-sm duration-300 rounded-full bg-gray-700 bg-opacity-50 p-5">
                  <BsFillTelephoneFill size={20} />
                </p>
                <span>+61 415 571 816</span>
              </a>
            </div>
            <div
              data-aos="zoom-in"
              className="flex flex-row gap-2 items-center shadow-md shadow-[#06092e41] duration-500 p-2 rounded-md"
            >
              <a
                href="mailto:thakur.neupane.neupane@gmail.com"
                className="flex items-center gap-2"
              >
                <p className="text-sm duration-300 rounded-full bg-gray-700 bg-opacity-50 p-5">
                  <CgMail size={20} />
                </p>
                <span>thakur.neupane.neupane@gmail.com</span>
              </a>
            </div>
            <div
              data-aos="zoom-in"
              className="flex flex-row gap-2 items-center shadow-md shadow-[#06092e41] duration-500 p-2 rounded-md"
            >
              <a
                href="https://www.google.com/maps/place/Sydney,+NSW,+Australia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <p className="text-sm duration-300 rounded-full bg-gray-700 bg-opacity-50 p-5">
                  <MdLocationOn size={20} />
                </p>
                <span>Sydney, NSW Australia</span>
              </a>
            </div>
          </div>
          <span
            className="block relative w-0.5 max-sm:w-full max-sm:h-0.5
          after:h-full after:w-full after:absolute after:bg-white after:opacity-90 after:top-0"
          ></span>
          {/* <MessageForm /> */}
        </div>
      </div>
    </div>
  );
}

export default Contact;

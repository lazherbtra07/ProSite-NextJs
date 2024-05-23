import React from "react";
import Image from "next/image";
import gradlast from "../../../public/image/Gradient 2.png";
import { FaArrowRight } from "react-icons/fa6";

export const Careers = () => {
  return (
    <section id="Careers" className="container pb-16 ">
      <div id="Careers" className="w-full  relative  ">
        <Image
          src={gradlast}
          alt="gradi"
          className=" w-full h-[422px]  rounded-2xl   md:h-[475px]"
        />
        <div className="w-full absolute top-0 px-8 py-14 text-center  /// md:px-[28px] md:py-[88px] lg:px-[228px] ">
          <h3 className=" text-[#fff] font-medium text-[32px] leading-10 mb-6 /// md:text-[56px] md:leading-[56px] sm:text-[48px] sm:leading-[56px] md:mb-12 ">
            Monitor your website like a pro
          </h3>
          <p className=" text-[#fff] font-normal text-[16px] leading-6 font-sans mb-10 // md:mb-[56px]">
            Join over 800+ happy site owners boosting productivity and
            efficiency!
          </p>
          <div className=" md:flex md:justify-center md:items-center ">
            <button className=" bg-white rounded px-8 py-4 text-[18px] text-[#EB2891] mb-[33px] md:mb-0 md:mr-4 hover:bg-gray-100">
              Try For Free
            </button>
            <div className=" flex justify-center ">
              <p className="  text-white cursor-pointer">Contact Sales</p>
              <div className="flex justify-center items-center w-[26px] h-[26px] ml-3 bg-white rounded-full text-center">
                <FaArrowRight size={14} color="#EB2891" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

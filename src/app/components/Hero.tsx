import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Graident from "../../../public/assets/Gradient.svg";
import heroimag from "../../../public/image/Image (1).png";
import Image from "next/image";
import google from "../../../public/assets/Google.svg";
import slak from "../../../public/assets/Slack.svg";
import Trustpilot from "../../../public/assets/Trustpilot.svg";
import CNN from "../../../public/assets/CNN.svg";
import Clutch from "../../../public/assets/Clutch.svg";
import { ViweMore } from "./ViweMore";

export const Hero = () => {
  return (
    <div id="Hero" className="">
      <div className=" container  text-center  pt-4   pb-8 mt-16 ">
        <h1 className=" lg:px-32 xl:px-52   text-[32px] md:text-[64px] leading-[40px] md:leading-[72px] font-medium text-[#172029]">
          Start monitoring your website like a pro
        </h1>
        <p className=" lg:px-32 xl:px-52   pt-6 text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-[#36485c]">
          Get a birds eye view with our customizable dashboard. Stay on top of
          things! Revamp your work process with our game-changing feature. Boost
          productivity and efficiency!
        </p>
      </div>
      <div className="flex justify-center items-center ">
        <button className=" btn  bg-[#4328EB] mr-10 hover:bg-[#755fff] ">
          Try For Free
        </button>
        <div className=" text-[#4328EB]">
          <ViweMore name="View Pricing" />
        </div>
      </div>
      <div className=" relative flex  lg:top-64  justify-center md:h-[800px] h-[475px] lg:h-[850px] xl:mb-32 h-700">
        <Image
          src={Graident}
          alt="Graident"
          className=" absolute object-cover min-h-[475px]  md:bottom-0   lg:-top-24 lg:h-[650px]  xl:h-[750px]   "
        />
        <div className=" lg:-top-72 absolute flex w-full md:-mr-42 lg:-ml-9 -ml-9  ">
          <Image
            src={heroimag}
            alt="heroimag"
            className=" h-[300px] md:h-[800px] xl:h-[900px]"
          />
        </div>
        <div className=" md:flex md:gap-x-[40px]  md:items-center text-center absolute lg:gap-x-[100px] top-[290px] md:top-[670px] lg:top-[400px] xl:top-[480px]  md:mt-4">
          <h5 className="text-white text-center  text-[16px] md:text-[18px] font-normal leading-6">
            Trusted by these companies
          </h5>
          <ul className="flex justify-center md:gap-x-[40px] lg:gap-x-[100px] gap-8 mt-3 ">
            <li>
              <Image
                src={google}
                alt="google"
                className="md:h-[62px] md:w-[103px]"
              />
            </li>
            <li>
              <Image
                src={slak}
                alt="slak"
                className="md:h-[62px] md:w-[103px]"
              />
            </li>
          </ul>
          <ul className="flex justify-center md:gap-x-[40px] lg:gap-x-[100px] gap-8 mt-3 md:mr-3 ">
            <li>
              <Image
                src={Trustpilot}
                alt="Trustpilot"
                className="md:h-[62px] md:w-[103px]"
              />
            </li>
            <li>
              <Image src={CNN} alt="CNN" className="md:h-[62px] md:w-[103px]" />
            </li>
            <li>
              <Image
                src={Clutch}
                alt="Clutch"
                className="md:h-[62px] md:w-[103px]"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

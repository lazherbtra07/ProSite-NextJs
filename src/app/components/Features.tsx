import React from "react";
import Image from "next/image";
import ft01 from "../../../public/image/ft01.svg";
import ft02 from "../../../public/image/ft02.svg";
import ft03 from "../../../public/image/ft03.svg";
import { BsCheck2 } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { ViweMore } from "./ViweMore";

export const Features = () => {
  return (
    <div id="Features" className="container  lg:bottom-56 ">
      <div className="md:flex md:flex-row-reverse md:gap-x-10 ">
        <Image src={ft01} alt="ft01" className="hidden md:block  md:w-1/2  " />
        <div className="1 my-[56px] md:w-1/2">
          <h5 className=" text-[#0085FF] font-medium text-[16px] leading-6">
            Sales Monitoring
          </h5>
          <p className=" mt-3 mb-6 text-[#172026] font-medium text-[24px] leading-9">
            Simplify your sales monitoring
          </p>
          <Image src={ft01} alt="ft01" className="md:hidden  " />
          <p className="text-[#36485C] text-[16px] font-medium leading-6 mt-6">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a birds eye view with our customizable
            dashboard.{" "}
          </p>
          <div className=" my-6   ">
            <div className="flex gap-x-4    ">
              <BsCheck2 color="#36485C" size={24} />
              <p className="text-[#36485C] font-medium text-[16px] leading-6">
                Lorem ipsum dolor sit amet
              </p>
            </div>
            <div className="flex gap-x-4 mt-3">
              <BsCheck2 color="#36485C" size={24} />
              <p className="text-[#36485C] font-medium text-[16px] leading-6">
                Consectetur adipiscing elit
              </p>
            </div>
            <div className="flex gap-x-4 mt-3 ">
              <BsCheck2 color="#36485C" size={24} />
              <p className="text-[#36485C] font-medium text-[16px] leading-6 text-start">
                Sed do eiusmod tempor incididunt ut labore{" "}
              </p>
            </div>
          </div>
          <div className=" text-[#4328EB] hover:text-[#715fe6]">
            <ViweMore name="Learn More" />
          </div>
        </div>
      </div>
      <div className="md:flex md:flex-row md:gap-x-10 md:my-[40px]">
        <Image src={ft02} alt="ft01" className="hidden md:block md:w-1/2" />
        <div className="2  md:w-1/2">
          <h5 className="text-[#00A424] font-medium text-[16px] leading-6">
            Customer Support
          </h5>
          <p className=" text-[#172026] font-medium text-[24px] leading-9">
            Get in touch with your customers
          </p>
          <Image src={ft02} alt="ft01" className="md:hidden" />
          <p className="text-[#36485C] text-[16px] font-medium leading-6 mt-6">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a birds eye view with our customizable
            dashboard.{" "}
          </p>
          <div className=" my-6   ">
            <div className="flex gap-x-4    ">
              <BsCheck2 color="#36485C" size={24} />
              <p className="text-[#36485C] font-medium text-[16px] leading-6">
                Lorem ipsum dolor sit amet
              </p>
            </div>
            <div className="flex gap-x-4 mt-3">
              <BsCheck2 color="#36485C" size={24} />
              <p className="text-[#36485C] font-medium text-[16px] leading-6">
                Consectetur adipiscing elit
              </p>
            </div>
            <div className="flex gap-x-4 mt-3 ">
              <BsCheck2 color="#36485C" size={24} />
              <p className="text-[#36485C] font-medium text-[16px] leading-6 text-start">
                Sed do eiusmod tempor incididunt ut labore{" "}
              </p>
            </div>
          </div>
          <div className=" text-[#00A424] hover:text-[#63e67f]">
            <ViweMore name="Learn More" />
          </div>
        </div>
      </div>
      <div className="md:flex md:flex-row-reverse md:gap-x-10 ">
        <Image
          src={ft03}
          alt="ft01"
          className="hidden md:block md:w-1/2 rounded-xl"
        />
        <div className="3 my-[56px] md:w-1/2">
          <h5 className="text-[#EB2891] font-medium text-[16px] leading-6">
            Growth Monitoring
          </h5>
          <p className=" text-[#172026] font-medium text-[24px] leading-9">
            Monitor your site’s new subscribers{" "}
          </p>
          <Image src={ft03} alt="ft01" className="md:hidden" />
          <p className="text-[#36485C] text-[16px] font-medium leading-6 mt-6">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a birds eye view with our customizable
            dashboard.{" "}
          </p>
          <div className=" my-6   ">
            <div className="flex gap-x-4    ">
              <BsCheck2 color="#36485C" size={24} />
              <p className="text-[#36485C] font-medium text-[16px] leading-6">
                Lorem ipsum dolor sit amet
              </p>
            </div>
            <div className="flex gap-x-4 mt-3">
              <BsCheck2 color="#36485C" size={24} />
              <p className="text-[#36485C] font-medium text-[16px] leading-6">
                Consectetur adipiscing elit
              </p>
            </div>
            <div className="flex gap-x-4 mt-3 ">
              <BsCheck2 color="#36485C" size={24} />
              <p className="text-[#36485C] font-medium text-[16px] leading-6 text-start">
                Sed do eiusmod tempor incididunt ut labore{" "}
              </p>
            </div>
          </div>
          <div className=" text-[#EB2891] hover:text-[#f26ab3]">
            <ViweMore name="Learn More" />
          </div>
        </div>
      </div>
    </div>
  );
};

"use client";
import React from "react";
import { BsCheck2 } from "react-icons/bs";
import { Button } from "./Button";

export const Pricing = () => {
  return (
    <div id="Pricing" className="container pb-16 ">
      <h3 className="text-center py-4 text-[24px] font-medium leading-9 text-[#172026]">
        Flexible plans for you
      </h3>
      <h6 className="text-center  text-[16px] font-normal leading-6 text-[#36485C]">
        No hidden fees!
      </h6>
      <div className="flex flex-col gap-y-4 py-10 ///  md:flex-row md:gap-x-4 ">
        {/* card 11111 */}
        <div className="card flex flex-col justify-between bg-[#eae8f9] md:w-1/3">
          <div className="flex flex-col gap-y-3">
            <h4 className="text-[18px] font-medium leading-6 text-[#4328EB]">
              Free Trial
            </h4>
            <p className="text-[16px] font-normal leading-6 text-[#36485C]">
              Perfect for testing the waters
            </p>
            <h3 className="text-[24px] font-medium leading-9 text-[#172026]">
              $0
              <span className="text-[24px] font-medium leading-9 text-[#5F7896]">
                /mo
              </span>
            </h3>
            <div className="  ">
              <div className="flex gap-x-4    ">
                <BsCheck2 color="#36485C" size={24} />
                <p className="text-[#36485C] font-medium text-[16px] leading-6">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
              <div className="flex gap-x-4 mt-3">
                <BsCheck2 color="#36485C" size={24} />
                <p className="text-[#36485C] font-medium text-[16px] leading-6">
                  Sed do eiusmod tempor incididunt
                </p>
              </div>
              <div className="flex gap-x-4 mt-3 ">
                <BsCheck2 color="#36485C" size={24} />
                <p className="text-[#36485C] font-medium text-[16px] leading-6 text-start">
                  Consectetur adipiscing elit{" "}
                </p>
              </div>
            </div>
          </div>
          <Button name="Start Trial" />
        </div>
        {/* card 22222 */}
        <div className="card flex flex-col justify-between  bg-[#4328EB] md:w-1/3">
          <div className="flex flex-col gap-y-3">
            <h4 className="text-[18px] font-medium leading-6 text-[#F4F8FA]">
              Free Trial
            </h4>
            <p className="text-[16px] font-normal leading-6 text-[#F4F8FA]">
              Perfect for small businesses
            </p>
            <h3 className="text-[24px] font-medium leading-9 text-[#F4F8FA]">
              $500
              <span className="text-[24px] font-medium leading-9 text-[#F4F8FA]">
                /mo
              </span>
            </h3>
            <div className="  ">
              <div className="flex gap-x-4    ">
                <BsCheck2 color="#F4F8FA" size={24} />
                <p className="text-[#F4F8FA] font-medium text-[16px] leading-6">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
              <div className="flex gap-x-4 mt-3">
                <BsCheck2 color="#F4F8FA" size={24} />
                <p className="text-[#F4F8FA] font-medium text-[16px] leading-6">
                  Sed do eiusmod tempor incididunt
                </p>
              </div>
              <div className="flex gap-x-4 mt-3 ">
                <BsCheck2 color="#F4F8FA" size={24} />
                <p className="text-[#F4F8FA] font-medium text-[16px] leading-6 text-start">
                  Consectetur adipiscing elit{" "}
                </p>
              </div>
              <div className="flex gap-x-4 mt-3 ">
                <BsCheck2 color="#F4F8FA" size={24} />
                <p className="text-[#F4F8FA] font-medium text-[16px] leading-6 text-start">
                  Lorem ipsum dolor sit amet{" "}
                </p>
              </div>
              <div className="flex gap-x-4 mt-3 ">
                <BsCheck2 color="#F4F8FA" size={24} />
                <p className="text-[#F4F8FA] font-medium text-[16px] leading-6 text-start">
                  Sed do eiusmod tempor incididunt
                </p>
              </div>
            </div>
          </div>
          <Button name="Get Started" />
        </div>
        {/* card 3333 */}
        <div className="card flex flex-col justify-between bg-[#eae8f9] md:w-1/3">
          <div className="flex flex-col gap-y-3">
            <h4 className="text-[18px] font-medium leading-6 text-[#4328EB]">
              Enterprise
            </h4>
            <p className="text-[16px] font-normal leading-6 text-[#36485C]">
              Perfect for big companies
            </p>
            <h3 className="text-[24px] font-medium leading-9 text-[#172026]">
              Custom
            </h3>
            <div className="  ">
              <p className="  text-[#36485C] font-normal text-[16px] leading-6 text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.{" "}
              </p>
              <br />
              <p className="  text-[#36485C] font-normal text-[16px] leading-6 text-start ">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.
              </p>
            </div>
          </div>
          <Button name="Contact Us" />
        </div>
      </div>
    </div>
  );
};

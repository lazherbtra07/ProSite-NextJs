"use client";
import React, { useState } from "react";
import { GiAzulFlake } from "react-icons/gi";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";

interface DataItem {
  title: string;
  content: string[];
}

interface AccordionProps {
  data: DataItem[];
}

const data = [
  {
    title: "Features ",
    content: ["Growth", "Sales", "Chat"],
  },
  {
    title: "Features ",
    content: ["Free Trial", "Standard", "Business"],
  },
  {
    title: "Enterprise",
    content: ["Personalize", "Automation", "Invoicing", "24/7 Support"],
  },
  {
    title: "Careers",
    content: ["Open Positions", "Part-Time", "Contractual", "Contact Us"],
  },
];

export const Footer: React.FC<AccordionProps> = () => {
  const [isOpen, setisOpen] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setisOpen(isOpen === index ? null : index);
  };

  return (
    <div className="container pb-10">
      <div className="flex justify-between">
        <div className="flex  lg:align-text-top gap-2 text-[20px]">
          <GiAzulFlake size={32} /> YOUR SITE
        </div>
        <div className="lg:flex flex-row gap-x-10 lg:gap-x-20 mb-10 px-10 text-[#5F7896] hidden ">
          <ul className="flex flex-col gap-y-5 ">
            <li>Features</li>
            <li>Growth</li>
            <li>Sales</li>
            <li>Chat</li>
          </ul>
          <ul className="flex flex-col gap-y-5 ">
            <li>Features</li>
            <li>Free Trial</li>
            <li>Standard</li>
            <li>Business</li>
          </ul>
          <ul className="flex flex-col gap-y-5">
            <li>Enterprise</li>
            <li>Personalize</li>
            <li>Automation</li>
            <li>Invoicing</li>
            <li>24/7 Support</li>
          </ul>
          <ul className="flex flex-col gap-y-5">
            <li>Careers</li>
            <li>Open Positions</li>
            <li>Part-Time</li>
            <li>Contractual</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div className=" ">
        <div>
          <div className="w-full lg:hidden">
            {data.map((item, index) => (
              <div
                key={index}
                className=" p-4 mb-4 w-full text-[#5F7896] hover:text-black"
              >
                <div className="flex justify-between items-center ">
                  <button
                    onClick={() => handleToggle(index)}
                    className="w-full text-left"
                  >
                    <div className="flex justify-between items-center">
                      <span className="">{item.title}</span>
                      <span className="text-[20px]">
                        {isOpen === index ? (
                          <IoIosArrowUp />
                        ) : (
                          <IoIosArrowDown />
                        )}
                      </span>
                    </div>
                  </button>
                </div>
                <div className="flex flex-col">
                  {isOpen === index && (
                    <ul className="mt-4 text-black cursor-pointer  ">
                      {item.content.map((contentItem, contentIndex) => (
                        <li
                          key={contentIndex}
                          className=" p-4 hover:text-[#5F7896]"
                        >
                          {contentItem}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between pb-7 border-b-2  border-[#5F7896] ">
        <p className=" text-[14px]  text-[#5F7896] mb-5 lg:mb-0">
          © Copyright 2024. Your Site. All rights reserved.
        </p>
        <div className=" text-right ">
          <ul className="flex  gap-x-10 justify-between items-center text-[24px]  text-[#5F7896]  ">
            <li className="cursor-pointer hover:text-blue-600 right-0">
              <FaFacebook />
            </li>
            <li className="cursor-pointer hover:text-blue-400">
              <FaTwitter />
            </li>
            <li className="cursor-pointer hover:text-[#c01814] ">
              <BiLogoInstagramAlt />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

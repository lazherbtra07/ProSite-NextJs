"use client";
import React, { useState } from "react";
import { PiMinusBold } from "react-icons/pi";
import { FiPlus } from "react-icons/fi";

interface DataItem {
  title: string;
  content: string;
}

interface AccordionProps {
  data: DataItem[];
}

const data = [
  {
    title: "Ut enim ad minima veniam ",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
  {
    title: "Ut enim ad minima veniam ",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
  {
    title: "Ut enim ad minima veniam",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
  {
    title: "Ut enim ad minima veniam",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
  {
    title: "Ut enim ad minima veniam",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
];

export const Frequently: React.FC<AccordionProps> = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div id="Frequently" className="container my-[56px] md:flex  lg:gap-x-6">
      <div className="md:w-1/2   md:py-14 md:pr-14 xl:pr-36">
        <h5 className=" text-[14px] font-medium leading-5 text-[#EB2891]">
          Frequently Asked Questions
        </h5>
        <h3 className="  py-4 text-[24px] font-medium leading-9 / md:text-[42px] md:font-medium md:leading-[58px]">
          Let’s clarify some of your questions
        </h3>
        <p className=" text-[#36485C] text-[16px] font-normal leading-6 mb-5 / md:text-[18px] md:font-normal md:leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore{" "}
        </p>
      </div>
      <div className="md:w-1/2">
        <div className="w-full">
          <div className="w-full">
            {data.map((item, index) => (
              <div
                key={index}
                className="bg-[#E3F1FF] rounded-lg p-4 mb-4 w-full"
              >
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => handleToggle(index)}
                    className="w-full text-left"
                  >
                    <div className="flex justify-between items-center">
                      <span className="ml-4">{item.title}</span>
                      <span className="text-[20px]">
                        {openIndex === index ? "-" : "+"}
                      </span>
                    </div>
                  </button>
                </div>
                {openIndex === index && (
                  <div className="text-[16px] font-normal leading-6 text-[#36485C] p-4">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

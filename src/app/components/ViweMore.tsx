import React from "react";
import { FaArrowRight } from "react-icons/fa";

export const ViweMore = (props: any) => {
  return (
    <div className=" flex cursor-pointer">
      <p className="   ">{props.name}</p>
      <div className="flex justify-center items-center w-[26px] h-[26px] ml-3 bg-[#ededee] rounded-full text-center ">
        <FaArrowRight size={14} color={props.color} />
      </div>
    </div>
  );
};

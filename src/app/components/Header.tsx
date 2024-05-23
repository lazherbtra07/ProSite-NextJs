"use client";
import React, { useState } from "react";
import { FaXmark, FaBars, FaCircleUser } from "react-icons/fa6";
import { GiAzulFlake } from "react-icons/gi";
import Link from "next/link";
import Headroom from "react-headroom";

const NavLinks = [
  { id: "Features", name: "Features" },
  { id: "Frequently", name: "Frequently" },
  { id: "Pricing", name: "Pricing" },
  { id: "Careers", name: "Careers" },
];

export const Header = () => {
  const [isThisOpen, setisThisOpen] = useState(false);

  return (
    <>
      <Headroom>
        <nav className=" lg:px-20 top-0 left-0 right-0 z-10 bg-gray-50  ">
          <div className="container flex w-full items-center justify-between py-[16px] lg:container lg:mx-auto border-b-[1px]  border-[#5F7896]">
            <div className="flex items-center cursor-pointer  ">
              <Link href={"#Hero"}>
                <GiAzulFlake size={32} />
              </Link>
              <div className="hidden md:flex pl-5 lg:pl-[74px] gap-x-5 lg:gap-x-[56px] text-[#36485c] font-medium  ">
                {NavLinks.map((item, index) => (
                  <Link href={`#${item.id}`} key={index}>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-x-5">
              <p className="hidden md:block font-medium text-[#36485c] cursor-pointer">
                Create Account
              </p>
              <div className=" mr-[20px] flex items-center gap-x-2 md:mr-0">
                <FaCircleUser size={32} />
                <span className=" hidden md:block font-medium text-[#36485c] cursor-pointer">
                  Sing in
                </span>
              </div>
              <div
                className=" md:hidden "
                onClick={() => setisThisOpen(!isThisOpen)}
              >
                {isThisOpen ? (
                  <div className="  relative">
                    <FaXmark size={30} />
                    <div className="  absolute -right-5 z-10 bg-gray-50 bg-opacity-90 py-8 rounded-br-lg rounded-bl-lg ">
                      <ul className="  w-screen ">
                        <li className="flex flex-col items-center gap-y-10">
                          {NavLinks.map((item, index) => (
                            <Link href={`#${item.id}`} key={index}>
                              {item.name}
                            </Link>
                          ))}
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <FaBars size={30} />
                )}
              </div>
            </div>
          </div>
        </nav>
      </Headroom>
    </>
  );
};

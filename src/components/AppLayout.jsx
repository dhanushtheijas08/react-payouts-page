import { BiMessageRoundedDots } from "react-icons/bi";
import { BsQuestionCircle } from "react-icons/bs";
import { FaCaretDown, FaChevronDown } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

import Card from "./card";
import Table from "./Table";
import { useState } from "react";
import NavLinks from "./NavLinks";

export default function AppLayout() {
  const [toggle, setIsToggle] = useState(false);
  console.log(toggle);
  return (
    <div className="w-full">
      <header className="flex justify-between w-full shadow px-6 py-3">
        <div className="flex items-center">
          <p>Payments</p>
          <BsQuestionCircle className="inline ml-2 font-normal text-sm text-gray-500" />
          <p className="text-sm text-gray-500 ml-1">How it works</p>
        </div>

        <div className="hidden relative md:flex items-center">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            id="table-search"
            className="block w-80 pl-10 pr-3 py-2 border-[1.5px]  border-gray-200 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
            placeholder="Search"
            type="search"
            name="search"
          />
        </div>

        <div className="hidden lg:block space-x-2">
          <button className="p-2 rounded-full bg-gray-200">
            <BiMessageRoundedDots className="text-lg text-gray-700" />
          </button>
          <button className="p-2 rounded-full bg-gray-200">
            <FaCaretDown className="text-lg text-gray-700" />
          </button>
        </div>
        <div
          className="text-4xl lg:hidden"
          onClick={() => setIsToggle((prev) => !prev)}
        >
          <IoMenu />
        </div>
      </header>
      <main className="w-full px-5 pt-6">
        <div className={toggle ? "hidden" : "block"}>
          <div className="mb-5 mt-10 flex justify-between">
            <h2 className="font-semibold text-2xl sm:text-3xl">Overview</h2>
            <button className="py-1 px-2.5 border-[1.5px] rounded border-gray-200">
              Last Month
              <FaChevronDown className="inline ml-2 font-normal text-sm mb-1" />
            </button>
          </div>
          <Card />
        </div>

        <div className={toggle ? "hidden" : "block"}>
          <h2 className="font-semibold text-2xl sm:text-3xl mb-5 mt-10">
            Transaction
            <span className="text-lg sm:text-2xl"> | This Month</span>
          </h2>
          <Table />
        </div>

        {
          // Mobile View
          toggle && (
            <div className="lg:hidden absolute inset-0  flex-col justify-between font-inter px-4 text-white/85 py-2 bg-[#1f2740]">
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <p>Payments</p>
                  <div>
                    <BsQuestionCircle className=" text-xs inline font-normal text-gray-500" />
                    <span className=" text-gray-500 text-xs ml-1">
                      How it works
                    </span>
                  </div>
                </div>
                <div onClick={() => setIsToggle((prev) => !prev)}>
                  <IoMenu className="text-4xl lg:hidden" />
                </div>
              </div>
              <NavLinks isOpen={toggle} />
            </div>
          )
        }
      </main>
    </div>
  );
}

// SideBar.jsx
import { useState } from "react";
import Logo from "../assets/logo.png";
import { FaChevronDown } from "react-icons/fa";
import { CiWallet } from "react-icons/ci";

import NavLinks from "./NavLinks";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative hidden lg:flex flex-col h-full bg-[#1f2740]">
      <aside className="flex-col justify-between font-inter px-4 text-white/85 py-2 bg-[#1f2740]">
        <nav className="relative overflow-y-auto">
          <ul className="flex flex-col text-lg">
            <li className="mb-5 flex  items-center justify-between">
              <img src={Logo} alt="logo" className="h-11" />
              <div className={!isOpen ? "hidden" : "block"}>
                <h1 className="text-white/100">Nishyan</h1>
                <p className="text-sm text-white/75 underline">Visit Store</p>
              </div>
              <FaChevronDown
                onClick={toggleSidebar}
                className={`cursor-pointer h-6 w-6 ${
                  isOpen ? "rotate-90" : "-rotate-90 ml-2"
                }`}
              />
            </li>

            <NavLinks isOpen={isOpen} />
          </ul>
        </nav>

        <div className="hover:bg-[#343a52] absolute w-full bottom-0 left-0 cursor-pointer gap-3 flex items-center rounded px-4 py-2 ">
          <CiWallet className="h-8 w-6 font-bold" />
          <div className={!isOpen ? "hidden" : "flex flex-col"}>
            <p className="text-white/65 text-xs">Available Credits</p>
            <p>222.10</p>
          </div>
        </div>
      </aside>
    </div>
  );
}

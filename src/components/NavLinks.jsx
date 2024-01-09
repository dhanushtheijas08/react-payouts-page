import { GrHomeRounded } from "react-icons/gr";
import { LuClipboardList } from "react-icons/lu";
import { IoGridOutline } from "react-icons/io5";
import { BsTruck } from "react-icons/bs";
import { TbDeviceAnalytics } from "react-icons/tb";
import { MdOutlinePayments } from "react-icons/md";
import { SlCursor } from "react-icons/sl";
import { TbDiscount2 } from "react-icons/tb";
import { BsPeople } from "react-icons/bs";
import { IoColorPaletteOutline } from "react-icons/io5";
import { ImPower } from "react-icons/im";
import { AiOutlineNotification } from "react-icons/ai";

// eslint-disable-next-line react/prop-types
export default function NavLinks({ isOpen }) {
  console.log(isOpen);
  return (
    <>
      <li
        className={`hover:bg-[#343a52] cursor-pointer gap-3 flex items-center rounded px-4 py-1 ${
          isOpen ? "justify-start" : "justify-center"
        }`}
      >
        <GrHomeRounded className={isOpen ? "h-8" : "h-8"} />
        <a href="" className={isOpen ? "block" : "hidden"}>
          Home
        </a>
      </li>

      <li
        className={`hover:bg-[#343a52] cursor-pointer gap-3 flex items-center rounded px-4 py-1 ${
          isOpen ? "justify-start" : "justify-center"
        }`}
      >
        <LuClipboardList className={isOpen ? "h-8" : "h-8"} />

        <a href="" className={isOpen ? "block" : "hidden"}>
          Orders
        </a>
      </li>
      <li
        className={`hover:bg-[#343a52] cursor-pointer gap-3 flex items-center rounded px-4 py-1 ${
          isOpen ? "justify-start" : "justify-center"
        }`}
      >
        <IoGridOutline className={isOpen ? "h-8" : "h-8"} />

        <a href="" className={isOpen ? "block" : "hidden"}>
          Products
        </a>
      </li>
      <li
        className={`hover:bg-[#343a52] cursor-pointer gap-3 flex items-center rounded px-4 py-1 ${
          isOpen ? "justify-start" : "justify-center"
        }`}
      >
        <BsTruck className={isOpen ? "h-8" : "h-8"} />

        <a href="" className={isOpen ? "block" : "hidden"}>
          Delivery
        </a>
      </li>
      <li
        className={`hover:bg-[#343a52] cursor-pointer gap-3 flex items-center rounded px-4 py-1 ${
          isOpen ? "justify-start" : "justify-center"
        }`}
      >
        <AiOutlineNotification className={isOpen ? "h-8" : "h-8"} />
        <a href="" className={isOpen ? "block" : "hidden"}>
          Marketing
        </a>
      </li>
      <li
        className={`hover:bg-[#343a52] cursor-pointer gap-3 flex items-center rounded px-4 py-1 ${
          isOpen ? "justify-start" : "justify-center"
        }`}
      >
        <TbDeviceAnalytics className={isOpen ? "h-8" : "h-8"} />
        <a href="" className={isOpen ? "block" : "hidden"}>
          Analytics
        </a>
      </li>
      <li
        className={`hover:bg-[#343a52] cursor-pointer gap-3 flex items-center rounded px-4 py-1 ${
          isOpen ? "justify-start" : "justify-center"
        }`}
      >
        <MdOutlinePayments className={isOpen ? "h-8" : "h-8"} />

        <a href="" className={isOpen ? "block" : "hidden"}>
          Payment
        </a>
      </li>
      <li
        className={`hover:bg-[#343a52] cursor-pointer gap-3 flex items-center rounded px-4 py-1 ${
          isOpen ? "justify-start" : "justify-center"
        }`}
      >
        <SlCursor className={isOpen ? "h-8" : "h-8"} />

        <a href="" className={isOpen ? "block" : "hidden"}>
          Tools
        </a>
      </li>
      <li
        className={`hover:bg-[#343a52] cursor-pointer gap-3 flex items-center rounded px-4 py-1 ${
          isOpen ? "justify-start" : "justify-center"
        }`}
      >
        <TbDiscount2 className={isOpen ? "h-8" : "h-8"} />

        <a href="" className={isOpen ? "block" : "hidden"}>
          Discounts
        </a>
      </li>
      <li
        className={`hover:bg-[#343a52] cursor-pointer gap-3 flex items-center rounded px-4 py-1 ${
          isOpen ? "justify-start" : "justify-center"
        }`}
      >
        <BsPeople className={isOpen ? "h-8" : "h-8"} />

        <a href="" className={isOpen ? "block" : "hidden"}>
          Audience
        </a>
      </li>
      <li
        className={`hover:bg-[#343a52] cursor-pointer gap-3 flex items-center rounded px-4 py-1 ${
          isOpen ? "justify-start" : "justify-center"
        }`}
      >
        <IoColorPaletteOutline className={isOpen ? "h-8" : "h-8"} />

        <a href="" className={isOpen ? "block" : "hidden"}>
          Appearance
        </a>
      </li>
      <li
        className={`hover:bg-[#343a52] cursor-pointer gap-3 flex items-center rounded px-4 py-1 ${
          isOpen ? "justify-start" : "justify-center"
        }`}
      >
        <ImPower className={isOpen ? "h-8" : "h-8"} />
        <a href="" className={isOpen ? "block" : "hidden"}>
          Plugins
        </a>
      </li>
    </>
  );
}

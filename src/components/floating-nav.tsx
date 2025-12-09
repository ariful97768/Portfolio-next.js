"use client";
import useActiveSection from "@/hooks/useActiveSection";
import { LuUserRound } from "react-icons/lu";
import { MdOutlineEmail, MdOutlineGridOn } from "react-icons/md";
import { SlHome } from "react-icons/sl";
import { TbBulb } from "react-icons/tb";

const FloatingNavbar = () => {
  const activeSection = useActiveSection();

  return (
    <div className="fixed top-1/2 right-14 hidden lg:block transform lg:-translate-y-1/2 z-10">
      <div className="text-[#999999] bg-[#1f1f1f] text-xl flex flex-col gap-7 border rounded-full border-gray-500 px-4 py-7">
        <a
          className={`${
            activeSection === "home" && "text-[#28e98c]"
          } hover:text-[#28e98c] transition-colors duration-300`}
          href={"#"}
        >
          <SlHome />
        </a>
        <a
          className={`${
            activeSection === "about" && "text-[#28e98c]"
          } hover:text-[#28e98c] transition-colors duration-300`}
          href={"#about"}
        >
          <LuUserRound />
        </a>
        <a
          className={`${
            activeSection === "skills" && "text-[#28e98c]"
          } hover:text-[#28e98c] transition-colors duration-300`}
          href="#skills"
        >
          <TbBulb />
        </a>
        <a
          className={`${
            activeSection === "projects" && "text-[#28e98c]"
          } hover:text-[#28e98c] transition-colors duration-300`}
          href={"#projects"}
        >
          <MdOutlineGridOn />
        </a>
        <a
          className={`${
            activeSection === "contact" && "text-[#28e98c]"
          } hover:text-[#28e98c] transition-colors duration-300`}
          href={"#contact"}
        >
          <MdOutlineEmail />
        </a>
      </div>
    </div>
  );
};

export default FloatingNavbar;

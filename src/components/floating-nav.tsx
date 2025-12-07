"use client";
import { useEffect, useState } from "react";
import { LuUserRound } from "react-icons/lu";
import { MdOutlineEmail, MdOutlineGridOn } from "react-icons/md";
import { SlHome } from "react-icons/sl";
import { TbBulb } from "react-icons/tb";

const FloatingNavbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
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

import { SlHome } from "react-icons/sl";
import * as motion from "motion/react-client";
import Image from "next/image";
import roundTxt from "@/assets/round-text.png";
import { FaArrowDown } from "react-icons/fa6";
import Link from "next/link";
const Introduction = () => {
  return (
    <motion.section
      initial={{ y: 20, opacity: 0.5 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="home"
      className="pt-[30px] md:pt-[50px] lg:pt-20"
    >
      <h1 className="rounded-full py-1 px-5 border w-max h-max text-sm flex items-center gap-3 border-gray-600">
        <SlHome />
        Introduction
      </h1>
      <div className="max-w-5xl mx-auto pt-10">
        <h1 className="leading-10 sm:leading-14 md:leading-18 lg:leading-22 text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-4">
          Say Hi from{" "}
          <span className="text-[#28e98c]">
            Ariful,
            <br /> Full-Stack
          </span>{" "}
          JavaScript Developer
        </h1>
        <p className="mt-8 text-sm curved-text md:text-base text-[#999999]">
          I develop scalable, user-focused applications, blending modern
          frontend design with solid backend engineering.
        </p>
      </div>
      <div className="flex justify-end mt-10">
        <Link
          href={"#projects"}
          className="relative p-3 rounded-full border border-gray-500  w-max  h-max"
        >
          <FaArrowDown
            size={28}
            className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
          />

          <Image
            className=" duration-150 animate-[spin_5s_linear_infinite]"
            src={roundTxt}
            width={120}
            height={120}
            alt="Rounded text"
          />
        </Link>
      </div>
    </motion.section>
  );
};

export default Introduction;

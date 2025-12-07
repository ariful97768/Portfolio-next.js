import { TbBulb } from "react-icons/tb";
import Image from "next/image";
import next from "@/assets/icons8-next.js.svg";
import typescript from "@/assets/typescript-logo-svgrepo-com.svg";
import javascript from "@/assets/javascript-svgrepo-com.svg";
import postman from "@/assets/postman-icon-svgrepo-com.svg";
import express from "@/assets/expressjs.svg";
import tailwind from "@/assets/tailwind.svg";
import firebase from "@/assets/firebase-svgrepo-com.svg";
import git from "@/assets/git.svg";
import github from "@/assets/github-svgrepo-com.svg";
import jwt from "@/assets/icons8-jwt.svg";
import mongoose from "@/assets/icons8-mongoose.svg";
import mongo from "@/assets/mongo-svgrepo-com.svg";
import node from "@/assets/node-js-svgrepo-com.svg";
import react from "@/assets/react-svgrepo-com.svg";
// import redux from "@/assets/redux-svgrepo-com.svg";
import auth from "@/assets/next-auth.svg";
import * as motion from "motion/react-client";

const Skills = () => {
  return (
    <motion.section
      initial={{ y: 50, opacity: 0 }}
      transition={{ duration: 0.8 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      id="skills"
      className="pt-[30px] md:pt-[50px] lg:pt-[90px]"
    >
      <h1 className="rounded-full py-1 px-5 border w-max h-max text-sm flex items-center gap-3 border-gray-600">
        <TbBulb />
        My Skills
      </h1>
      <div id="skill" className="py-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4">
            My <span className="text-[#28e98c] ">Advantages</span>
          </h2>
          <div className="mt-8 text-sm md:text-base text-[#999999]">
            I love turning ideas into living, breathing web experiences. From
            the first interaction to the final detail, I shape products that
            feel smooth, intuitive, and alive. Every project is a chance to
            blend creativity with logic in the most seamless way possible.
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-8 mt-10"
        >
          <div className="flex justify-between md:px-10 items-center gap-5 max-w-5xl mx-auto">
            <div className="w-12 relative h-12">
              <Image
                title="JavaScript"
                src={javascript}
                fill
                alt="JavaScript"
                className="object-cover "
              />
            </div>
            <div className="w-12 relative h-12">
              <Image
                title="TypeScript"
                src={typescript}
                fill
                alt="TypeScript"
                className="object-cover "
              />
            </div>
            <div className="w-12 relative h-12">
              <Image
                title="React.js"
                src={react}
                fill
                alt="React.js"
                className="object-cover"
              />
            </div>
            <div className="w-12 relative h-12">
              <Image
                title="Next.js"
                src={next}
                fill
                alt="Next.js"
                className="object-cover"
              />
            </div>
            <div className="w-12 relative h-12">
              <Image
                title="TailwindCSS"
                src={tailwind}
                fill
                alt="TailwindCSS"
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex justify-between md:px-10 items-center gap-5 max-w-5xl mx-auto">
            <div className="w-12 relative h-12">
              <Image
                title="Node.js"
                src={node}
                fill
                alt="Node.js"
                className="object-cover"
              />
            </div>
            <div className="w-12 items-center relative h-12">
              <Image
                title="Express.js"
                src={express}
                fill
                alt="Express.js"
                className="z-10 object-cover"
              />
              <div className="bg-white w-10 h-10 rounded-full absolute top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2"></div>
            </div>
            <div className="w-12 relative h-12">
              <Image
                title="MongoDB"
                src={mongo}
                fill
                alt="MongoDB"
                className="object-cover"
              />
            </div>
            <div className="w-12 relative h-12">
              <Image
                title="Mongoose"
                src={mongoose}
                fill
                alt="Mongoose"
                className="object-cover"
              />
            </div>
            <div className="w-12 relative h-12">
              <Image
                title="Firebase"
                src={firebase}
                fill
                alt="Firebase"
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex justify-between md:px-10 items-center gap-5 max-w-5xl mx-auto">
            <div className="w-12 relative h-12">
              <Image
                title="Git"
                src={git}
                fill
                alt="Git"
                className="object-cover"
              />
            </div>
            <div className="w-12 relative h-12">
              <Image
                title="Github"
                src={github}
                fill
                alt="Github"
                className="object-cover"
              />
            </div>
            <div className="w-12 relative h-12">
              <Image
                title="Postman"
                src={postman}
                fill
                alt="Postman"
                className="object-cover"
              />
            </div>
            {/* <div className="w-12 relative h-12">
            <Image src={redux} fill alt="" className="object-cover" />
          </div> */}
            <div className="w-12 relative h-12">
              <Image
                title="Json Web Token (JWT)"
                src={jwt}
                fill
                alt="JWT"
                className="object-cover"
              />
            </div>
            <div className="w-12 relative h-12">
              <Image
                title="NextAuth.js"
                src={auth}
                fill
                alt="NextAuth.js"
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;

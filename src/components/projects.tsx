import Image from "next/image";
import { MdOutlineGridOn } from "react-icons/md";

import akademi from "@/assets/akademi.png";
import bookStore from "@/assets/book-store.png";
import lingoBingo from "@/assets/lingo-bingo.png";
import * as motion from "motion/react-client";

const Projects = () => {
  return (
    <motion.section
      initial={{ y: 50, opacity: 0 }}
      transition={{ duration: 0.8 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      id="projects"
      className="pt-[30px] md:pt-[50px] lg:pt-[90px]"
    >
      <h1 className="rounded-full py-1 px-5 border w-max h-max text-sm flex items-center gap-3 border-gray-600">
        <MdOutlineGridOn />
        Projects
      </h1>
      <div className="mx-auto pt-10 ">
        <h1 className="text-3xl sm:text-4xl md:text-5xl mb-8">
          Featured
          <span className="text-[#28e98c] "> Projects.</span>
        </h1>
        <div className="space-y-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.8 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="mb-3 ml-3 text-lg">Akademi</h3>
            <div className="relative">
              <Image className="rounded-3xl" src={akademi} alt="" />
            </div>
            <div className="flex gap-3 ml-3 mt-3">
              <a
                className="hover:text-green-400 transition-colors duration-300 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                href="https://akademi-uni.web.app/"
              >
                Live link
              </a>
              <label
                htmlFor="my_modal_akademi"
                className="hover:text-green-400 hover:cursor-pointer transition-colors duration-300 "
              >
                View Details
              </label>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.8 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="mb-3 ml-3 text-lg">Books World</h3>
            <div className="relative">
              <Image className="rounded-3xl" src={bookStore} alt="" />
            </div>
            <div className="flex gap-3 ml-3 mt-3">
              <a
                className="hover:text-green-400 transition-colors duration-300 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                href="https://books-world-49b0c.web.app/"
              >
                Live link
              </a>
              <label
                htmlFor="my_modal_bookstore"
                className="hover:text-green-400 hover:cursor-pointer transition-colors duration-300 "
              >
                View Details
              </label>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.8 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="mb-3 ml-3 text-lg">Lingo Bingo</h3>
            <div className="relative">
              <Image className="rounded-3xl" src={lingoBingo} alt="" />
            </div>
            <div className="flex gap-3 ml-3 mt-3">
              <a
                className="hover:text-green-400 transition-colors duration-300 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                href="https://lingo-bingo-f6242.web.app/"
              >
                Live link
              </a>
              <label
                htmlFor="my_modal_lingo"
                className="hover:text-green-400 hover:cursor-pointer transition-colors duration-300 "
              >
                View Details
              </label>
            </div>
          </motion.div>

          <input
            type="checkbox"
            id="my_modal_akademi"
            className="modal-toggle"
          />
          <div role="dialog" id="my_modal_akademi" className="modal">
            <div className="modal-box h-5/6 md:h-full md:max-h-[calc(100vh-5em)] w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12 max-w-5xl space-y-3 bg-[#1f1f1f]">
              <div>
                <Image
                  className="rounded-xl mx-auto"
                  src={akademi}
                  alt="Akademi Banner"
                />
              </div>
              <h3 className="mt-5! font-bold text-xl">
                Akademi -{" "}
                <span className="font-normal text-base">
                  Scholarship Management System
                </span>
              </h3>
              <div className="flex gap-3">
                <a
                  className="hover:text-green-400 transition-colors duration-300 underline text-xs md:text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://akademi-uni.web.app/"
                >
                  Live link
                </a>
                <a
                  className="hover:text-green-400 transition-colors duration-300 underline text-xs md:text-base"
                  target="_blank"
                  href="https://github.com/ariful97768/Akademi-Scholarships-Management"
                >
                  Frontend repository
                </a>
                <a
                  className="hover:text-green-400 transition-colors duration-300 underline text-xs md:text-base"
                  target="_blank"
                  href="https://github.com/ariful97768/Akademi-Server"
                >
                  Backend repository
                </a>
              </div>
              <p>
                Akademi is a web-based platform designed to streamline the
                scholarship application and management process. It allows
                students to apply for scholarships seamlessly while enabling
                administrators to efficiently review and process applications.
                Built with the MERN stack and Firebase authentication, Akademi
                ensures a smooth user experience with secure access control. The
                platform also includes a payment gateway for fee submissions,
                making the process more convenient for users.
              </p>
              <div className="flex gap-2 items-center flex-wrap">
                <p className="font-semibold">Technology used:</p>
                <span className="badge badge-outline">JavaScript</span>
                <span className="badge badge-outline">React</span>
                <span className="badge badge-outline">Node.js</span>
                <span className="badge badge-outline">MongoDB</span>
                <span className="badge badge-outline">Express.js</span>
                <span className="badge badge-outline">Firebase Auth</span>
                <span className="badge badge-outline">Tailwind CSS</span>
                <span className="badge badge-outline">Stripe</span>
              </div>
              <div>
                <p className="font-semibold">Challenges Faced:</p>
                <ul className="list-disc pl-7">
                  <li>Handling file uploads securely</li>
                  <li>Optimizing database queries for better performance</li>
                  <li>
                    Defining clear permissions for Admins, Students, and
                    Moderators without conflicts.
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">Future Enhancements:</p>
                <ul className="list-disc pl-7">
                  <li>
                    Send email/SMS alerts for application updates, deadlines,
                    and approvals.
                  </li>
                  <li>
                    Allow users to download their submitted applications as
                    PDFs.
                  </li>
                  <li>Prevent spam and bot registrations.</li>
                </ul>
              </div>
              <div className="modal-action">
                <label
                  className="btn bg-white text-black"
                  htmlFor="my_modal_akademi"
                >
                  Close
                </label>
              </div>
            </div>
          </div>
          <input
            type="checkbox"
            id="my_modal_bookstore"
            className="modal-toggle"
          />
          <div role="dialog" id="my_modal_bookstore" className="modal">
            <div className="modal-box h-5/6 md:h-full md:max-h-[calc(100vh-5em)] w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12 max-w-5xl space-y-3 bg-[#1f1f1f]">
              <div>
                <Image
                  className="rounded-xl mx-auto"
                  src={bookStore}
                  alt="BookStore Banner"
                />
              </div>
              <h3 className="mt-5! font-bold text-xl">
                Book Store -{" "}
                <span className="font-normal text-base">
                  Your go to Books library
                </span>
              </h3>
              <div className="flex gap-3">
                <a
                  className="hover:text-green-400 transition-colors duration-300 underline text-xs md:text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://books-world-49b0c.web.app/"
                >
                  Live link
                </a>
                <a
                  className="hover:text-green-400 transition-colors duration-300 underline text-xs md:text-base"
                  target="_blank"
                  href="https://github.com/ariful97768/Book-Store"
                >
                  Frontend repository
                </a>
                <a
                  className="hover:text-green-400 transition-colors duration-300 underline text-xs md:text-base"
                  target="_blank"
                  href="https://github.com/ariful97768/Book-Store-Server"
                >
                  Backend repository
                </a>
              </div>
              <p>
                Books Store - A MERN-based Book Borrowing Platform. A full-stack
                MERN application where users can browse books by category,
                borrow and manage their borrowed list, return books, add new
                books, update their own books, and explore top-rated books on
                the homepage.
              </p>
              <div className="flex gap-2 items-center flex-wrap">
                <p className="font-semibold">Technology used:</p>
                <span className="badge badge-outline">JavaScript</span>
                <span className="badge badge-outline">React</span>
                <span className="badge badge-outline">Node.js</span>
                <span className="badge badge-outline">MongoDB</span>
                <span className="badge badge-outline">Express.js</span>
                <span className="badge badge-outline">Firebase Auth</span>
                <span className="badge badge-outline">Tailwind CSS</span>
              </div>
              <div>
                <p className="font-semibold">Challenges Faced:</p>
                <ul className="list-disc pl-7">
                  <li>
                    Optimizing book search and filtering to deliver fast results
                    for users.
                  </li>
                  <li>
                    Implementing real-time stock updates to prevent overselling.
                  </li>
                  <li>
                    Optimizing book search and filtering to deliver fast results
                    for users.
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">Future Enhancements:</p>
                <ul className="list-disc pl-7">
                  <li>
                    Admin Moderation System to approve or reject book listings.
                  </li>
                  <li>
                    Delivery Tracking Integration to provide real-time shipping
                    updates.
                  </li>
                  <li>
                    Dark Mode Feature for a better reading and browsing
                    experience..
                  </li>
                </ul>
              </div>
              <div className="modal-action">
                <label className="btn text-black bg-white" htmlFor="my_modal_bookstore">
                  Close
                </label>
              </div>
            </div>
          </div>
          <input type="checkbox" id="my_modal_lingo" className="modal-toggle" />
          <div role="dialog" id="my_modal_lingo" className="modal">
            <div className="modal-box h-5/6 md:h-full md:max-h-[calc(100vh-5em)] w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12 max-w-5xl space-y-3 bg-[#1f1f1f]">
              <div>
                <Image
                  className="rounded-xl mx-auto"
                  src={lingoBingo}
                  alt="LingoBingo Banner"
                />
              </div>
              <h3 className="mt-5! font-bold text-xl">
                Lingo Bingo -{" "}
                <span className="font-normal text-base">
                  Learn language with fun
                </span>
              </h3>
              <div className="flex gap-3">
                <a
                  className="hover:text-green-400 transition-colors duration-300 underline text-xs md:text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://lingo-bingo-f6242.web.app/"
                >
                  Live link
                </a>
                <a
                  className="hover:text-green-400 transition-colors duration-300 underline text-xs md:text-base"
                  target="_blank"
                  href="https://github.com/ariful97768/Lingo-Bingo"
                >
                  Frontend repository
                </a>
              </div>
              <p>
                Lingo Bingo is an interactive and engaging word-based game
                platform that combines the excitement of Bingo with language
                learning. Players can participate in fun and educational games,
                where they match words or phrases to improve their vocabulary.
                The website features a dynamic user interface built with React,
                with smooth animations and responsive design to enhance the user
                experience. Integrated with Firebase for user authentication and
                data management, Lingo Bingo ensures a secure and seamless
                experience.
              </p>
              <div className="flex gap-2 items-center flex-wrap">
                <p className="font-semibold">Technology used:</p>
                <span className="badge badge-outline">JavaScript</span>
                <span className="badge badge-outline">React</span>
                <span className="badge badge-outline">Node.js</span>
                <span className="badge badge-outline">MongoDB</span>
                <span className="badge badge-outline">Express.js</span>
                <span className="badge badge-outline">Firebase Auth</span>
                <span className="badge badge-outline">Tailwind CSS</span>
              </div>
              <div>
                <p className="font-semibold">Challenges Faced:</p>
                <ul className="list-disc pl-7">
                  <li>
                    Structuring and categorizing words or phrases for easy
                    access and use can become overwhelming.
                  </li>
                  <li>Optimizing database queries for better performance</li>
                  <li>
                    Defining clear permissions for Admins, Students, and
                    Moderators without conflicts.
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">Future Enhancements:</p>
                <ul className="list-disc pl-7">
                  <li>
                    Introduce achievements, leaderboards, or a reward system to
                    incentivize users to play more frequently.
                  </li>
                  <li>Provide users with detailed performance analytics.</li>
                  <li>Prevent spam and bot registrations.</li>
                </ul>
              </div>
              <div className="modal-action">
                <label
                  htmlFor="my_modal_lingo"
                  className="btn text-black bg-white"
                >
                  Close
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;

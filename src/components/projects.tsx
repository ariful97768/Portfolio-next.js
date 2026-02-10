import { MdOutlineGridOn } from "react-icons/md";
import akademi from "@/assets/akademi.png";
import designForgee from "@/assets/design-forgee.png";
import bookStore from "@/assets/book-store.png";
import lingoBingo from "@/assets/lingo-bingo.png";
import * as motion from "motion/react-client";
import ProjectCard from "./ui/project-card";
import Modal from "./ui/modal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
          <span className="text-[#28e98c]"> Projects.</span>
        </h1>
        <div className="space-y-8">
          {/* Project cards */}
          <ProjectCard
            image={akademi}
            title="Akademi"
            liveLink="https://akademi-uni.web.app/"
            modalId="my_modal_akademi"
          />
          <ProjectCard
            image={bookStore}
            title="Books World"
            liveLink="https://books-world-49b0c.web.app/"
            modalId="my_modal_bookstore"
          />
          <ProjectCard
            image={designForgee}
            title="Design Forge"
            liveLink="https://design-forgee.vercel.app/"
            modalId="my_modal_designforgee"
          />
          <ProjectCard
            image={lingoBingo}
            title="Lingo Bingo"
            liveLink="https://lingo-bingo-f6242.web.app/"
            modalId="my_modal_lingo"
          />

          {/* Modals for the project description */}

          <Modal
            modalId="my_modal_akademi"
            image={akademi}
            title="Akademi"
            subtitle="- Scholarship Management System"
            liveLink="https://akademi-uni.web.app/"
            frontendRepo="https://github.com/ariful97768/Akademi-Scholarships-Management"
            backendRepo="https://github.com/ariful97768/Akademi-Server"
            description="Akademi is a web-based platform designed to streamline the
                scholarship application and management process. It allows
                students to apply for scholarships seamlessly while enabling
                administrators to efficiently review and process applications.
                Built with the MERN stack and Firebase authentication, Akademi
                ensures a smooth user experience with secure access control. The
                platform also includes a payment gateway for fee submissions,
                making the process more convenient for users."
            technologies={[
              "JavaScript",
              "React",
              "Node.js",
              "MongoDB",
              "Express.js",
              "Firebase Auth",
              "Tailwind CSS",
              "Stripe",
            ]}
            challenges={[
              "Handling image uploads securely",
              "Optimizing database queries for better performance",
              "Defining clear permissions for Admins, Students, and Moderators without conflicts",
            ]}
            solutions={[
              "Implemented secure image upload system using imgbb API",
              "Optimized database queries using indexing and aggregation pipeline",
              "Implemented RBAC for secure access control",
            ]}
          />
          <Modal
            modalId="my_modal_bookstore"
            image={bookStore}
            title="Book Store"
            subtitle="Your go to Books library"
            liveLink="https://books-world-49b0c.web.app/"
            frontendRepo="https://github.com/ariful97768/Book-Store"
            backendRepo="https://github.com/ariful97768/Book-Store-Server"
            description="Books Store - A MERN-based Book Borrowing Platform. A full-stack
                MERN application where users can browse books by category,
                borrow and manage their borrowed list, return books, add new
                books, update their own books, and explore top-rated books on
                the homepage."
            technologies={[
              "JavaScript",
              "React",
              "Node.js",
              "MongoDB",
              "Express.js",
              "Firebase Auth",
              "Tailwind CSS",
              "React Toastify",
            ]}
            challenges={[
              "Optimizing book search and filtering to deliver fast results for users",
              "Displaying real-time stock updates to prevent over-borrowing",
              "Prevent users from borrowing more than 3 books at a time",
            ]}
            solutions={[
              "Implemented optimized search and filtering using MongoDB aggregation pipeline",
              "Used stock calculation before confirming borrow request",
              "Implemented user borrowing tracking",
            ]}
          />
          <Modal
            modalId="my_modal_designforgee"
            image={designForgee}
            title="Design Forge"
            subtitle="Agency website clone"
            liveLink="https://design-forgee.vercel.app/"
            frontendRepo="https://github.com/ariful97768/Design-Forge"
            description="Design Forge — clone of ilmora.agency, A modern and dynamic agency website built with React and Tailwind CSS. It features a sleek, responsive design with smooth animations and interactive elements to showcase the agency's services and portfolio. A fully responsive single-page website — built to showcase modern web layout, responsiveness, and design precision understanding."
            technologies={[
              "Typescript",
              "Next.js",
              "Tailwind CSS",
              "React marquee",
            ]}
          />
          <Modal
            modalId="my_modal_lingo"
            image={lingoBingo}
            title="Lingo Bingo"
            subtitle="Learn language with fun"
            liveLink="https://lingo-bingo-f6242.web.app/"
            frontendRepo="https://github.com/ariful97768/Lingo-Bingo"
            description="Lingo Bingo is an interactive and engaging word-based game
                platform that combines the excitement of Bingo with language
                learning. Players can participate in fun and educational games,
                where they match words or phrases to improve their vocabulary.
                The website features a dynamic user interface built with React,
                with smooth animations and responsive design to enhance the user
                experience. Integrated with Firebase for user authentication and
                data management, Lingo Bingo ensures a secure and seamless
                experience."
            technologies={[
              "JavaScript",
              "React",
              "Node.js",
              "MongoDB",
              "Express.js",
              "Firebase Auth",
              "Tailwind CSS",
              "React Toastify",
            ]}
            challenges={[
              "Structuring and categorizing words or phrases for easy access.",
            ]}
            solutions={["Implemented a dynamic and user-friendly interface"]}
          />
        </div>
        <div className="flex justify-center group items-center border hover:border-[#28E98C] w-full mt-10 rounded-full">
          <Link
            className="text-white py-2 px-3 w-full flex items-center justify-center gap-2 font-semibold hover:text-[#28E98C] transition-colors duration-300"
            href="/portfolio"
          >
            View All Projects
            <ArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;

import * as motion from "motion/react-client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default function ProjectCard({
  title,
  image,
  liveLink,
  modalId,
}: {
  title: string;
  image: StaticImageData;
  liveLink: string;
  modalId: string;
}) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      transition={{ duration: 0.8 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h3 className="mb-3 ml-3 text-lg">{title}</h3>
      <div className="relative">
        <Image className="rounded-lg md:rounded-2xl lg:rounded-3xl" src={image} alt={title + " banner"} />
      </div>
      <div className="flex gap-3 ml-3 mt-3">
        <Link
          className="hover:text-green-400 transition-colors duration-300 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          href={liveLink}
        >
          Live link
        </Link>
        <label
          htmlFor={modalId}
          className="hover:text-green-400 hover:cursor-pointer transition-colors duration-300 "
        >
          View Details
        </label>
      </div>
    </motion.div>
  );
}

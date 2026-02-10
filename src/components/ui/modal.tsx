import Image from "next/image";
import { StaticImageData } from "next/image";
import Link from "next/link";

export default function Modal({
  modalId,
  image,
  title,
  subtitle,
  liveLink,
  frontendRepo,
  backendRepo,
  description,
  technologies,
  challenges,
  solutions,
}: {
  modalId: string;
  image: StaticImageData;
  title: string;
  subtitle: string;
  liveLink: string;
  frontendRepo: string;
  backendRepo?: string;
  description: string;
  technologies: string[];
  challenges?: string[];
  solutions?: string[];
}) {
  return (
    <>
      <input type="checkbox" id={modalId} className="modal-toggle" />
      <div role="dialog" id={modalId} className="modal">
        <div className="modal-box h-5/6 md:h-full md:max-h-[calc(100vh-5em)] w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12 max-w-5xl space-y-3 bg-[#1f1f1f]">
          <div>
            <Image
              className="rounded-xl mx-auto"
              src={image}
              alt={title + " Banner"}
            />
          </div>
          <h3 className="mt-5! font-bold text-xl">
            {title} - <span className="font-normal text-base">{subtitle}</span>
          </h3>
          <div className="flex gap-3">
            <Link
              className="hover:text-green-400 transition-colors duration-300 underline text-xs md:text-base"
              target="_blank"
              rel="noopener noreferrer"
              href={liveLink}
            >
              Live link
            </Link>
            <Link
              className="hover:text-green-400 transition-colors duration-300 underline text-xs md:text-base"
              target="_blank"
              href={frontendRepo}
            >
              Frontend repository
            </Link>
            {backendRepo && (
              <Link
                className="hover:text-green-400 transition-colors duration-300 underline text-xs md:text-base"
                target="_blank"
                href={backendRepo}
              >
                Backend repository
              </Link>
            )}
          </div>
          <p>{description}</p>
          <div className="flex gap-2 items-center flex-wrap">
            <p className="font-semibold">Technology used:</p>
            {technologies.map((tech, index) => (
              <span key={index} className="badge badge-outline">
                {tech}
              </span>
            ))}
          </div>
          {challenges && (
            <div>
              <p className="font-semibold">Challenges Faced:</p>
              <ul className="list-disc pl-7">
                {challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </div>
          )}
          {solutions && (
            <div>
              <p className="font-semibold">Proposed Solutions:</p>
              <ul className="list-disc pl-7">
                {solutions.map((solution, index) => (
                  <li key={index}>{solution}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="modal-action">
            <label className="btn bg-white text-black" htmlFor={modalId}>
              Close
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

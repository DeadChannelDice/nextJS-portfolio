import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import portfolioImage from "../../public/images/projects/Portfolio-Edited-01.jpeg";
import rockPaperScissorsImage from "../../public/images/projects/RockPaperScissors-edited.jpeg";
import pratumImage from "../../public/images/projects/Pratum-Edited.jpeg";
import summerReadingImage from "../../public/images/projects/SummerReading-Edited.jpeg";
import pixelSketchImage from "../../public/images/projects/PixelSketch-1280x720.jpeg";
import proteusSingleHandAttachmentImage from "../../public/images/projects/proteusSingleHandAttachment.jpeg";
import TC75MobileImage from "../../public/images/projects/TC75MobileImage.jpeg";
import TC51HolsterImage from "../../public/images/projects/TC51HolsterImage.jpeg";
import DeadChannelLogoImage from "../../public/images/projects/DeadChannelLogoImage.jpeg";
import ResumeBuilderImage from "../../public/images/projects/ResumeBuilder-Edited.jpeg";
import TulipTasksImage from "../../public/images/projects/TulipTasks.webp";
import DatsunResourceImage from "../../public/images/projects/DatsunResource-Edited.webp";
import DiceCapsuleImage from "../../public/images/projects/DiceCapsule-Edited.webp";
import TransitionEffect from "@/components/TransitionEffect";
import { motion } from "framer-motion";
import { StickerIcon } from "lucide-react";

const FramerImage = motion(Image);

const FeaturedProject = ({ title, summary, img, link, github, target }) => {
  return (
    <article className="w-full h-full flex flex-col items-center justify-between rounded-3xl  dark:bg-zinc-800 dark:border-zinc-900 shadow-lg p-4">
      <div>
        <Link
          href={link}
          target={target}
          className=" w-full cursor-pointer overflow-hidden rounded-xl drop-shadow-md pb-4"
        >
          <FramerImage
            src={img}
            alt={title}
            className="w-full h-auto rounded-xl"
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </Link>
        <div className=" flex flex-col justify-start items-start pt-4">
          <div>
            <Link
              href={link}
              target={target}
              className="hover:underline underline-offset-2"
            >
              <h2 className=" w-full text-2xl font-bold sm:text-xl md:text-xl dark:text-light">
                {title}
              </h2>
            </Link>
            <p className="py-2  text-dark dark:text-light">{summary}</p>
          </div>
        </div>
      </div>
      <div className="pt-2 flex items-center justify-start w-full">
        <Link
          href={link}
          target={target}
          className="mr-4 rounded-lg border-2 border-solid border-slate-500 hover:bg-primary/90 drop-shadow-md hover:text-light hover:border-primary dark:text-light dark:hover:text-dark  dark:border-light dark:hover:bg-primaryDark/70 dark:hover:border-primaryDark/70 p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base "
        >
          Visit Project
        </Link>
        <Link
          href={github}
          target={target}
          className="w-10 rounded-full  fill-dark  dark:fill-light"
        >
          <GithubIcon />
        </Link>
      </div>
    </article>
  );
};

const IndexProjects = () => {
  return (
    <div className="px-4">
      <AnimatedText
        text={"Featured Projects"}
        classname="pb-4 pt-16 !text-5xl md:!text-4xl sm:!text-3xl"
      />

      <div className="grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-8">
        <div className="">
          <FeaturedProject
            title={"Tulip Tasks Prioritization App"}
            summary={
              "A thoughtful full-stack React web app designed to help overwhelmed people prioritize thier goals, projects, and tasks."
            }
            link={"/tulip-tasks"}
            target={""}
            img={TulipTasksImage}
            type={"Featured Project"}
            github={"https://github.com/MikeCharpin/taskPriority"}
          />
        </div>

        <div className="">
          <FeaturedProject
            title={"Personal Portfolio Website"}
            summary={
              "This website you are on right now! Built with React, NextJS, Framer Motion and TailwindCSS"
            }
            link={"/"}
            img={portfolioImage}
            type={"Featured Project"}
            github={"https://github.com/MikeCharpin/nextJS-portfolio"}
          />
        </div>
        <div className="">
          <FeaturedProject
            title={"Resume Builder React App"}
            summary={
              "Responsive web app used to build and format a resume. Built with TypeScript, React, Vite, TailwindCSS, and Shadcn/ui"
            }
            link={"https://resume-builder-xoyp.vercel.app/"}
            target={"_blank"}
            img={ResumeBuilderImage}
            type={"Featured Project"}
            github={"https://github.com/MikeCharpin/ResumeBuilder"}
          />
        </div>
        <div className="">
          <FeaturedProject
            title={"Datsun Resource Website"}
            summary={
              "A 300+ page, fuzzy searchable, collection of historical Nissan automotive assembly information."
            }
            link={"https://datsunresource.online/"}
            target={"_blank"}
            img={DatsunResourceImage}
            type={"Featured Project"}
            github={"https://github.com/MikeCharpin"}
          />
        </div>
      </div>
      <div className=" pt-8">
        <Link
          href={"/projects"}
          className=" flex items-center justify-center rounded-lg border-2 border-solid border-slate-500 hover:bg-primary/90 drop-shadow-md hover:text-light hover:border-primary dark:text-light dark:hover:text-dark  dark:border-light dark:hover:bg-primaryDark/70 dark:hover:border-primaryDark/70 p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base "
        >
          <StickerIcon /> &nbsp; Full projects page
        </Link>
      </div>
    </div>
  );
};

export default IndexProjects;

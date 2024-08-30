import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/charpin-profile-2023.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const AboutMe = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center dark:text-light px-4">
        <AnimatedText
          text={"About me"}
          classname="pt-16 pb-4 !text-5xl md:!text-4xl sm:!text-3xl"
        />
        <div className="flex w-full xs:flex-col sm:flex-col md:flex-col gap-8 xs:items-center xs:justify-center md:items-center md:justify-center">
          <Image
            src={profilePic}
            alt="Mike Charpin"
            className="
                                w-full  lg:w-1/3 xs:w-full sm:w-full md:w-full h-auto rounded-2xl border-2 border-transparent border-solid
                                dark:border-light/90 drop-shadow-xl
                            "
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          <div className=" flex flex-col gap-4 max-w-[600px] items-center justify-center  text-justify">
            <p className="">
              I&apos;m Mike Charpin, a software developer with experience in
              industrial design as a physical product designer. I bring a strong
              background in usability-focused design having crafted a diverse
              range of products, from fitness machines and printers to tabletop
              RPG accessories and military helmets.
            </p>
            <p className="">
              My passion lies in seeing ideas come to life, refining them
              through user feedback, and ultimately making a positive impact on
              people&apos;s lives. I&apos;m known for my resourcefulness,
              tackling challenges head-on, and knowing when to seek expertise.
              My approach to problem-solving is with research, exploration,
              rapid prototyping, and a commitment to user-centered solutions.
            </p>
            <p className="">
              I aim to be a creative problem solver who delivers results while
              fostering a collaborative working environment. Whether I&apos;m
              working on a website, web app, or physical product, I bring my
              commitment to design excellence and user-centered thinking to
              every project. I look forward to the opportunity to bring my
              skills and passion to your next project.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-start w-full max-w-[1200px] py-8 ">
          <div className="flex flex-col items-center justify-center">
            <span className=" text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl align-center">
              <AnimatedNumbers value={10} />+
            </span>
            <h2
              className="
                            text-xl font-medium capitalize text-dark/75 dark:text-light 
                            xl:text-center md:text-lg sm:text-base xs:text-sm text-center
                            "
            >
              Products Launched
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center w-3/4">
            <span className=" text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
              <AnimatedNumbers value={4} />+
            </span>
            <h2
              className="
                            text-xl font-medium capitalize text-dark/75 text-right dark:text-light
                            xl:text-center md:text-lg sm:text-base xs:text-sm
                            "
            >
              Patents
            </h2>
          </div>

          <div className="flex flex-col items-center justify-center">
            <span
              className="
                             text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl
                            align-center
                            "
            >
              <AnimatedNumbers value={10} />+
            </span>
            <h2
              className="
                            text-xl font-medium text-dark dark:text-light
                            xl:text-center md:text-lg sm:text-base xs:text-sm text-center
                            "
            >
              Years of Experience
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;

import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
const FramerImage = motion(Image);
import TulipTaskSummary from "../../../public/images/tulipTasks/01-Summary.png";
import TulipTasksImportance from "../../../public/images/tulipTasks/03-Importance.png";
import TulipTasksPriority from "../../../public/images/tulipTasks/04-Priority.png";
import TulipTasksGoals from "../../../public/images/tulipTasks/05-Goals.png";
import TulipTasksProjects from "../../../public/images/tulipTasks/06-Projects.png";
import TulipTasksTasks from "../../../public/images/tulipTasks/07-Tasks.png";
import AnimatedCaption from "../AnimatedCaption";

const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const slideInLeft = {
  hidden: { x: -10, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const slideInRight = {
  hidden: { x: 10, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const TulipTasksAppImages = () => {
  return (
    <div>
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, type: "spring" }}
      >
        <AnimatedText
          text={"App Overview"}
          classname="pt-8 !text-6xl md:!text-5xl sm:!text-3xl"
        />
        <AnimatedCaption
          text={
            'The "how about list" recommends projects by the most exciting, highest complexity, and most important of both the project along with the overall goal, encouraging you to spend your time on what project aligns with your priorities and feelings.'
          }
          classname="!font-normal !text-xl md:!text-lg sm:!text-md"
        />

        <FramerImage
          src={TulipTaskSummary}
          alt={
            "Half the image is a messy desk covered in post it notes. The other half of the image is a laptop on a clean desk open to Tulip Tasks."
          }
          className="w-full h-auto  pb-16"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      <motion.div
        variants={slideInLeft}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, type: "spring" }}
      >
        <AnimatedText
          text={"Project Recommendation List"}
          classname="!text-5xl md:!text-3xl sm:!text-1xl"
        />
        <AnimatedCaption
          text={
            "Each goal's score is the sum of complexity and excitement minus double its index-based importance rank. Project scores use the same method and adds the related goal score."
          }
          classname=" !font-normal !text-xl md:!text-lg sm:!text-md"
        />
        <FramerImage
          src={TulipTasksPriority}
          alt={
            "Half the image is a messy desk covered in post it notes. The other half of the image is a laptop on a clean desk open to Tulip Tasks."
          }
          className="w-full h-auto  pb-16"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      <motion.div
        variants={slideInRight}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, type: "spring" }}
      >
        <AnimatedText
          text={"Importance Rank"}
          classname=" !text-5xl md:!text-3xl sm:!text-1xl"
        />
        <AnimatedCaption
          text={"Use the arrows to prioritize your ambitions."}
          classname=" !font-normal !text-xl md:!text-lg sm:!text-md"
        />
        <FramerImage
          src={TulipTasksImportance}
          alt={
            "Half the image is a messy desk covered in post it notes. The other half of the image is a laptop on a clean desk open to Tulip Tasks."
          }
          className="w-full h-auto  pb-16"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      <motion.div
        variants={slideInLeft}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, type: "spring" }}
      >
        <AnimatedText
          text={"Goals"}
          classname=" !text-5xl md:!text-3xl sm:!text-1xl"
        />

        <AnimatedCaption
          text={
            "Complexity and excitement metrics are entered when a goal or project is created."
          }
          classname=" !font-normal !text-xl md:!text-lg sm:!text-md"
        />

        <FramerImage
          src={TulipTasksGoals}
          alt={
            "Half the image is a messy desk covered in post it notes. The other half of the image is a laptop on a clean desk open to Tulip Tasks."
          }
          className="w-full h-auto  pb-16"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      <motion.div
        variants={slideInRight}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, type: "spring" }}
      >
        <AnimatedText
          text={"Projects"}
          classname=" !text-5xl md:!text-3xl sm:!text-1xl"
        />
        <AnimatedCaption
          text={
            "Projects are color coded to match thier parent goal as well as track the target completion date."
          }
          classname="!font-normal !text-xl md:!text-lg sm:!text-md"
        />
        <FramerImage
          src={TulipTasksProjects}
          alt={
            "Half the image is a messy desk covered in post it notes. The other half of the image is a laptop on a clean desk open to Tulip Tasks."
          }
          className="w-full h-auto  pb-16"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      <motion.div
        variants={slideInLeft}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, type: "spring" }}
      >
        <AnimatedText
          text={"Tasks"}
          classname=" !text-5xl md:!text-3xl sm:!text-1xl"
        />
        <AnimatedCaption
          text={
            "Tasks are not included in the calculations since they are intended to be finished quickly."
          }
          classname=" !font-normal !text-xl md:!text-lg sm:!text-md"
        />
        <FramerImage
          src={TulipTasksTasks}
          alt={
            "Half the image is a messy desk covered in post it notes. The other half of the image is a laptop on a clean desk open to Tulip Tasks."
          }
          className="w-full h-auto  pb-8"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </div>
  );
};

export default TulipTasksAppImages;

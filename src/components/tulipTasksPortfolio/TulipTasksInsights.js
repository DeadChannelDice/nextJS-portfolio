import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
const FramerImage = motion(Image);
import TulipTasksInterview from "../../../public/images/tulipTasks/User-Interview-01.png";

import { LucideArrowRight, LucideArrowRightLeft } from "lucide-react";

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

const TulipTasksInsights = () => {
  return (
    <div className="w-full mx-auto flex flex-col items-center justify-between py-10 px-2 rounded-xl dark:text-light ">
      <AnimatedText
        text={"User Interviews"}
        classname="pb-2 pt-16 !text-6xl md:!text-5xl sm:!text-3xl"
      />

      <FramerImage
        src={TulipTasksInterview}
        alt={
          "Screenshot of user interview conducted via video call with shared white board of users process of generating a personal todo list."
        }
        className="w-full h-auto rounded-2xl"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, type: "spring" }}
        className="mt-4 mb-8"
      >
        <div className=" bg-white bg-opacity-5 px-8 py-4 rounded-3xl">
          <h3 className="text-center text-2xl pb-2">Interview Process</h3>
          <ul className="text-xs space-y-4">
            <li>
              <strong>Current Methods:</strong> Discussed participants existing
              organization tools and techniques to understand their approach to
              task management.
            </li>
            <li>
              <strong>Task Brainstorm:</strong> Participants listed all their
              tasks and projects across various life areas.
            </li>
            <li>
              <strong>Prioritization Exercise:</strong> Asked participants to
              organize tasks by urgency, importance, excitement, and into to-do
              lists while narrating their thought process.
            </li>
            <li>
              <strong>Tool Brainstorm:</strong> Explored ideal features for an
              organizational app, addressing current method shortcomings and
              desired improvements.
            </li>
            <li>
              <strong>Analysis:</strong> Used insights from interviews to refine
              Tulip Tasks scoring system and user experience.
            </li>
          </ul>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, type: "spring" }}
        className="mt-4 mb-16 flex sm:flex-col xl:flex-row items-start justify-between gap-4 "
      >
        <div className="space-y-4 text-xs bg-white bg-opacity-5 px-2 py-4 rounded-2xl">
          <h3 className="text-center text-2xl">Creating a Todo List</h3>
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, type: "spring" }}
          >
            <div className="bg-gradient-to-r from-cyan-600 to-cyan-500 px-8 py-4 rounded-3xl">
              <p className="text-xs">
                &quot;I&apos;d like to lower the barrier to entry where instead
                of being overwhelmed by everything that I want to do.&quot;
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, type: "spring" }}
          >
            <div className="bg-gradient-to-r from-teal-500 to-teal-600 px-8 py-4 rounded-3xl text-right">
              <p className="text-xs">
                &quot;I struggle to find a starting point, so I don&apos;t do
                anything.&quot;
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, type: "spring" }}
          >
            <div className="bg-gradient-to-r from-cyan-600 to-cyan-500 px-8 py-4 rounded-3xl">
              <p className="text-xs">
                &quot;The &apos;No Zero Days&apos; mentality helped. I had that
                pinned on my phone until I started to feel guilty. So I archived
                it because I was like, &apos;I can&apos;t do this
                anymore.&apos;&quot;
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, type: "spring" }}
          >
            <div className="bg-gradient-to-r from-teal-500 to-teal-600 px-8 py-4 rounded-3xl">
              <p className="text-xs text-right">
                &quot;Give me the smallest step to do something to initiate some
                momentum. Moving the pebble turns into a boulder.&quot;
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, type: "spring" }}
          >
            <div className="bg-gradient-to-r from-cyan-600 to-cyan-500 px-8 py-4 rounded-3xl">
              <p className="text-xs">
                &quot;Not everything can be high priority.&quot;
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, type: "spring" }}
          >
            <div className="bg-gradient-to-r from-teal-500 to-teal-600 px-8 py-4 rounded-3xl">
              <p className="text-xs text-right">
                &quot;I&apos;ve got so much stuff that I want to do, but I
                can&apos;t decide, so I&apos;m not going to do any of it.&quot;
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, type: "spring" }}
          >
            <div className="bg-gradient-to-r from-cyan-600 to-cyan-500 px-8 py-4 rounded-3xl">
              <p className="text-xs">
                &quot;I guess what motivates me the most is what I&apos;m most
                excited about.&quot;
              </p>
            </div>
          </motion.div>
        </div>
        <div className="space-y-4 text-xs bg-white bg-opacity-5 px-2 py-4 rounded-2xl">
          <h3 className="text-center text-2xl">Evaluating Other Apps</h3>
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, type: "spring" }}
          >
            <div className="bg-gradient-to-r from-amber-400 to-orange-400 bg-opacity-70 px-8 py-4 rounded-3xl ">
              <p className="text-xs text-right">
                &quot;I already don&apos;t have the time or energy and this
                looks like it&apos;s going to take all day to complete&quot;
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, type: "spring" }}
          >
            <div className="bg-gradient-to-l from-amber-500 to-orange-400 px-8 py-4 rounded-3xl">
              <p className="text-xs">
                &quot;I tried a bunch of different systems and I&apos;m tired of
                getting my hopes up.&quot;
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, type: "spring" }}
          >
            <div className="bg-gradient-to-r from-amber-500 to-orange-400  px-8 py-4 rounded-3xl">
              <p className="text-xs text-right">
                &quot;Just looking at all the tabs and buttons made me feel
                overwhelmed.&quot;
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, type: "spring" }}
          >
            <div className="bg-gradient-to-l from-amber-500 to-orange-400  px-8 py-4 rounded-3xl">
              <p className="text-xs">
                &quot;The last one I tried just became a source of anxiety so I
                stopped using it.&quot;
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="pb-16 w-full">
        <AnimatedText
          text={"Creation Insights"}
          classname=" pb-4 !text-6xl md:!text-5xl sm:!text-3xl"
        />
        <div className="flex sm:flex-col sm:items-center xl:flex-row xl:items-stretch justify-between gap-4">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, type: "spring" }}
            className="bg-gradient-to-r from-teal-500 to-teal-600 px-0 py-4 rounded-3xl w-full"
          >
            <h3 className="text-center text-3xl font-bold opacity-95 pb-2">
              Considerations
            </h3>
            <div className=" flex flex-col gap-4">
              <div className="flex flex-col items-center bg-white bg-opacity-10 py-2">
                <span className="text-xl font-bold ">
                  Excitement / Fun Level
                </span>
                <div className="flex items-center">
                  <span className="text-4xl py-2">😟&nbsp;</span>{" "}
                  <LucideArrowRightLeft size={30} />{" "}
                  <span className="text-4xl py-2">&nbsp;😄</span>
                </div>
              </div>
              <div className="flex flex-col items-center ">
                <span className="text-xl font-bold">Effort Required</span>
                <div className="flex items-center">
                  <span className="text-2xl  py-2">Easy | Hard</span>
                </div>
              </div>
              <div className="flex flex-col items-center bg-white bg-opacity-10 py-2">
                <span className="text-xl font-bold">Deadline</span>
                <div className="flex items-center">
                  <span className="text-2xl py-2">Soon | Awhile</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold">Importance</span>
                <div className="flex items-center">
                  <span className="text-2xl py-2">Low | High</span>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, type: "spring" }}
            className="w-full bg-red-400 bg-opacity-70 px-0 py-4 rounded-3xl"
          >
            <h3 className="text-center text-3xl font-bold opacity-95 pb-2">
              Hinderances
            </h3>
            <div className=" flex flex-col gap-4">
              <div className="flex flex-col items-center bg-white bg-opacity-10 py-2">
                <span className="text-lg">Number of Tasks</span>
                <div className="flex items-center">
                  <span className="text-5xl py-2">😵</span>
                </div>
              </div>
              <div className="flex flex-col items-center ">
                <span className="text-lg">Low Motivation</span>
                <div className="flex items-center">
                  <span className="text-5xl py-2">😒</span>
                </div>
              </div>
              <div className="flex flex-col items-center bg-white bg-opacity-10 py-2">
                <span className="text-lg">Guilt & Shame</span>
                <div className="flex items-center">
                  <span className="text-5xl py-2">😔</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        variants={slideInRight}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, type: "spring" }}
        className="pb-16"
      >
        <div className="bg-gradient-to-r from-indigo-500 to-violet-500 px-0 py-4 rounded-3xl">
          <h3 className="text-center text-3xl font-bold opacity-95 pb-2">
            Experience
          </h3>
          <div className=" flex sm:flex-col xl:flex-row gap-4">
            <div className="flex flex-col items-center justify-center bg-white bg-opacity-10 rounded-r-2xl p-2 sm:w-full xl:w-1/3">
              <span className="text-4xl">Mindset</span>
              <div className="flex items-center">
                <span className="text-lg py-2 text-center">
                  Users required a deliberate shift between long term planning
                  and short term planning.
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center sm:w-full xl:w-1/3 p-2 ">
              <span className="text-4xl">Overwhelm</span>
              <div className="flex items-center">
                <span className="text-lg py-2 text-center">
                  Breaking down projects into granular goals could be
                  overwhelming.
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center sm:w-full xl:w-1/3 p-2 bg-white bg-opacity-10 rounded-l-2xl">
              <span className="text-4xl text-center">No Framework</span>
              <div className="flex items-center">
                <span className="text-lg py-2 text-center">
                  No distinction of scope between todos.
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div>
        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, type: "spring" }}
        >
          <div className="bg-gradient-to-r from-rose-500 to-pink-500 px-0 py-4 rounded-3xl mt-4 mb-16">
            <h3 className="text-center text-3xl font-bold opacity-95 pb-2">
              UX Goals
            </h3>
            <div className=" flex sm:flex-col xl:flex-row gap-4">
              <div className="flex flex-col items-center justify-center bg-white bg-opacity-10 rounded-r-2xl p-2 sm:w-full xl:w-1/3">
                <span className="text-4xl text-center">Low Cognitive Load</span>
                <div className="flex items-center">
                  <span className="text-lg py-2 text-center">
                    Avoid overwhelming the user with too much information or
                    options.
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center  p-2 sm:w-full xl:w-1/3">
                <span className="text-4xl text-center">Minimize Guilt</span>
                <div className="flex items-center">
                  <span className="text-lg py-2 text-center">
                    Avoid any ui/ux elements that might trigger shame in the
                    user.
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center bg-white bg-opacity-10 rounded-l-2xl p-2 sm:w-full xl:w-1/3">
                <span className="text-4xl text-center">Fun</span>
                <div className="flex items-center">
                  <span className="text-lg py-2 text-center">
                    Using that app should feel cozy rather than cold like the
                    software they use at work.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="bg-gradient-to-l from-purple-500 to-fuchsia-600 w-full py-4 px-2 rounded-3xl mt-4 mb-16">
        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, type: "spring" }}
        >
          <h3 className="text-center text-3xl font-bold pb-2">A Framework</h3>
          <div className="flex gap-2 items-stretch justify-center w-full">
            <div className="flex flex-col items-center justify-center bg-white bg-opacity-30 rounded-2xl p-4  w-1/2">
              <span className="text-xl text-center font-bold">Goals</span>
              <div className="flex items-center">
                <span className="text-sm py-2 text-center">month+</span>
              </div>
            </div>
            <LucideArrowRight
              size={50}
              className="sm:hidden xl:visable translate-y-6"
            />
            <div className="flex flex-col items-center justify-center bg-white bg-opacity-30 rounded-2xl p-4 w-1/3">
              <span className="text-xl text-cente font-bold ">Projects</span>
              <div className="flex items-center">
                <span className="text-sm py-2 text-center">day+</span>
              </div>
            </div>
            <LucideArrowRight
              size={50}
              className="sm:hidden xl:visable translate-y-6"
            />
            <div className="flex flex-col items-center justify-center bg-white bg-opacity-30 rounded-2xl p-2 w-1/4">
              <span className="text-xl text-center font-bold">Tasks</span>
              <div className="flex items-center">
                <span className="text-sm py-2 text-center">&lt; &nbsp;day</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="flex gap-4">
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, type: "spring" }}
            className="bg-gradient-to-t from-teal-500 to-teal-600  px-2 py-4 rounded-3xl border-2 border-white mt-4 w-full shadow-md"
          >
            <div>
              <h3 className="text-center text-3xl font-bold opacity-95 pb-2">
                Goal
              </h3>
              <div className="flex gap-4 items-start justify-between w-full">
                <div className="flex flex-col items-center bg-white bg-opacity-10 p-2 w-1/2 border-2 border-light rounded-xl">
                  <span className="text-xl text-center pb-2">Project</span>
                  <div className="flex flex-col items-center w-full gap-2">
                    <div className="w-full border-2  border-white rounded-lg text-center">
                      <span>Task</span>
                    </div>
                    <div className="w-full border-2  border-white rounded-lg text-center">
                      <span>Task</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center bg-white bg-opacity-10 p-2 w-1/2 border-2 border-light rounded-lg">
                  <span className="text-xl text-center pb-2">Project</span>
                  <div className="flex flex-col items-center w-full gap-2">
                    <div className="w-full border-2  border-white rounded-lg text-center">
                      <span>Task</span>
                    </div>
                    <div className="w-full border-2  border-white rounded-lg text-center">
                      <span>Task</span>
                    </div>
                    <div className="w-full border-2  border-white rounded-lg text-center">
                      <span>Task</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, type: "spring" }}
            className="bg-gradient-to-b from-cyan-600 to-cyan-500 px-2 py-4 rounded-3xl border-2 border-white mt-4 w-full sm:hidden xl:visable shadow-md"
          >
            <div>
              <h3 className="text-center text-3xl font-bold opacity-95 pb-2">
                Goal
              </h3>
              <div className="flex gap-4 items-start justify-between w-full">
                <div className="flex flex-col items-center bg-white bg-opacity-10 p-2 w-1/2 border-2 border-light rounded-xl">
                  <span className="text-xl text-center pb-2">Project</span>
                  <div className="flex flex-col items-center w-full gap-2">
                    <div className="w-full border-2  border-white rounded-lg text-center">
                      <span>Task</span>
                    </div>
                    <div className="w-full border-2  border-white rounded-lg text-center">
                      <span>Task</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center bg-white bg-opacity-10 p-2 w-1/2 border-2 border-light rounded-lg">
                  <span className="text-xl text-center pb-2">Project</span>
                  <div className="flex flex-col items-center w-full gap-2">
                    <div className="w-full border-2  border-white rounded-lg text-center">
                      <span>Task</span>
                    </div>
                    <div className="w-full border-2  border-white rounded-lg text-center">
                      <span>Task</span>
                    </div>
                    <div className="w-full border-2  border-white rounded-lg text-center">
                      <span>Task</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="w-full sm:bg-gradient-to-b 2xl:bg-gradient-to-r from-blue-500 to-red-400 bg-opacity-70 sm:px-2 2xl:px-0 py-4 rounded-3xl mt-4">
        <h3 className="text-center text-3xl font-bold pb-2">Factors</h3>
        <div className="flex flex-col items-stretch gap-4">
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, type: "spring" }}
            className="sm:w-full bg-blue-500 bg-opacity-50 2xl:px-16 2xl:py-4 sm:p-4  sm:rounded-2xl 2xl:rounded-r-2xl 2xl:w-2/3 self-start shadow-sm"
          >
            <h4 className=" text-center text-xl font-bold">Internal</h4>
            <div className="flex gap-4 items-center justify-between w-full">
              <div className="flex flex-col items-center  py-2 w-1/3">
                <span className="text-xl text-center">Excitement</span>
                <div className="flex items-center">
                  <span className="text-4xl py-2 text-center">😄</span>
                </div>
              </div>
              <div className="flex flex-col items-center ">
                <span className="text-xl text-center">Complexity</span>
                <div className="flex items-center">
                  <span className="text-4xl py-2 text-center">🚀</span>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, type: "spring" }}
            className="sm:w-full bg-red-400 bg-opacity-50 p-4 sm:rounded-2xl 2xl:rounded-l-2xl 2xl:px-16 2xl:py-4 sm:p-4 2xl:w-2/3 self-end shadow-sm"
          >
            <h4 className=" text-center font-bold text-xl">External</h4>
            <div className="flex gap-4 items-center justify-between w-full">
              <div className="flex flex-col items-center  py-2 w-1/3">
                <span className="text-xl text-center">Urgency</span>
                <div className="flex items-center">
                  <span className="text-4xl py-2 text-center">📅</span>
                </div>
              </div>
              <div className="flex flex-col items-center ">
                <span className="text-xl text-center">Importance</span>
                <div className="flex items-center">
                  <span className="text-4xl py-2 text-center">⬆️</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TulipTasksInsights;

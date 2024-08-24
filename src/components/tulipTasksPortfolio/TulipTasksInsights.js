import React from 'react';
import { motion } from 'framer-motion';
import { LucideArrowRightLeft } from 'lucide-react';

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
        <div 
        className='w-full my-8 mx-auto flex flex-col items-start justify-between border-2 border-dark/60 py-10 px-2 rounded-xl dark:text-light '
        >
            <h2 className="font-bold text-8xl mb-8 w-full text-center sm:text-6xl xs:text-4xl dark:text-light">
            Interviews & Insights
            </h2>
        
            <div className="space-y-4 text-xs bg-white bg-opacity-5 px-2 py-4 rounded-2xl">
                <h3 className="text-center text-2xl ">Creating a Todo List</h3>
                <motion.div
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, type: "spring" }}
                >
                <div className='bg-red-400 bg-opacity-70 px-8 py-4 rounded-3xl'>
                    <p className='text-xs'>
                    &quot;I&apos;d like to lower the barrier to entry where instead of being overwhelmed by everything that I want to do.&quot;
                    </p>
                </div>
                </motion.div>
                <motion.div
                variants={slideInRight}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, type: "spring" }}
                >
                <div className='bg-red-400 bg-opacity-70 px-8 py-4 rounded-3xl text-right'>
                    <p className='text-xs'>
                    &quot;I struggle to find a starting point, so I don&apos;t do anything.&quot;
                    </p>
                </div>
                </motion.div>
                <motion.div
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, type: "spring" }}
                >
                <div className='bg-red-400 bg-opacity-70 px-8 py-4 rounded-3xl'>
                    <p className='text-xs'>
                    &quot;The &apos;No Zero Days&apos; mentality helped. I had that pinned on my phone until I started to feel guilty. So I archived it because I was like, &apos;I can&apos;t do this anymore.&apos;&quot;
                    </p>
                </div>
                </motion.div>
                <motion.div
                variants={slideInRight}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, type: "spring" }}
                >
                <div className='bg-red-400 bg-opacity-70 px-8 py-4 rounded-3xl'>
                    <p className='text-xs text-right'>
                    &quot;Give me the smallest step to do something to initiate some momentum. Moving the pebble turns into a boulder.&quot;
                    </p>
                </div>
                </motion.div>
                <motion.div
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, type: "spring" }}
                >
                <div className='bg-red-400 bg-opacity-70 px-8 py-4 rounded-3xl'>
                    <p className='text-xs'>
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
                <div className='bg-red-400 bg-opacity-70 px-8 py-4 rounded-3xl'>
                    <p className='text-xs text-right'>
                    &quot;I&apos;ve got so much stuff that I want to do, but I can&apos;t decide, so I&apos;m not going to do any of it.&quot;
                    </p>
                </div>
                </motion.div>
                <motion.div
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, type: "spring" }}
                >
                <div className='bg-red-400 bg-opacity-70 px-8 py-4 rounded-3xl'>
                    <p className='text-xs'>
                    &quot;I guess what motivates me the most is what I&apos;m most excited about.&quot;
                    </p>
                </div>
                </motion.div>
            </div>

            <motion.div
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, type: "spring" }}
                className='mt-4 mb-8'
            >
                <div className='bg-red-400 bg-opacity-70 px-8 py-4 rounded-3xl'>
                <h3 className="text-center font-bold text-lg pb-2">Interview Process</h3>
                <ul className="text-xs space-y-4">
                    <li><strong>Current Methods:</strong> Discussed participants existing organization tools and techniques to understand their approach to task management.</li>
                    <li><strong>Task Brainstorm:</strong> Participants listed all their tasks and projects across various life areas.</li>
                    <li><strong>Prioritization Exercise:</strong> Asked participants to organize tasks by urgency, importance, excitement, and into to-do lists while narrating their thought process.</li>
                    <li><strong>Tool Brainstorm:</strong> Explored ideal features for an organizational app, addressing current method shortcomings and desired improvements.</li>
                    <li><strong>Analysis:</strong> Used insights from interviews to refine Tulip Tasks scoring system and user experience.</li>
                </ul>
                </div>
            </motion.div>



            <div>
                <h2 className="font-bold text-8xl mb-2 w-full text-center sm:text-6xl xs:text-4xl dark:text-light">
                Creation Insights
                </h2>
                <div className="space-y-4 text-xs">
                <motion.div
                    variants={slideInLeft}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 1, type: "spring" }}
                >
                    <div className='bg-red-400 bg-opacity-70 px-0 py-4 rounded-3xl'>
                        <h3 className="text-center text-3xl font-bold opacity-95 pb-2">Considerations</h3>
                        <div className=" flex flex-col gap-4">
                            <div className="flex flex-col items-center bg-white bg-opacity-10 py-2">
                                <span className="text-lg">Excitement / Fun Level</span>
                                <div className="flex items-center">
                                <span className="text-5xl py-2">😟&nbsp;</span>  <LucideArrowRightLeft size={50} /> <span className="text-5xl py-2">&nbsp;😄</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-center ">
                                <span className="text-lg">Effort Required</span>
                                <div className="flex items-center">
                                <span className="text-4xl py-2">Easy / Hard</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-center bg-white bg-opacity-10 py-2">
                                <span className="text-lg">Deadline</span>
                                <div className="flex items-center">
                                <span className="text-4xl py-2">Soon / Awhile</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-xl">Importance</span>
                                <div className="flex items-center">
                                <span className="text-4xl py-2">Low / High</span>
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
                >
                    <div className='bg-red-400 bg-opacity-70 px-0 py-4 rounded-3xl'>
                    <h3 className="text-center text-3xl font-bold opacity-95 pb-2">Hinderances</h3>
                    <div className=" flex flex-col gap-4">
                        <div className="flex flex-col items-center bg-white bg-opacity-10 py-2">
                            <span className="text-lg">Number of Tasks</span>
                            <div className="flex items-center">
                            <span className="text-5xl py-2">😵&nbsp;📥</span>
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
                    </div>
                </motion.div>
                <motion.div
                    variants={slideInRight}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 1, type: "spring" }}
                >
                    <div className='bg-red-400 bg-opacity-70 px-0 py-4 rounded-3xl'>
                        <h3 className="text-center text-3xl font-bold opacity-95 pb-2">Experience</h3>
                        <div className=" flex flex-col gap-4">
                            <div className="flex flex-col items-center bg-white bg-opacity-10 py-2">
                                <span className="text-4xl">Mindset</span>
                                <div className="flex items-center">
                                    <span className="text-lg py-2 text-center">Users required a deliberate shift between long term planning and short term planning.</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-center ">
                                <span className="text-4xl">Overwhelm</span>
                                <div className="flex items-center">
                                    <span className="text-lg py-2 text-center">Breaking down projects into granular goals could be overwhelming.</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-center bg-white bg-opacity-10 py-2">
                                <span className="text-4xl">No Framework</span>
                                <div className="flex items-center">
                                    <span className="text-lg py-2 text-center">No distinction of scope between todos.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
                <div>
                    <div className="space-y-4 text-xs bg-white bg-opacity-5 px-2 py-4 rounded-2xl mt-4">
                        <h3 className="text-center text-2xl">Evaluating Other Apps</h3>
                        <motion.div
                        variants={slideInRight}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 1, type: "spring" }}
                        >
                            <div className='bg-red-400 bg-opacity-70 px-8 py-4 rounded-3xl '>
                            <p className='text-xs'>
                                &quot;I already don&apos;t have the time or energy and this looks like it&apos;s going to take all day to complete&quot;
                            </p>
                            </div>
                        </motion.div>
                        <motion.div
                        variants={slideInLeft}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 1, type: "spring" }}
                        >
                        <div className='bg-red-400 bg-opacity-70 px-8 py-4 rounded-3xl'>
                            <p className='text-xs'>
                            &quot;“I tried a bunch of different systems and I&apos;m tired of getting my hopes up.”&quot;
                            </p>
                        </div>
                        </motion.div>
                        <motion.div
                        variants={slideInRight}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 1, type: "spring" }}
                        >
                            <div className='bg-red-400 bg-opacity-70 px-8 py-4 rounded-3xl'>
                                <p className='text-xs'>
                                    &quot;Just looking at all the tabs and buttons made me feel overwhelmed.&quot;
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                        variants={slideInLeft}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 1, type: "spring" }}
                        >
                        <div className='bg-red-400 bg-opacity-70 px-8 py-4 rounded-3xl'>
                            <p className='text-xs'>
                            &quot;The last one I tried just became a source of anxiety so I stopped using it.&quot;
                            </p>
                        </div>
                        </motion.div>
                    </div>

                    <motion.div
                        variants={slideInRight}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 1, type: "spring" }}
                    >
                        <div className='bg-red-400 bg-opacity-70 px-0 py-4 rounded-3xl mt-4'>
                            <h3 className="text-center text-3xl font-bold opacity-95 pb-2">UX Goals</h3>
                            <div className=" flex flex-col gap-4">
                                <div className="flex flex-col items-center bg-white bg-opacity-10 py-2">
                                    <span className="text-4xl text-center">Low Cognitive Load</span>
                                    <div className="flex items-center">
                                        <span className="text-lg py-2 text-center">Avoid overwhelming the user with too much information or options.</span>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center ">
                                    <span className="text-4xl text-center">Minimize Guilt</span>
                                    <div className="flex items-center">
                                        <span className="text-lg py-2 text-center">Avoid any ui/ux elements that might trigger shame in the user.</span>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center bg-white bg-opacity-10 py-2">
                                    <span className="text-4xl text-center">Fun</span>
                                    <div className="flex items-center">
                                        <span className="text-lg py-2 text-center">Using that app should feel cozy rather than cold like the software they use at work.</span>
                                    </div>
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

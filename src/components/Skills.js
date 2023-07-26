import React from 'react'
import {motion} from "framer-motion"


const Skill = ({name, x, y}) => {

    return (
        <motion.div 
        className="
        flex items-center justify-center rounded-full font-semibold
         bg-dark text-light py-3 px-6 shadow-dark absolute
         dark:bg-light dark:text-dark dark:shadow-light
        " 
        whileHover={{scale:1.3}}
        initial={{ x:0, y:0 }}
        whileInView={{ x:x, y:y }}
        transition={{ duration: 1.5}}
        viewport={{once: true}}
        >
            {name}
        </motion.div>
    )

}

const Skills = () => {
  return (
    <>
    <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
    <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div 
            className="
                flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark
                dark:bg-light dark:text-dark dark:shadow-light
            " whileHover={{scale:1.05}}
        >
            Web
        </motion.div>

        <Skill name="html" x="-20vw" y="2vw" />

        <Skill name="css" x="-5vw" y="-10vw" />

        <Skill name="Javascript" x="-15vw" y="-15vw" />

        <Skill name="NextJS" x="-20vw" y="12vw" />

        <Skill name="Web Design" x="20vw" y="12vw" />

        <Skill name="Tailwind CSS" x="18vw" y="-10vw" />


    </div>
    </>
  )
}

export default Skills
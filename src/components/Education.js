import React, { useRef } from 'react'
import { motion, useScroll } from "framer-motion"
import LiIcon from './LiIcon'


const Details = ({type, time, place, info}) => {
    const ref = useRef(null)
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>

            <LiIcon reference={ref}/>
            <motion.div 
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration: 1, type:"spring"}}
            >
                <h3 className='capitalize font-bold font-2xl' >{type}</h3>
                <span className='capitaize font-medium text-dark/75 dark:text-light/50'>
                    {time} | {place}
                </span>

                <p className='font-medium w-full '>
                    {info}
                </p>

            </motion.div>
        </li>
    )
}

const Education = () => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )

  return (
    <div className='my-32'>
        <h2 className="font-bold text-8xl mb-32 w-full text-center">
            Education
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative'>

        <motion.div 
                style={{scaleY: scrollYProgress}}
                className='absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-primaryDark origin-top '
            />
            <motion.div 
                style={{scaleY: scrollYProgress}}
                className='absolute left-9 top-2 w-[4px] h-full bg-transparent dark:bg-primaryDark blur dark:opacity-50 origin-top '
            />

            <ul className='w-full flex flex-col items-start justify-between ml-4'>

               <Details
                    type={"Bachelor's of Science in Industrial Design"}
                    time={"2009 - 2013"}
                    place={"Wentworth Institute of Technology"}
                    info={"Physical Product Design, User Experience Research, Design Thinking, Model Making, Visual Communication"}
               />

                <Details
                    type={"Online Coursework"}
                    time={"2020 - present"}
                    place={"LearnJavascript.online & The Odin Project"}
                    info={"HTML, CSS & Javascript Fundamentals"}
               />

            </ul>
        </div>
    </div>
  )
}

export default Education



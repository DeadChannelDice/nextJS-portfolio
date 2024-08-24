import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon'

const Details = ({month, title, description, icon}) => {
    const ref = useRef(null)
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between xs:w-[70%]'>
            <LiIcon reference={ref}/>
            <motion.div 
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration: 1, type:"spring"}}
            >
                <h3 className='capitalize font-bold font-2xl dark:text-light' >{title}&nbsp; </h3>
                <span className='capitaize font-medium text-dark/75 dark:text-light/50'>
                    {month} | {icon}
                </span>

                <p className='font-medium w-full dark:text-light '>
                    {description}
                </p>
            </motion.div>
        </li>
    )
}

const Timeline = ({timelineTitle, timelineEvents}) => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )

  return (
    <div className='mt-64'>
        <h2 className="font-bold dark:text-light text-8xl mb-8 w-full text-center  sm:text-6xl xs:text-4xl">
            {timelineTitle}
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative xs:w-full'>

            <motion.div 
                style={{scaleY: scrollYProgress}}
                className='absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-primaryDark origin-top '
            />
            <motion.div 
                style={{scaleY: scrollYProgress}}
                className='absolute left-9 top-2 w-[4px] h-full bg-transparent dark:bg-primaryDark blur dark:opacity-50 origin-top rounded-3xl '
            />

            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                {timelineEvents.map((event, index) => (
                    <Details
                        key={index}
                        month={event.month}
                        title={event.title}
                        description={event.description}
                        icon={event.icon}
                    />
                ))}
                                
            </ul>
        </div>
    </div>
  )
}

export default Timeline;

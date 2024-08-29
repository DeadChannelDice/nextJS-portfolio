import React from 'react'
import {motion} from "framer-motion"

const quote = {
    initial:{
        opacity:1,
    },
    animate:{
        opacity:1,
        y:0,
         transition:{
            duration:1
        }
    }
}

const singleWord = {
    initial:{
        opacity:0,
        y:50,
    },
    animate:{
        opacity:1,
        y:0,
        transition:{
            duration:1
        }
    }
}

const AnimatedCaption = ({text, classname=""}) => {
  return (
    <div className='w-full mx-auto flex items-centered justify-center text-center overflow-hidden sm:py-0 
    '>
        <motion.h1 className={` py-4 inline-block w-full text-dark font-normal text-xl ${classname} dark:text-light`}
        variants={quote}
        initial= "initial"
        animate= "animate"
        
        >
        {
            text.split(" ").map((word, index) => 
            <motion.span key={word+'-'+index} className='inline-block'
            variants={singleWord}

            >
                {word}&nbsp;
            </motion.span>
            )
        }
        </motion.h1>
    </div>
  )
}

export default AnimatedCaption
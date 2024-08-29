import React from 'react'
import { motion } from 'framer-motion'
import AnimatedText from '@/components/AnimatedText'

import Image from 'next/image'
const FramerImage = motion(Image)
import TulipTasksInterview from "../../../public/images/tulipTasks/User-Interview-01.png"
import TulipTasksWireFrame from "../../../public/images/tulipTasks/TulipTasks-WireFrame.png"




const TulipTasksWireframe = () => {
  return (
    <div>
        <h2 className="font-bold text-8xl pb-8 w-full text-center sm:text-6xl xs:text-4xl dark:text-light">
        User Interviews
        </h2>
        <AnimatedText text={"User Interviews"}
                classname='mb-16 sm:mb-8 !text-6xl md:!text-5xl sm:!text-3xl'
                />
        <FramerImage
            src={TulipTasksInterview}
            alt={"Half the image is a messy desk covered in post it notes. The other half of the image is a laptop on a clean desk open to Tulip Tasks."}
            className='w-full h-auto  pb-4'
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
        />
            <h2 className="font-bold text-8xl pb-8 w-full text-center sm:text-6xl xs:text-4xl dark:text-light">
        UX Wireframing
        </h2>
        <FramerImage
            src={TulipTasksWireFrame}
            alt={"Half the image is a messy desk covered in post it notes. The other half of the image is a laptop on a clean desk open to Tulip Tasks."}
            className='w-full h-auto  pb-4'
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
        />
    </div>
  )
}

export default TulipTasksWireframe

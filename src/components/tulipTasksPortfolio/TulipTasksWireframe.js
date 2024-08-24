import React from 'react'
import DesignProcess from '../ui/DesignProcess'
import TulipTasksHeroImage from '../../../public/images/tulipTasks/tulipTasks-hero-image-01.webp'




const TulipTasksWireframe = () => {
  return (
    <div>
            <h2 className="font-bold text-8xl mb-8 w-full text-center  sm:text-6xl xs:text-4xl dark:text-light ">
            Initial UI/UX
        </h2>

        <div className='flex'>
            <DesignProcess
                stage={"Brain Dump"}
                title={"This is the title"}
                description={"List every possible factor to consider when creating a task on to-do list."}
                img={TulipTasksHeroImage}
                link={"/"}
            />
            <DesignProcess
                stage={"Brain Dump"}
                title={"This is the title"}
                description={"List every possible factor to consider when creating a task on to-do list."}
                img={TulipTasksHeroImage}
                link={"/"}
            />
        </div>
    </div>
  )
}

export default TulipTasksWireframe

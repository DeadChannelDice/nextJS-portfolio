import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import TulipTasksHeroImage from '../../public/images/tulipTasks/tulipTasks-hero-image-01.webp'
import TransitionEffect from '@/components/TransitionEffect'
import { motion } from 'framer-motion'
import Timeline from '@/components/Timeline'
import { Shapes } from 'lucide-react'
import TulipTasksInsights from '@/components/tulipTasksPortfolio/TulipTasksInsights'
import TulipTasksWireframe from '../components/tulipTasksPortfolio/TulipTasksWireframe'



const FramerImage = motion(Image)


const FeaturedProject =( {type, title, summary, img, link, github} ) => {
    return (
        <article className='w-full flex items-center justify-between rounded-3xl rounded-br-2xl border-2 border-solid border-slate-200 bg-slate-100 dark:bg-zinc-800 dark:border-zinc-900 shadow-xl p-12 relative lg:flex-col lg:p-8 xs:rounded-2xl xs:p-4 '>
            
            <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full drop-shadow-md'>
                <FramerImage src={img} alt={title} 
                    className='w-full h-auto'
                    priority={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    whileHover={{scale:1.05}}
                    transition={{duration:0.3}}
                />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl xs:text-base'>{type}</span>
                <Link href={link}  target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold sm:text-xl dark:text-light'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={link} target='_blank' className='mr-4 rounded-lg border-2 border-solid border-slate-500 hover:bg-primary/90 drop-shadow-md hover:text-light hover:border-primary dark:text-light dark:hover:text-dark  dark:border-light dark:hover:bg-primaryDark/70 dark:hover:border-primaryDark/70 p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base '>Visit Project</Link>
                    <Link href={github} target='_blank' className='w-10 rounded-full  fill-dark  dark:fill-light'> <GithubIcon/> </Link>
                </div>
            </div>
        </article>
    )
}

const FeaturedIDProject =( {type, title, summary, img, link} ) => {
    return (
        <article className='w-full flex items-center justify-between rounded-3xl rounded-br-2xl border-2 border-solid border-slate-200 bg-slate-100 dark:bg-zinc-800 dark:border-zinc-900 shadow-xl p-12 relative lg:flex-col lg:p-8 xs:rounded-2xl xs:p-4 '>
            
            <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full drop-shadow-md'>
                <FramerImage src={img} alt={title} 
                    className='w-full h-auto'
                    priority={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    whileHover={{scale:1.05}}
                    transition={{duration:0.3}}
                />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl xs:text-base'>{type}</span>
                <Link href={link}  target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold sm:text-xl dark:text-light'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={link} target='_blank' className='mr-4 rounded-lg border-2 border-solid border-slate-500 hover:bg-primary/90 drop-shadow-md hover:text-light hover:border-primary dark:text-light dark:hover:text-dark  dark:border-light dark:hover:bg-primaryDark/70 dark:hover:border-primaryDark/70 p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base '>Visit Project</Link>
                    
                </div>
            </div>
        </article>
    )
}

const MinorProject = ({title, type, img, link, github}) => {
    return (
        <article className='
        w-full h-full flex flex-col justify-between rounded-3xl 
        border-2 border-solid border-slate-200 bg-slate-100 dark:bg-zinc-800 dark:border-zinc-900  shadow-xl p-12 relative lg:p-8 xs:p-4'>
            
            <div>
                <Link href={link} target='_blank' className='w-full h-auto cursor-pointer overflow-hidden rounded-lg drop-shadow-md'>
                    <FramerImage src={img} alt={title}
                    className='w-full h-auto'
                    whileHover={{scale:1.05}}
                    transition={{duration:0.3}}/>
                </Link>
                <div className='w-full  flex flex-col items-start justify-between pt-2'>
                    <span className='text-primary dark:text-primaryDark font-medium text-xl sm:text-base'>{type}</span>
                    <Link href={link}  target="_blank" className='hover:underline underline-offset-2 h-full'>
                        <h2 className='w-full h-full my-2 text-left text-3xl font-bold dark:text-light sm:text-xl '>{title}</h2>
                    </Link>
                </div>
            </div>
            <div className='w-full mt-2 flex items-end justify-start'>
                    <Link href={link} target='_blank' className='mr-4 rounded-lg border-2 border-solid border-slate-500 hover:bg-primary/90 drop-shadow-md hover:text-light hover:border-primary dark:text-light dark:hover:text-dark  dark:border-light dark:hover:bg-primaryDark/70 dark:hover:border-primaryDark/70 p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base'>Visit</Link>
                    <Link href={github} target='_blank' className='w-10 rounded-full  fill-dark  dark:fill-light'> <GithubIcon /> </Link>
                    
                </div>
        </article>
    )
}

const MinorIDProject = ({title, type, img, link}) => {
    return (
        <article className='
        w-full h-full flex flex-col justify-between rounded-3xl 
        border-2 border-solid border-slate-200 bg-slate-100 dark:bg-zinc-800 dark:border-zinc-900  shadow-xl p-12 relative lg:p-8 xs:p-4'>
            
            <div>
                <Link href={link} target='_blank' className='w-full h-auto cursor-pointer overflow-hidden rounded-lg drop-shadow-md'>
                    <FramerImage src={img} alt={title}
                    className='w-full h-auto'
                    whileHover={{scale:1.05}}
                    transition={{duration:0.3}}/>
                </Link>
                <div className='w-full  flex flex-col items-start justify-between pt-2'>
                    <span className='text-primary dark:text-primaryDark font-medium text-xl sm:text-base'>{type}</span>
                    <Link href={link}  target="_blank" className='hover:underline underline-offset-2 h-full'>
                        <h2 className='w-full h-full my-2 text-left text-3xl font-bold dark:text-light sm:text-xl '>{title}</h2>
                    </Link>
                </div>
            </div>
            <div className='w-full mt-2 flex items-end justify-start'>
                    <Link href={link} target='_blank' className='mr-4 rounded-lg border-2 border-solid border-slate-500 hover:bg-primary/90 drop-shadow-md hover:text-light hover:border-primary dark:text-light dark:hover:text-dark  dark:border-light dark:hover:bg-primaryDark/70 dark:hover:border-primaryDark/70 p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base'>Visit</Link>                    
                </div>
        </article>
    )
}


const TulipTasks= () => {
  return (
    <>
    <Head>
        <title>Tulip Tasks</title>
        <meta name="description" content="Mike Charpin Portfolio" />
    </Head>
    <TransitionEffect/>
    <main className='flex w-full flex-col items-center justify-center'>
        <Layout className='pt-16'>
            <AnimatedText text={"Tulip Tasks"}
            classname='mb-16 sm:mb-8 !text-6xl md:!text-5xl sm:!text-3xl'
            />
             <FramerImage 
                src={TulipTasksHeroImage} 
                alt={"Half the image is a messy desk covered in post it notes. The other half of the image is a laptop on a clean desk open to Tulip Tasks."} 
                className='w-full h-auto rounded-2xl'
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
            />
            <Timeline
                timelineTitle={"Project Timeline"}
                timelineEvents={[
                    {
                        month: "October 2023",
                        title: "Initial UI/UX Design",
                        description: "Started designing the initial UI and UX for Tulip Tasks.",
                        icon: <Shapes className="text-primary dark:text-primaryDark" />
                    },
                    {
                        month: "November - December 2023",
                        title: "Technical Discovery Phase",
                        description: "Learned React, TypeScript, and determined the tech stack. Conducted user discovery interviews and built a practice React project (Resume Builder) to solidify understanding.",
                        icon: <Shapes className="text-primary dark:text-primaryDark" />
                    },
                    {
                        month: "January 2024",
                        title: "Front-End Development",
                        description: "Began front-end development using React, TailwindCSS, and Shadcn. Continued refining the UI/UX.",
                        icon: <Shapes className="text-primary dark:text-primaryDark" />
                    },
                    {
                        month: "February 2024",
                        title: "Back-End Development",
                        description: "Started building the back-end with Supabase and SQL for live data and authentication.",
                        icon: <Shapes className="text-primary dark:text-primaryDark" />
                    },
                    {
                        month: "March 2024",
                        title: "Launch & Feedback",
                        description: "Launched the app, collected feedback, and fixed bugs.",
                        icon: <Shapes className="text-primary dark:text-primaryDark" />
                    }
                ]}
            />

            <TulipTasksWireframe />

            <TulipTasksInsights />

            

        </Layout>
    </main>
    
    
    </>


    
  )
}

export default TulipTasks
import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import cryptoProjectImage from "../../public/images/projects/crypto-screener-cover-image.jpg"
import portfolioImage from "../../public/images/projects/Portfolio-Edited.JPG"
import rockPaperScissorsImage from "../../public/images/projects/RockPaperScissors-edited.JPG"
import pratumImage from "../../public/images/projects/Pratum-Edited.JPG"
import summerReadingImage from "../../public/images/projects/SummerReading-Edited.JPG"
import pixelSketchImage from "../../public/images/projects/PixelSketch-1280x720.jpeg"
import proteusSingleHandAttachmentImage from "../../public/images/projects/proteusSingleHandAttachment.jpeg"
import TC75MobileImage from "../../public/images/projects/TC75MobileImage.jpeg"
import TC51HolsterImage from "../../public/images/projects/TC51HolsterImage.jpeg"
import DeadChannelLogoImage from "../../public/images/projects/DeadChannelLogoImage.jpeg"
import TransitionEffect from '@/components/TransitionEffect'
import { motion } from 'framer-motion'

const FramerImage = motion(Image)


const FeaturedProject =( {type, title, summary, img, link, github} ) => {
    return (
        <article className='w-full flex items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light shadow-2xl p-12 relative lg:flex-col'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl' />
            <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} 
                    className='w-full h-auto'
                    priority={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    whileHover={{scale:1.05}}
                    transition={{duration:0.3}}
                />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                <span className='text-primary font-medium text-xl'>{type}</span>
                <Link href={link}  target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={link} target='_blank' className='mr-4 rounded-lg border border-solid border-dark hover:bg-dark hover:text-light p-2 px-6 text-lg font-semibold'>Visit Project</Link>
                    <Link href={{github}} target='_blank' className='w-10'> <GithubIcon/> </Link>
                </div>
            </div>
        </article>
    )
}

const FeaturedIDProject =( {type, title, summary, img, link} ) => {
    return (
        <article className='w-full flex items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light shadow-2xl p-12 relative lg:flex-col'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl' />
            <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} 
                    className='w-full h-auto'
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    whileHover={{scale:1.05}}
                    transition={{duration:0.3}}
                />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                <span className='text-primary font-medium text-xl'>{type}</span>
                <Link href={link}  target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={link} target='_blank' className='mr-4 rounded-lg border border-solid border-dark hover:bg-dark hover:text-light p-2 px-6 text-lg font-semibold'>Visit Project</Link>
                </div>
            </div>
        </article>
    )
}

const MinorProject = ({title, type, img, link, github}) => {
    return (
        <article className='w-full flex flex-col items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light shadow-2xl p-12 relative'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl' />
            <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} 
                className='w-full h-auto rounded-lg'
                whileHover={{scale:1.05}}
                transition={{duration:0.3}}/>
            </Link>
            <div className='w-full flex flex-col items-start justify-between'>
                <span className='text-primary font-medium text-xl'>{type}</span>
                <Link href={link}  target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='w-full my-2 text-left text-3xl font-bold'>{title}</h2>
                </Link>
                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link} target='_blank' className='
                    rounded-lg border border-solid border-dark p-1 px-4 text-lg font-semibold
                    hover:bg-dark hover:text-light hover:font-semibold
                    '>Visit</Link>
                    <Link href={github} target='_blank' className='w-10'> <GithubIcon /> </Link>
                    
                </div>
            </div>
        </article>
    )
}

const MinorIDProject = ({title, type, img, link}) => {
    return (
        <article className='w-full flex flex-col items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light shadow-2xl p-12 relative'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl' />
            <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
            <FramerImage src={img} alt={title} 
                    className='w-full h-auto'
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    whileHover={{scale:1.05}}
                    transition={{duration:0.3}}
                />
            </Link>
            <div className='w-full flex flex-col items-start justify-between'>
                <span className='text-primary font-medium text-xl'>{type}</span>
                <Link href={link}  target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='w-full my-2 text-left text-3xl font-bold'>{title}</h2>
                </Link>
                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link} target='_blank' className='
                    rounded-lg border border-solid border-dark p-1 px-4 text-lg font-semibold
                    hover:bg-dark hover:text-light hover:font-semibold
                    '>Visit</Link>                 
                </div>
            </div>
        </article>
    )
}







const projects = () => {
  return (
    <>
    <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
    </Head>
    <TransitionEffect/>
    <main className='flex w-full flex-col items-center justify-center'>
        <Layout className='pt-16'>
            <AnimatedText text={"Web Development"}
            classname='mb-16 !text-6xl md:!text-5xl sm:!text-3xl'
            />
                
                <div className='grid grid-col-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                    <div className='col-span-12'>
                        <FeaturedProject
                        title={"Personal Portfolio Website"}
                        summary={"This website you are on right now! Built with React, NextJS, and TailwindCSS"}
                        link={"https://MichaelCharpin.com"}
                        img={portfolioImage} 
                        type={"Featured Project"}
                        github={"https://github.com/DeadChannelDice/nextJS-portfolio"}            
                        />
                    </div>
                    <div className='col-span-12'>
                    <FeaturedProject
                        title={"Food Tracking App"}
                        summary={"A feature-rich Food Tracking App using Vanilla Javascript, chart.js, and Firebase. It shows details regarding the food you consumed, tracking your macro nutrient intake."}
                        link={"https://deadchanneldice.github.io/food-tracker/"}
                        img={cryptoProjectImage} 
                        type={"Featured Project"}
                        github={"https://github.com/DeadChannelDice/food-tracker"}            
                        />
                    </div>
                    <div className="col-span-6">
                    <MinorProject
                        title={"Rock Paper Scissors"}
                        link={"https://deadchanneldice.github.io/RPS/"}
                        img={rockPaperScissorsImage} 
                        type={"Portfolio Website"}
                        github={"https://github.com/DeadChannelDice/RPS"}            
                        />
                    </div>
                    <div className="col-span-6">
                    <MinorProject
                        title={"Book Tracking"}
                        link={"/"}
                        img={summerReadingImage} 
                        type={"Portfolio Website"}
                        github={"https://github.com/DeadChannelDice/library-app"}            
                        />
                    </div>
                    <div className="col-span-6">
                    <MinorProject
                        title={"Landscaping Company"}
                        link={"https://deadchanneldice.github.io/Pratum-Landscapes/"}
                        img={pratumImage} 
                        type={"Portfolio Website"}
                        github={"https://github.com/DeadChannelDice/Pratum-Landscapes"}            
                        />
                    </div>
                    <div className="col-span-6">
                    <MinorProject
                        title={"Pixel Art Drawing"}
                        link={"https://deadchanneldice.github.io/Pixel-Sketch/"}
                        img={pixelSketchImage} 
                        type={"Portfolio Website"}
                        github={"https://github.com/DeadChannelDice/Pixel-Sketch"}            
                        />
                    </div>
                    

                </div>

                <AnimatedText text={"Industrial Design"}
                    classname='mb-16 mt-16'
                />
                 <div className='grid grid-col-12 gap-24 gap-y-32'>
                    <div className='col-span-12'>
                        <FeaturedIDProject
                        title={"Fitness Machine Attachment"}
                        summary={"Single hand attachment for the Proteus system, a fitness machine that incorporates robotics."}
                        link={"https://www.behance.net/gallery/177955717/Proteus-Single-Hand-Attachment"}
                        img={proteusSingleHandAttachmentImage} 
                        type={"Proteus Motion"}            
                        />
                    </div>

                    <div className="col-span-6">
                    <MinorIDProject
                        title={"Smart Device Accessory"}
                        link={"https://www.behance.net/gallery/124182657/TC75-Mobile-Dimensioning-Attachment"}
                        img={TC75MobileImage} 
                        type={"Zebra Technologies"}          
                        />
                    </div>

                    <div className="col-span-6">
                    <MinorIDProject
                        title={"Smart Device Accessory"}
                        link={"https://www.behance.net/gallery/124176483/TC51TC56-Holster-for-Zebra-Technologies"}
                        img={TC51HolsterImage} 
                        type={"Zebra Technologies"}          
                        />
                    </div>

                    <div className="col-span-6">
                    <MinorIDProject
                        title={"Brand Logo"}
                        link={"https://www.behance.net/gallery/177960873/Dead-Channel-Logo"}
                        img={DeadChannelLogoImage} 
                        type={"Dead Channel"}          
                        />
                    </div>
                </div>
        </Layout>
    </main>
    
    
    </>


    
  )
}

export default projects
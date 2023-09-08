import React from 'react'
import Layout from './Layout'
import Link from 'next/link'


const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-darkfont
    font-medium text-lg dark:text-light sm:test-base'>
        <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex items-center lg:py-2'>
            Built by&nbsp;
            <Link 
              href="https://github.com/DeadChannelDice" 
              target={"_blank"} 
              className='underline underline-offset-2
            '> Mike Charpin</Link>
            <span className='text-primary dark:text-primaryDark text-2xl px-1'>&#129497;</span>
            </div>
            
            <Link href="https://github.com/DeadChannelDice"> Say hello</Link>
        </Layout>
    </footer>
  )
}

export default Footer
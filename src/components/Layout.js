import React from 'react'

const Layout = ({children, className=""}) => {
  return (
    <div 
    className={`
    w-full h-full inline-block z-0 bg-light p-96 dark:bg-dark 2xl:p-32 xl:p-24 lg:p-16 md:p-12 sm:p-4 ${className}
    `}>
        {children}
    </div>
  )
}

//px-32 xl:p-32 lg:p-16 md:p-12 sm:p-8 xs:p-8 2xl:px-64 px-64

export default Layout
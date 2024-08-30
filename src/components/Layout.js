import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <div
      className={`
      w-full max-w-[1200px] h-full inline-block mx-auto z-0 bg-light px-4 py-16 dark:bg-dark  ${className}
      `}
    >
      {children}
    </div>
  );
};

//px-32 xl:p-32 lg:p-16 md:p-12 sm:p-8 xs:p-8 2xl:px-64 px-64

export default Layout;

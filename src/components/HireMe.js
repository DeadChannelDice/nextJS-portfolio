import React from "react";
import { CircularTextSoftware } from "./Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div
      className="fixed left-4 bottom-4
    flex items-center justify-center overflow-hidden
    md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute
    "
    >
      <div className="w-48 h-auto flex items-center justify-center relative md:w-24">
        <CircularTextSoftware
          className={"fill-dark animate-reverse-spin dark:fill-light"}
        />

        <Link
          href="mailto:Michael.Charpin@gmail.com"
          className="
                flex items-center justify-center
                absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                bg-dark text-light shadow-md border-2 border-solid border-dark w-20 h-20 rounded-full font-semibold
                hover:bg-light hover:text-dark
                dark:border-light
                md:w-12 md:h-12 md:text-[10px] text-center
              "
        >
          Hire me&#129497;
        </Link>
      </div>
    </div>
  );
};

export default HireMe;

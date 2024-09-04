import React from "react";
import { VisitTulipTasksCircle } from "../Icons";
import Link from "next/link";

const VisitTulipTasksLink = () => {
  return (
    <div
      className=" fixed right-4 bottom-4
    flex items-center justify-center overflow-hidden
    md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute
    "
    >
      <div className="w-40 h-auto flex items-center justify-center relative md:w-24">
        <VisitTulipTasksCircle
          className={"fill-dark animate-reverse-spin dark:fill-light"}
        />

        <Link
          href="https://task-priority.vercel.app/"
          target="_blank"
          className="
                flex items-center justify-center
                absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                bg-dark text-light shadow-md border-2 border-solid border-dark w-20 h-20 rounded-full font-semibold
                hover:bg-light hover:text-dark
                dark:border-light
                md:w-12 md:h-12 md:text-[10px] text-center text-4xl
              "
        >
          &#x1f337;
        </Link>
      </div>
    </div>
  );
};

export default VisitTulipTasksLink;

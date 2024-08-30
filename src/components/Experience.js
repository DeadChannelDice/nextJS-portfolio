import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between xs:w-[70%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <h3 className="capitalize font-bold font-2xl">{position}&nbsp; </h3>
        <h3>
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize "
          >
            @&nbsp;{company}
          </a>
        </h3>
        <span className="capitaize font-medium text-dark/75 dark:text-light/50">
          {time} | {address}
        </span>

        <p className="font-medium w-full ">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="pt-8">
      <h2 className="font-bold text-8xl mb-8 w-full text-center  sm:text-6xl xs:text-4xl">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative xs:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-primaryDark origin-top "
        />
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-2 w-[4px] h-full bg-transparent dark:bg-primaryDark blur dark:opacity-50 origin-top rounded-3xl "
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position={"Owner, Developer, Designer"}
            company={"Michael Charpin Design"}
            companyLink={"https://www.MichaelCharpin.com"}
            time={"2022 - current"}
            address={"Brooklyn, NY"}
            work={
              "Lead the development of tailored software solutions, transforming client visions into innovative digital products. By combining technical expertise with a deep understanding of user needs, I aspire to consistently deliver impactful results that exceed client expectations"
            }
          />
          <Details
            position={"Project Manager"}
            company={"Miniature World"}
            companyLink={"https://www.BigMiniWorld.com"}
            time={"2022 - 2023"}
            address={"Staten Island, NY"}
            work={
              "Collaborating with a team of 40 model makers we crafted an extensive model train exhibit with detailed replicas of various global regions. Additionally, I optimized resource allocation, simplified project scopes to manage risks, and contributed to captivating mechanical animations."
            }
          />

          <Details
            position={"General Manager"}
            company={"Union Garage"}
            companyLink={"https://uniongaragenyc.com/"}
            time={"2020 - 2022"}
            address={"Brooklyn, NY"}
            work={
              "Established clear guidelines for customer interactions and inventory management, boosting our sales team's confidence and our reputation as a trusted motorcycle safety gear retailer. I also enhanced order accuracy, synchronized our inventory systems, and managed the relocation of our inventory from Brooklyn to Bridgeport."
            }
          />

          <Details
            position={"Senior Industrial Designer"}
            company={"Proteus Motion"}
            companyLink={"https://proteusmotion.com/"}
            time={"2017 - 2020"}
            address={"Long Island City, NY"}
            work={
              "I played a key role in fast-tracking handle prototypes to showcase the Proteus fitness machine's potential to investors. I oversaw the entire product life cycle and contributed to 6 patent applications, solidifying our technological leadership."
            }
          />

          <Details
            position={"Junior Industrial Desginer"}
            company={"Zebra Technologies"}
            companyLink={"https://www.Zebra.com"}
            time={"2015 - 2017"}
            address={"Holtsville, NY"}
            work={
              "Contriburted to the design of accessories for barcode scanners, mobile touch computers, and ID printers, utilizing human factors research. My role involved on-site and remote work, color analysis, and incorporating feedback from senior designers, demonstrating adaptability and a commitment to design enhancement."
            }
          />

          <Details
            position={"Mechanical Drafter"}
            company={"Gentex Corp."}
            companyLink={"https://www.GentexCorp.com"}
            time={"2013 - 2015"}
            address={"Boston, MA"}
            work={
              "Developed a robust product control system, and created comprehensive technical documentation for both existing products and products in development. "
            }
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;

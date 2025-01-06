import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Web Developer Intern"
            subTitle="R3 Systems India Private Limited (July 2023 - August 2023)"
            result="Shirpur, Maharashtra"
            />
          <ResumeCard
            title="Java Full Stack Developer"
            subTitle="Wipro TalentNext Program"
            result="Shirpur, Maharashtra"
          />
          <ResumeCard
            title="Zensar ESD Program"
            subTitle="Zensar Technologies with RPG Foundation"
            result="Shirpur, Maharashtra"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;

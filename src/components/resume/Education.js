import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor of Technology in Computer Engineering"
            subTitle="R C Patel Institute of Technology, Shirpur(2021-2025)"
            result="7.47/10"
          />
          <ResumeCard
            title="HSC (Science)"
            subTitle="R C Patel Higher Secondary and Junior College, Shirpur (2019-2021)"
            result="83.20 %"
            />
          <ResumeCard
            title="SSC (Class 10)"
            subTitle="R C Patel Secondary School, Shirpur (2014 - 2019)"
            result="87.20 %"
            />
        </div>
      </div>
      {/* part Two */}
    </motion.div>
  );
};

export default Education;

import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Goethe German ALTE Zertificate – A1"
            subTitle="Goethe Institute"
            result="Success"
            />
          <ResumeCard
            title="Full Stack Developer"
            subTitle="Infosys SpringBoard"
            result="Success"
          />
         <ResumeCard
         title="Associate Android Developer"
         subTitle="Google"
         result="Success"
         />
        </div>
      </div>
      
    </motion.div>
  );
};

export default Achievement;

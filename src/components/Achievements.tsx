import React from "react";
import { motion } from "framer-motion";
// import { SectionWrapper } from "../hoc";
// import { fadeIn, textVariant } from "../utils/motion";
import { achievements } from "../constants/index";

const Achievements: React.FC = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className="bg-tertiary rounded-2xl sm:px-16 px-6 sm:py-16 py-10"
      >
        <motion.div variants={textVariant()}>
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Some Glimpses on...</p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Achievements.</h2>
        </motion.div>
      </div>
      <div className="-mt-20 justify-center p-6 sm:px-4 px-6 gap-7">
        <ul className='mt-5 list-disc ml-5 space-y-2'>
          {achievements.map((achievement) => (
            <li key={achievement.id} className='text-white-100 text-[15px] pl-1'>{achievement.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// export default SectionWrapper(Achievements, "");

// TODO -> remove it
export default Achievements;

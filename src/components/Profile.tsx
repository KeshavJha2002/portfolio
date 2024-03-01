import React from "react";

import SectionWrapper from "../hoc/SectionWrapper";
import { profiles } from "../constants";
import { textVariant } from "../utils/motion";
import { motion, Variants } from "framer-motion";

const Profile:React.FC = () => {
  return (
    <>
      <motion.div id="tech" variants={textVariant(200) as Variants}>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
          Profile Section
        </h2>
      </motion.div>
    <div className='flex flex-wrap items-center justify-center text-center mt-[30px]'>
      {profiles.map((profile) => (
        <div className="flex flex-col justify-center items-center my-0 mx-[15px] hover:transform hover:scale-110" data-aos="fade-up" data-aos-delay="200">
        <div className="w-[70px] h-[70px] flex mb-[2rem] transition-all duration-1000 ease">
          <a href={profile.link} target="_blank" className="overflow:hidden">
            <img src={profile.icon} className="w-[70px] h-[70px]"/>
          </a>
        </div>
      </div>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Profile, "");
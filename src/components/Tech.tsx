import React from "react";

import { BallCanvas } from "./canvas";
import SectionWrapper from "../hoc/SectionWrapper";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { motion, Variants } from "framer-motion";

// TODO -> check the delay passed to the textVariant() and make updates in all the components that are using it

const Tech:React.FC = () => {
  return (
    <>
      <motion.div id="tech" variants={textVariant(200) as Variants}>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center" >
          Tools
        </h2>
      </motion.div>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div style={{height: '5rem', width: "5rem"}} key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { init } from "ityped";
import { AiOutlineGithub } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
// TODO -> add a personal picture for profile
// import { personal_pic } from "../assets";
// import { ComputersCanvas } from "./canvas";

const HeroSection: React.FC = () => {
  const textRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (textRef.current) {
      init(textRef.current, {
        showCursor: true,
        strings: [
          "SDE intern at BNY Mellon",
          "Tech Enthusiast",
          "Chess Lover",
          "Reader"
        ],
      });
    }
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="flex">
        <div
          className="top-[80px] absolute max-w-7xl mx-auto sm:px-4 px-6 flex flex-row items-start gap-5"
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div className="leading-[95px] width5:leading-[70px]">
            <h1 className="font-black text-white lg:text-[80px] sm:text-[50px] xs:text-[40px] text-[40px] mt-2">
              Hii there, I'm <p className="name text-[#915EFF]">Keshav Jha</p>
            </h1>
            <h3>
              <span ref={textRef} className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] mt-2 green-text-gradient"></span>
            </h3>
            {/* TODO -> add links */}
            <div className="absolute leading-[40px] flex z-[2] gap-[0.8rem] rounded-[3rem] bg-[#0000004D] w-[max-content]">
              <a href="#" target="_blank" rel="noopener noreferrer" className="p-[0.9rem] bg-transparent rounded-[50%] flex text-[2rem] text-white" >
                <AiOutlineGithub />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="p-[0.9rem] bg-transparent rounded-[50%] flex text-[2rem] text-white">
                <ImLinkedin />
              </a>
              {/* TODO -> add link to other platforms */}
              {/* <a href="#" target="_blank" rel="noopener noreferrer">

              </a> */}
            </div>
          </div>
        </div>
        {/* TODO -> check for media queries */}
        <div className="width4:w-[200px] width4:h-[200px] width4:right-[5px] width3:none right-[4rem] w-[300px] h-[300px] flex items-center justify-center top-[6rem]  absolute violet-gradient">
          {/* TODO -> add picture */}
          {/* <img src={_____} alt="" className="object-contain h-[90%] rounded-[45%]" /> */}
        </div>
      </div>
      {/* <ComputersCanvas /> */}
      <div className="absolute xs:bottom-10 bottom-32 w-10 flex justify-end items-center">
        <a href="#education">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

// TODO -> check for media queries 
// TODO -> add picture
// TODO -> add link to other platforms
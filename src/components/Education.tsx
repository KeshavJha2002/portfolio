import React from "react";
import { motion, Variants } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";
import { educations } from "../constants/index";

interface EducationProps {}

interface FeedbackCardProps {
  index: number;
  branch: string;
  marks: string;
  name: string;
  degree: string;
  year: string;
  image: string;
}

// TODO -> check for the ideal fadeIn direction in line-31

const FeedbackCard: React.FC<FeedbackCardProps> = ({
  index,
  branch,
  marks,
  name,
  degree,
  year,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75) as Variants}
    className="Box2 p-5 rounded-3xl xs:w-[320px] w-full"
  >
    <div className="mt-7 flex flex-col justify-between items-center gap-1">
      <img
        src={image}
        alt={`feedback_by-${name}`}
        width="80"
        height="80"
        className="rounded-full object-cover"
      />
      <div className="mt-3 flex-1 flex flex-col">
        <p className="text-center text-white font-medium text-[16px]">
          <span className="text-center blue-text-gradient">{name}</span>
        </p>
        <p className="text-center mt-1 text-secondary text-[12px]">{year}</p>
      </div>
    </div>
    <p className="text-white font-black text-[48px]">"</p>
    <div className="mt-1">
      <p className="text-center text-white tracking-wider text-[18px]">
        {degree}
      </p>
      <p className="mt-3 text-center pink-text-gradient">{branch}</p>
      <p className="mt-3 text-center green-text-gradient">{marks}</p>
    </div>
  </motion.div>
);

const Education: React.FC<EducationProps> = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className="bg-tertiary rounded-2xl sm:px-16 px-6 sm:py-16 py-10 min-h-[300px]"
      >
        <motion.div variants={textVariant(200) as  Variants}>
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Education Details...</p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Education.</h2>
        </motion.div>
      </div>
      <div className="-mt-20 justify-center pb-14 sm:px-4 px-6 flex flex-wrap gap-7">
        {educations.map((education, index) => (
          <FeedbackCard key={education.name} index={index} {...education} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Education, "education");

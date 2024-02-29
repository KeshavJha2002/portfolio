import React,{ useState } from "react";
import { HashLink } from 'react-router-hash-link'
import { AiOutlineHome, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { MdMessage } from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs";

// TODO -> fix the size of the bar, it is too small right now 

const Content: React.FC = () => {
  const [activeNav, setActiveNav] = useState<string>("#");
  return (
    <div className="z-2 fixed left-[50%] bg-[#0000004d] py-[0.7rem] px-[1.7rem] bottom-[1rem] flex flex-row gap-[0.8rem] rounded-[3rem] nav">
      <HashLink
        smooth
        to="#"
        onClick={() => setActiveNav("#")}
        className={`${activeNav === "#" ? "active" : ""} hover:bg-[#0000004d] bg-transparent p-[0.9rem] rounded -[50%] flex text-[1.1rem] active:text-white text-[#FFF]`}
      >
        <AiOutlineHome />
      </HashLink>
      <HashLink
        smooth
        to="#education"
        onClick={() => setActiveNav("#education")}
        className={`${activeNav === "#education" ? "active" : ""} hover:bg-[#0000004d] bg-transparent p-[0.9rem] rounded-[50%] flex text-[1.1rem] active:text-white text-[#FFFFFF80]`}
      >
        <BiBook />
      </HashLink>
      <HashLink
        smooth
        to="#project"
        onClick={() => setActiveNav("#project")}
        className={`${activeNav === "#project" ? "active" : ""} hover:bg-[#0000004d] bg-transparent p-[0.9rem] rounded-[50%] flex text-[1.1rem] active:text-white text-[#FFFFFF80]`}
      >
        <AiOutlineFundProjectionScreen />
      </HashLink>
      <HashLink
        smooth
        to="#experience"
        onClick={() => setActiveNav("#experience")}
        className={`${activeNav === "#experience" ? "active" : ""} hover:bg-[#0000004d] bg-transparent p-[0.9rem] rounded-[50%] flex text-[1.1rem] active:text-white text-[#FFFFFF80]`}
      >
        <BsPersonWorkspace />
      </HashLink>
      <HashLink
        smooth
        to="#contact"
        onClick={() => setActiveNav("#contact")}
        className={`${activeNav === "#contact" ? "active" : ""} hover:bg-[#0000004d] bg-transparent p-[0.9rem] rounded-[50%] flex text-[1.1rem] active:text-white text-[#FFFFFF80]`}
      >
        <MdMessage />
      </HashLink>
    </div>
  );
};

export default Content;

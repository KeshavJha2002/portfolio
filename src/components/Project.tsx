import Tilt from "react-parallax-tilt";
import { motion, Variants } from "framer-motion";
import React, { useEffect, useState } from "react";
// TODO -> add images
// import { github, demo } from "../assets";
import SectionWrapper from "../hoc/SectionWrapper";
import { list } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { cProject, javaProject, webProject, otherProject } from "../constants";
import ProjectList from "./ProjectList";

// TODO -> check for the error in the TILT component from the docs
// TODO -> refractor the fadeIn() function for the first parameter

interface Tag {
  name: string;
  color: string;
}

interface ProjectData {
  index: number;
  name: string;
  description: string;
  tags: Tag[];
  image: string;
  source_code_link: string;
  source_link: string;
}

const ProjectCard: React.FC<ProjectData> = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  source_link,
}) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, transform: 'none' }}
      variants={fadeIn("up", "spring", index * 0.5, 0.75) as Variants}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="h-[500px] bg-tertiary p-5 rounded-2xl sm:w-[330px] w-full"
      >
        <div className="cursor-pointer relative w-full h-[180px] hover:bg-[#030325]">
          <img
            src={image}
            alt="project_image"
            className="z-[1] hover:z-[2] hover:opacity-[0.2] w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-center card-img_hover" style={{ alignItems: "center" }}>
            <h3 className="opacity-0 text-black font-bold text-[16px] hover:z-[1] hover:opacity-[1] hover:text-[#fff]">{name}</h3>
          </div>
          <div className="hover:opacity-[1] hover:z-[1] opacity-0 absolute inset-0 flex justify-end card-img_hover">
            <div
              onClick={() => window.open(source_link, "_blank")}
              className="black-gradient w-10 h-10 m-2 rounded-full flex justify-center items-center cursor-pointer"
            >
              {/* <img
                src={demo}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              /> */}
            </div>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 m-2 rounded-full flex justify-center items-center cursor-pointer"
            >
              {/* <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              /> */}
            </div>
          </div>
        </div>
        <div className="content mt-5">
          <p className="mt-2 text-secondary text-[14px]" style={{ textAlign: 'justify' }}>{description}</p>
        </div>
        <div className="content mt-4 flex flex-wrap gap-2">
          {tags.map((tag, tagIndex) => (
            <p key={`${name}-${tagIndex}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Project: React.FC = () => {
  const [selected, setSelected] = useState("java");
  const [data, setData] = useState<ProjectData[]>([]);

  useEffect(() => {
    switch (selected) {
      case "java":
        setData(javaProject);
        break;
      case "c++":
        setData(cProject);
        break;
      case "web":
        setData(webProject);
        break;
      case "other":
        setData(otherProject);
        break;
      default:
        setData(cProject);
    }
  }, [selected]);

  return (
    <>
      <motion.div whileInView={{ opacity: 1, transform: 'none' }} variants={textVariant(200) as Variants}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">My work</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Projects.</h2>
      </motion.div>
      <div className="flex flex-col items-center w-full">
        <motion.p
          whileInView={{ opacity: 1, transform: 'none' }}
          variants={fadeIn("left", "", 0.1, 1) as Variants}
          className="mt-3 text-secondary text-[17px] leading-[30px]"
        >
          <ul className="p-0 m-[10px] flex justify-center list-none">
            {list.map((item) => (
              <ProjectList
                key={item.id}
                title={item.title}
                active={selected === item.id}
                setSelected={setSelected}
                id={item.id}
              />
            ))}
          </ul>
          <div className="gap-[1.75rem] mt-20 flex flex-wrap justify-center">
            {data.map((project, index) => (
              <div key={`project-${index}`}>
                <ProjectCard {...project} index={index} />
              </div>
            ))}
          </div>
        </motion.p>
      </div>
    </>
  );
};

export default SectionWrapper(Project, "project");

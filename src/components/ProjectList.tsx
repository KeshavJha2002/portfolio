import React from 'react';

type ProjectListProp = {
  title: string,
  active: boolean,
  setSelected: (id:string) => void,
  id: string
}

const  ProjectList:React.FC<ProjectListProp> = ({title,active,setSelected,id}) => {
    return (
        <li className={`border-[2px] border-[#00e9ff] text-[14px] p-[7px] my-[0px] mx-[23px] font-bold rounded-[10px] cursor:pointer overflow-hidden justify-center items-center width1:m-auto ${active?"bg-[#398485] text-white":""}`} id="portfoliolist" onClick={() => setSelected(id)}>
        {title}
      </li>
    )
}

export default ProjectList;
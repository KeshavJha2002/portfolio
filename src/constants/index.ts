type TechnologyType = {
  name: string,
  icon: string
};

export type ExperienceType = {
  date: string,
  iconBg: string,
  icon: string,
  company_name: string,
  title: string,
  link: string,
  points: string[]
};

type ProfileType = {
  link: string,
  icon: string,
};

export const achievements = [{
  id: 1,
  title: "Hello world"
}];

export const educations = [{
  branch: "",
  marks: "",
  name: "",
  degree: "",
  year: "",
  image: "",
}];

export const experiences:ExperienceType[] = [{
  date: "",
  iconBg: "",
  icon: "",
  company_name: "",
  title: "",
  link: "",
  points: ["","",""]
}]

export const profiles:ProfileType[] = [{
  link: "",
  icon: ""
}]

export const technologies:TechnologyType[]= [
  {
    name: "",
    icon: ""
  }
]

export const list = [{
  id: "",
  title: ""
}]

export const cProject = []

export const javaProject = []

export const webProject = []

export const otherProject = []
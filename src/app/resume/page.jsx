"use client";

import { BiLogoMongodb, BiLogoPostgresql } from "react-icons/bi";
import {
  FaAws,
  FaCss3,
  FaDocker,
  FaEthereum,
  FaGit,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaRust,
} from "react-icons/fa";
import {
  SiGooglecloud,
  SiGraphql,
  SiKubernetes,
  SiMicrosoftsqlserver,
  SiNextdotjs,
  SiRedux,
  SiReduxsaga,
  SiShadcnui,
  SiSolana,
  SiSolidity,
  SiTailwindcss,
  SiTypescript,
  SiWeb3Dotjs,
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { AiOutlineOpenAI } from "react-icons/ai";
import { ScrollArea } from "@/components/ui/scroll-area";
import { VscJson } from "react-icons/vsc";
import { motion } from "framer-motion";

const about = {
  title: "About me",
  description:
    "Full-stack software engineer with 8+ years of experience architecting and deploying scalable enterprise solutions. Specialized in cloud technologies, AI/ML integration, and modern DevOps practices. Proven expertise in designing and implementing mission-critical applications for Fortune 500 clients with focus on technical excellence.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Kartik Mishra",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 9732107674",
    },
    {
      fieldName: "Experience",
      fieldValue: "8+ Years",
    },
    {
      fieldName: "LinkedIn",
      fieldValue: "/kartikmishra0404",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Email",
      fieldValue: "kartikmishra.km44@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Not Available",
    },
    {
      fieldName: "Language",
      fieldValue: "English, Hindi, Bengali",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Architected and deployed production-grade applications across AWS, GCP, and hybrid cloud environments. Designed microservices architectures, implemented CI/CD pipelines, and optimized system performance. Contributed to digital transformation initiatives delivering measurable business impact through technical innovation.",
  items: [
    {
      company: "LTIMindtree",
      position: "Specialist - Product Engineering",
      duration: "2020-present",
    },
    {
      company: "MTX",
      position: "Full Stack Senior Consultant",
      duration: "2020-2022",
    },
    {
      company: "Tata Consultancy Services",
      position: "Systems Engineer",
      duration: "2016-2020",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Advanced technical education with focus on software architecture and computer science fundamentals. Continuously pursuing professional certifications in cloud platforms and emerging technologies to stay current with industry standards.",
  items: [
    {
      institution: "Kalyani Govt. Engineering College",
      position: "Computer Science & Engineering(M.Tech)",
      duration: "2016",
    },
    {
      institution: "Govt. College of Engineering & Leather Technology",
      position: "Computer Science & Engineering(B.Tech)",
      duration: "2013",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "Expertise in full-stack development, cloud architecture, AI/ML integration, containerization, and infrastructure automation. Proficient across multiple programming paradigms with strong command of modern frameworks and DevOps tooling.",
  skillList: [
    {
      icon: <AiOutlineOpenAI />,
      name: "ChatGPT",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaEthereum />,
      name: "Ethereum",
    },
    {
      icon: <SiSolidity />,
      name: "solidity",
    },
    {
      icon: <SiSolana />,
      name: "solana",
    },
    {
      icon: <FaRust />,
      name: "rust",
    },
    {
      icon: <SiWeb3Dotjs />,
      name: "Web3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <SiTypescript />,
      name: "typescript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <VscJson />,
      name: "REST API",
    },
    {
      icon: <SiGraphql />,
      name: "graphQL",
    },
    {
      icon: <SiRedux />,
      name: "redux.js",
    },
    {
      icon: <SiReduxsaga />,
      name: "redux saga",
    },
    {
      icon: <FaGit />,
      name: "git",
    },
    {
      icon: <FaGithub />,
      name: "github",
    },
    {
      icon: <FaDocker />,
      name: "docker",
    },
    {
      icon: <SiKubernetes />,
      name: "kubernetes",
    },
    {
      icon: <BiLogoPostgresql />,
      name: "postgresql",
    },
    {
      icon: <BiLogoMongodb />,
      name: "mongodb",
    },
    {
      icon: <SiMicrosoftsqlserver />,
      name: "MS SQL server",
    },
    {
      icon: <SiShadcnui />,
      name: "ShadCn UI",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwindcss",
    },
    {
      icon: <FaAws />,
      name: "aws",
    },
    {
      icon: <SiGooglecloud />,
      name: "google cloud platform",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 5",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="flex justify-center items-center py-12 xl:py-0 min-h-[80vh]"
    >
      <div className="mx-auto container">
        <Tabs
          defaultValue="experience"
          className="flex xl:flex-row flex-col gap-[60px]"
        >
          <TabsList className="flex flex-col gap-6 mx-auto xl:mx-0 w-full max-w-[380px]">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="w-full min-h-[70vh]">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] xl:text-left text-center">
                <h3 className="font-bold text-4xl">{experience.title}</h3>
                <p className="mx-auto xl:mx-0 max-w-[680px] text-white/60">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="gap-[30px] grid grid-cols-1 lg:grid-cols-2">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex flex-col justify-center items-center lg:items-start gap-1 bg-[#232329] px-10 py-6 rounded-xl h-[184px]"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h1 className="max-w-[240px] min-h-[60px] text-xl lg:text-left text-center">
                            {item.position}
                          </h1>
                          <div className="flex items-center gap-3">
                            <span className="bg-accent rounded-full w-[6px] h-[6px]"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] xl:text-left text-center">
                <h3 className="font-bold text-4xl">{education.title}</h3>
                <p className="mx-auto xl:mx-0 max-w-[680px] text-white/60">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="gap-[30px] grid grid-cols-1 lg:grid-cols-2">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex flex-col justify-center items-center lg:items-start gap-1 bg-[#232329] px-10 py-6 rounded-xl h-[200px]"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h1 className="max-w-[240px] min-h-[60px] text-xl lg:text-left text-center">
                            {item.position}
                          </h1>
                          <div className="flex items-center gap-3">
                            <span className="bg-accent rounded-full w-[6px] h-[6px]"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[16px]">
                <div className="flex flex-col gap-[30px] xl:text-left text-center">
                  <h3 className="font-bold text-4xl">{skills.title}</h3>
                  <p className="mx-auto xl:mx-0 max-w-[600px] text-white/60">
                    {skills.description}
                  </p>
                </div>
                <ul className="gap-4 xl:gap-[30px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="group flex justify-center items-center bg-[#232329] rounded-xl w-full h-[150px]">
                              <div className="group-hover:text-accent text-6xl transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full xl:text-left text-center"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="font-bold text-4xl">{about.title}</h3>
                <p className="mx-auto xl:mx-0 max-w-[650px] text-white/60">
                  {about.description}
                </p>
                <ul className="gap-y-6 grid grid-cols-1 xl:grid-cols-2 mx-auto xl:mx-0 max-w-[620px]">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex justify-center xl:justify-start items-center gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};
export default Resume;

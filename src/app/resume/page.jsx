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
  SiAnthropic,
  SiGooglecloud,
  SiGraphql,
  SiGithubcopilot,
  SiKubernetes,
  SiLangchain,
  SiMicrosoftsqlserver,
  SiN8N,
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
import { AiOutlineOpenAI } from "react-icons/ai";
import { Sparkles, Bot, Workflow, Wrench } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { VscJson } from "react-icons/vsc";
import { motion } from "framer-motion";

const about = {
  title: "About me",
  description:
    "Full-stack software engineer with 9+ years of experience architecting and deploying scalable enterprise solutions. Specialized in cloud technologies, AI/ML integration, and modern DevOps practices. Proven expertise in designing and implementing mission-critical applications for Fortune 500 clients with focus on technical excellence.",
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
      fieldValue: "9+ Years",
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
      icon: <Sparkles className="w-10 h-10" />,
      name: "GenAI",
    },
    {
      icon: <Bot className="w-10 h-10" />,
      name: "Agentic AI",
    },
    {
      icon: <SiLangchain />,
      name: "Langchain",
    },
    {
      icon: <Workflow className="w-10 h-10" />,
      name: "Langraph",
    },
    {
      icon: <Wrench className="w-10 h-10" />,
      name: "LangSmith",
    },
    {
      icon: <SiGithubcopilot />,
      name: "GitHub Copilot",
    },
    {
      icon: <SiAnthropic />,
      name: "Claude Code",
    },
    {
      icon: <SiN8N />,
      name: "N8N",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
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
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <SiTypescript />,
      name: "typescript",
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
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col gap-3"
                >
                  <span className="inline-flex items-center gap-2 w-fit mx-auto xl:mx-0 bg-gradient-to-r from-accent/20 to-accent/10 backdrop-blur-sm px-3 py-1.5 border border-accent/30 rounded-full font-medium text-accent text-sm">
                    Career Timeline
                  </span>
                  <h3 className="font-bold text-4xl">{experience.title}</h3>
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.08 }}
                  className="mx-auto xl:mx-0 max-w-[680px] text-white/60"
                >
                  {experience.description}
                </motion.p>
                <ScrollArea className="h-[400px]">
                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    className="gap-[30px] grid grid-cols-1 lg:grid-cols-2"
                  >
                    {experience.items.map((item, index) => {
                      return (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.2 + index * 0.05,
                          }}
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
                        </motion.li>
                      );
                    })}
                  </motion.ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] xl:text-left text-center">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col gap-3"
                >
                  <span className="inline-flex items-center gap-2 w-fit mx-auto xl:mx-0 bg-gradient-to-r from-accent/20 to-accent/10 backdrop-blur-sm px-3 py-1.5 border border-accent/30 rounded-full font-medium text-accent text-sm">
                    Academic Background
                  </span>
                  <h3 className="font-bold text-4xl">{education.title}</h3>
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.08 }}
                  className="mx-auto xl:mx-0 max-w-[680px] text-white/60"
                >
                  {education.description}
                </motion.p>
                <ScrollArea className="h-[400px]">
                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    className="gap-[30px] grid grid-cols-1 lg:grid-cols-2"
                  >
                    {education.items.map((item, index) => {
                      return (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.2 + index * 0.05,
                          }}
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
                        </motion.li>
                      );
                    })}
                  </motion.ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[16px]">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col gap-[30px] xl:text-left text-center"
                >
                  <span className="inline-flex items-center gap-2 w-fit mx-auto xl:mx-0 bg-gradient-to-r from-accent/20 to-accent/10 backdrop-blur-sm px-3 py-1.5 border border-accent/30 rounded-full font-medium text-accent text-sm">
                    Technical Expertise
                  </span>
                  <h3 className="font-bold text-4xl">{skills.title}</h3>
                  <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.08 }}
                    className="mx-auto xl:mx-0 max-w-[600px] text-white/60"
                  >
                    {skills.description}
                  </motion.p>
                </motion.div>
                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  className="gap-4 xl:gap-[30px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
                >
                  {skills.skillList.map((skill, index) => {
                    return (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.2 + index * 0.02,
                        }}
                      >
                        <div className="group flex flex-col justify-center items-center gap-3 bg-[#232329] rounded-xl w-full h-[150px] px-2 py-4">
                          <div className="group-hover:text-accent text-5xl transition-all duration-300 shrink-0">
                            {skill.icon}
                          </div>
                          <span className="text-white/80 group-hover:text-accent text-sm font-medium text-center capitalize transition-colors duration-300 line-clamp-2">
                            {skill.name}
                          </span>
                        </div>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full xl:text-left text-center"
            >
              <div className="flex flex-col gap-8">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col gap-3"
                >
                  <span className="inline-flex items-center gap-2 w-fit mx-auto xl:mx-0 bg-gradient-to-r from-accent/20 to-accent/10 backdrop-blur-sm px-3 py-1.5 border border-accent/30 rounded-full font-medium text-accent text-sm">
                    Professional Profile
                  </span>
                  <h3 className="font-bold text-4xl xl:text-[2.5rem]">
                    {about.title}
                  </h3>
                </motion.div>

                {/* Description card */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.08 }}
                  className="relative overflow-hidden rounded-xl border border-accent/20 bg-gradient-to-br from-white/5 to-white/0 p-6 xl:p-8"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent to-accent/50 rounded-l" />
                  <p className="pl-4 xl:pl-5 text-white/80 text-base xl:text-lg leading-relaxed max-w-[680px] mx-auto xl:mx-0">
                    {about.description}
                  </p>
                </motion.div>

                {/* Info grid - card style */}
                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  className="gap-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 max-w-[720px] mx-auto xl:mx-0"
                >
                  {about.info.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.2 + index * 0.04,
                      }}
                      className="group flex flex-col gap-1 rounded-xl border border-white/10 bg-[#232329] hover:border-accent/30 hover:bg-white/5 px-5 py-4 transition-all duration-300"
                    >
                      <span className="text-white/50 text-xs font-medium uppercase tracking-wider">
                        {item.fieldName}
                      </span>
                      <span className="text-white font-semibold text-lg truncate">
                        {item.fieldValue}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};
export default Resume;

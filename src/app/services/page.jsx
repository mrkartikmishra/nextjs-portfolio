"use client";

import { easeIn, motion } from "framer-motion";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "GenAI Application Development",
    description:
      "Design and implementation of AI-powered applications leveraging GPT, LLMs, and machine learning models. End-to-end development including prompt engineering, fine-tuning, and production deployment with enterprise-grade security and scalability.",
    href: "",
  },
  {
    num: "02",
    title: "Backend Development",
    description:
      "Architecting robust server-side applications with microservices, RESTful APIs, and event-driven architectures. Expertise in database optimization, caching strategies, and implementing secure authentication/authorization systems at scale.",
    href: "",
  },
  {
    num: "03",
    title: "Frontend Development",
    description:
      "Building responsive, accessible, and performant user interfaces with React, Next.js, and modern web standards. Focus on UX optimization, state management, component architecture, and cross-browser compatibility.",
    href: "",
  },
  {
    num: "04",
    title: "Full Stack Development",
    description:
      "End-to-end development of complete web applications from database design through UI implementation. Specializing in cloud-native architectures, serverless computing, and DevOps practices for rapid, reliable deployments.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="flex flex-col justify-center py-12 xl:py-0 min-h-[80vh]">
      <div className="mx-auto container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: easeIn },
          }}
          className="gap-[40px] grid grid-cols-1 md:grid-cols-2"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="group flex flex-col flex-1 justify-center gap-6"
              >
                <div className="flex justify-between items-center w-full">
                  <div className="text-outline group-hover:text-outline-hover font-extrabold text-transparent text-5xl transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="flex justify-center items-center bg-white group-hover:bg-accent rounded-full w-[70px] h-[70px] hover:-rotate-45 transition-all duration-500"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <div className="font-bold text-[42px] text-white group-hover:text-accent leading-none transition-all duration-500">
                  {service.title}
                </div>
                <p className="text-white/60">{service.description}</p>
                <div className="border-white/20 border-b w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

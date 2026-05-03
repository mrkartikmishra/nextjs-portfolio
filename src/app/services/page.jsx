"use client";

import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "GenAI Application Development",
    description:
      "Design and implementation of AI-powered applications leveraging GPT, LLMs, and machine learning models. End-to-end development including prompt engineering, fine-tuning, and production deployment with enterprise-grade security and scalability.",
  },
  {
    num: "02",
    title: "Backend Development",
    description:
      "Architecting robust server-side applications with microservices, RESTful APIs, and event-driven architectures. Expertise in database optimization, caching strategies, and implementing secure authentication/authorization systems at scale.",
  },
  {
    num: "03",
    title: "Frontend Development",
    description:
      "Building responsive, accessible, and performant user interfaces with React, Next.js, and modern web standards. Focus on UX optimization, state management, component architecture, and cross-browser compatibility.",
  },
  {
    num: "04",
    title: "Full Stack Development",
    description:
      "End-to-end development of complete web applications from database design through UI implementation. Specializing in cloud-native architectures, serverless computing, and DevOps practices for rapid, reliable deployments.",
  },
];

const Services = () => {
  return (
    <section className="relative py-12 min-h-screen overflow-hidden">
      {/* Animated background elements for subtle depth */}
      <div className="-z-10 fixed inset-0 pointer-events-none">
        <motion.div
          animate={{
            y: [0, 30, 0],
            opacity: [0.25, 0.5, 0.25],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="top-24 left-8 absolute bg-accent/20 blur-3xl rounded-full w-72 h-72"
        />
        <motion.div
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.45, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="right-16 bottom-32 absolute bg-accent/10 blur-3xl rounded-full w-80 h-80"
        />
      </div>

      <div className="z-10 relative mx-auto px-4 container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block mb-6"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/20 to-accent/10 backdrop-blur-sm px-4 py-2 border border-accent/30 rounded-full font-semibold text-accent text-sm"
            >
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="bg-accent rounded-full w-2.5 h-2.5"
              />
              Services
            </motion.div>
          </motion.div>

          <h1 className="mb-6 h2">
            What I <span className="text-accent">Offer</span>
          </h1>
          <p className="max-w-2xl text-white/60 text-lg">
            End-to-end engineering support — from product discovery and
            architecture through implementation, deployment, and ongoing
            optimisation across AI, backend, frontend, and full‑stack work.
          </p>

          {/* Decorative elements */}
          <div className="flex items-center gap-2 mt-8">
            <div className="bg-gradient-to-r from-accent to-transparent rounded-full w-12 h-1" />
            <span className="font-semibold text-accent">
              {services.length} Core Services
            </span>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="gap-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
            >
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
                className="group relative h-full bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-accent/40 rounded-xl p-6 flex flex-col justify-between overflow-hidden transition-colors duration-300"
              >
                {/* Accent background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="-top-32 -right-32 absolute bg-accent/20 blur-3xl rounded-full w-72 h-72" />
                </div>

                <div className="relative flex flex-col gap-4 h-full">
                  {/* Top meta */}
                  <div className="flex justify-between items-start gap-3 mb-2">
                    <span className="inline-flex items-center justify-center rounded-full bg-accent/15 text-accent font-semibold text-xs w-10 h-10">
                      {service.num}
                    </span>
                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/40">
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      Focus Area
                    </div>
                  </div>

                  {/* Title & description */}
                  <div className="flex flex-col gap-3 flex-1">
                    <h3 className="font-semibold text-lg text-white group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 mt-2 border-t border-white/10">
                    <p className="text-xs text-white/50">
                      Ideal for teams looking to move from{" "}
                      <span className="text-accent/80">idea</span> to{" "}
                      <span className="text-accent/80">production</span> with
                      confidence.
                    </p>
                    <div className="flex justify-center items-center bg-white/5 group-hover:bg-accent rounded-full w-10 h-10 text-accent group-hover:text-primary transition-colors duration-300">
                      <BsArrowDownRight className="text-lg" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

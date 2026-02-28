"use client";

import { BsArrowRight, BsArrowUpRight, BsGithub } from "react-icons/bs";

import React from "react";
import { motion } from "framer-motion";

const WorkCard = ({ project, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-accent/40 rounded-lg h-full overflow-hidden transition-colors duration-300"
    >
      {/* Background Gradient Accent */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="-top-40 -right-40 absolute bg-accent/20 blur-3xl rounded-full w-80 h-80" />
      </div>

      {/* Content */}
      <div className="relative flex flex-col p-6 h-full">
        {/* Category Badge */}
        <div className="inline-block mb-4">
          <span className="bg-accent/20 px-3 py-1 border border-accent/40 rounded-full font-semibold text-accent text-xs">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="mb-2 font-bold text-white group-hover:text-accent text-xl transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="flex-grow mb-4 text-white/70 text-sm line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="bg-white/5 px-2 py-1 border border-white/10 rounded text-white/60 text-xs"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 text-white/40 text-xs">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Year */}
        <div className="mb-4 font-semibold text-white/50 text-xs">
          {project.year}
        </div>

        {/* Links Section */}
        <div className="flex gap-4 pt-4 border-white/10 border-t">
          {/* View Details Button */}
          <button
            onClick={onClick}
            className="group/link flex items-center gap-2 font-semibold text-accent hover:text-accent text-sm transition-colors duration-300"
          >
            View Details
            <BsArrowRight className="text-lg transition-transform group-hover/link:translate-x-1 duration-300" />
          </button>

          {/* Links */}
          <div className="flex gap-3 ml-auto">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center border border-white/20 hover:border-accent/40 rounded-full w-8 h-8 text-white/60 hover:text-accent transition-colors duration-300"
                title="GitHub Repository"
              >
                <BsGithub className="text-lg" />
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center border border-white/20 hover:border-accent/40 rounded-full w-8 h-8 text-white/60 hover:text-accent transition-colors duration-300"
                title="Live Project"
              >
                <BsArrowUpRight className="text-lg" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkCard;

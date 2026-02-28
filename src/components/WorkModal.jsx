"use client";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import React from "react";
import { X } from "lucide-react";

const WorkModal = ({ isOpen, onClose, project }) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex flex-col bg-primary border border-white/20 w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <DialogHeader className="flex-shrink-0 pb-4 border-white/10 border-b">
          <div className="flex justify-between items-start gap-4">
            <div className="flex-grow">
              <span className="inline-block bg-accent/20 mb-3 px-3 py-1 border border-accent/40 rounded-full font-semibold text-accent text-xs">
                {project.category}
              </span>
              <DialogTitle className="text-accent text-lg sm:text-2xl break-words">
                {project.title}
              </DialogTitle>
              <p className="mt-2 font-semibold text-white/60 text-xs sm:text-sm">
                {project.year}
              </p>
            </div>
            <DialogClose className="flex-shrink-0 text-white/60 hover:text-white transition-colors">
              <X className="w-6 h-6" />
            </DialogClose>
          </div>
        </DialogHeader>

        {/* Content */}
        <div className="flex-grow space-y-6 px-2 sm:px-4 py-4 overflow-y-auto">
          {/* Description */}
          <div>
            <h3 className="mb-2 font-semibold text-accent text-sm">About</h3>
            <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="mb-3 font-semibold text-accent text-sm">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-accent/20 to-accent/10 px-3 py-1 border border-accent/30 rounded-full font-semibold text-accent text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="mb-3 font-semibold text-accent text-sm">
              Key Features
            </h3>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-white/80 text-xs sm:text-sm"
                >
                  <span className="font-bold text-accent">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer with Links */}
        <div className="flex-shrink-0 px-2 sm:px-4 pt-4 pb-4 border-white/10 border-t">
          <div className="flex flex-wrap gap-4 sm:gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:bg-accent/30 bg-gradient-to-r from-accent/20 to-accent/10 px-4 py-2 border border-accent/40 hover:border-accent/60 rounded-lg font-semibold text-accent text-sm transition-colors duration-300"
              >
                <BsGithub className="text-lg" />
                GitHub
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:bg-accent/30 bg-gradient-to-r from-accent/20 to-accent/10 px-4 py-2 border border-accent/40 hover:border-accent/60 rounded-lg font-semibold text-accent text-sm transition-colors duration-300"
              >
                <BsArrowUpRight className="text-lg" />
                Live Preview
              </a>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WorkModal;

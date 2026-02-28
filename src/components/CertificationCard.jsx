"use client";

import { Award, FileText } from "lucide-react";

import React from "react";
import { motion } from "framer-motion";

const CertificationCard = ({ certificate, onClick }) => {
  const isPDF = certificate.file.endsWith(".pdf");

  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
      className="group h-full"
    >
      <div
        onClick={onClick}
        className="relative hover:bg-white/10 bg-gradient-to-br from-white/5 to-white/0 hover:shadow-accent/20 hover:shadow-lg p-6 border border-accent/30 hover:border-accent rounded-lg h-full overflow-hidden transition-all duration-300 cursor-pointer"
      >
        {/* Decorative accent element */}
        <div className="top-0 right-0 -z-10 absolute bg-accent/10 blur-3xl group-hover:blur-2xl rounded-full w-32 h-32 transition-all duration-300" />

        <div className="flex flex-col justify-between h-full">
          {/* Icon Section */}
          <div className="flex justify-center items-center bg-accent/10 group-hover:bg-accent/20 mb-4 rounded-lg w-16 h-16 transition-colors duration-300">
            {isPDF ? (
              <FileText className="w-8 h-8 text-accent" />
            ) : (
              <Award className="w-8 h-8 text-accent" />
            )}
          </div>

          {/* Content Section */}
          <div className="flex-grow">
            <h3 className="mb-2 font-semibold text-white group-hover:text-accent text-lg line-clamp-2 transition-colors duration-300">
              {certificate.title}
            </h3>
            <p className="mb-3 text-white/60 group-hover:text-white/80 text-sm transition-colors duration-300">
              {certificate.issuer}
            </p>
            <p className="text-white/50 group-hover:text-accent/70 text-xs transition-colors duration-300">
              {certificate.date}
            </p>
          </div>

          {/* Hover Action Indicator */}
          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 mt-4 text-accent text-sm transition-opacity duration-300">
            <span>Click to view</span>
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CertificationCard;

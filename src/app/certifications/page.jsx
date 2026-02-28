"use client";

import React, { useState } from "react";

import CertificationCard from "@/components/CertificationCard";
import CertificationModal from "@/components/CertificationModal";
import { motion } from "framer-motion";

const certificationsData = [
  {
    id: 1,
    title: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    date: "2026",
    file: "AWS_Certified_AI_Practitioner.png",
    description:
      "Validates foundational knowledge of AI/ML concepts and AWS AI services including Amazon SageMaker and other AI/ML solutions.",
  },
  {
    id: 2,
    title: "GitHub Copilot",
    issuer: "GitHub",
    date: "2024",
    file: "GitHub_Copilo.pdf",
    description:
      "Demonstrates proficiency in using GitHub Copilot for AI-assisted code generation and development productivity.",
  },
  {
    id: 3,
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    file: "AWS_Certified_Cloud_Practitioner.pdf",
    description:
      "Validates foundational understanding of AWS Cloud concepts, services, and terminology.",
  },
  {
    id: 4,
    title: "AWS Certified Solutions Architect Associate",
    issuer: "Amazon Web Services",
    date: "2024",
    file: "AWS_Certified_Solutions_Architect_Associate.pdf",
    description:
      "Demonstrates the ability to design and deploy secure, reliable, and scalable AWS solutions on AWS infrastructure.",
  },
  {
    id: 5,
    title: "GCP Associate Cloud Engineer",
    issuer: "Google Cloud",
    date: "2024",
    file: "GCP_Associate_Cloud_Engineer.pdf",
    description:
      "Validates skills in deploying applications, managing cloud resources, and operating cloud solutions on Google Cloud Platform.",
  },
  {
    id: 6,
    title: "NodeJS Developer",
    issuer: "Edureka",
    date: "2021",
    file: "Edureka_NodeJs_Developer.pdf",
    description:
      "Demonstrates proficiency in Node.js development, backend development, and building scalable server-side applications.",
  },
  {
    id: 7,
    title: "DevOps Workshop",
    issuer: "Edureka",
    date: "2026",
    file: "Edureka_DevOps_Workshop.pdf",
    description:
      "Demonstrates proficiency in DevOps practices, CI/CD pipelines, infrastructure automation, and cloud deployment strategies.",
  },
];

const Certifications = () => {
  const [selectedCertification, setSelectedCertification] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (cert) => {
    setSelectedCertification(cert);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCertification(null), 300);
  };

  return (
    <section className="relative py-12 min-h-screen overflow-hidden">
      {/* Animated background elements */}
      <div className="-z-10 fixed inset-0 pointer-events-none">
        <motion.div
          animate={{
            y: [0, 30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="top-20 left-10 absolute bg-accent/25 blur-3xl rounded-full w-80 h-80"
        />
        <motion.div
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="right-20 bottom-40 absolute bg-accent/15 blur-3xl rounded-full w-96 h-96"
        />
      </div>

      <div className="z-10 relative mx-auto px-4 container">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          {/* Professional Credentials Badge */}
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
              Professional Credentials
            </motion.div>
          </motion.div>

          <h1 className="mb-4 h1">
            Certifications & <span className="text-accent">Achievements</span>
          </h1>
          <p className="max-w-2xl text-white/60 text-lg">
            Professional certifications and credentials demonstrating expertise
            in cloud platforms, development tools, and modern technologies.
          </p>

          {/* Decorative elements */}
          <div className="flex items-center gap-2 mt-8">
            <div className="bg-gradient-to-r from-accent to-transparent rounded-full w-12 h-1" />
            <span className="font-semibold text-accent">
              {certificationsData.length} Certifications
            </span>
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <CertificationCard
                certificate={cert}
                onClick={() => handleCardClick(cert)}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State Message (if no certificates) */}
        {certificationsData.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col justify-center items-center py-20"
          >
            <div className="text-center">
              <p className="mb-4 text-white/60 text-lg">
                No certifications added yet.
              </p>
            </div>
          </motion.div>
        )}

        {/* Motivational Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gradient-to-r from-accent/10 to-white/5 mt-20 p-8 border border-accent/20 rounded-lg"
        >
          <div className="text-center">
            <h3 className="mb-3 text-white h3">
              Committed to{" "}
              <span className="text-accent">Continuous Learning</span>
            </h3>
            <p className="mx-auto max-w-xl text-white/70">
              I believe in staying updated with the latest technologies and best
              practices in cloud computing, development, and software
              engineering.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Certification Modal */}
      <CertificationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        certificate={selectedCertification}
      />
    </section>
  );
};

export default Certifications;

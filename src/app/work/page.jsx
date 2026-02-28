"use client";

import React, { useState } from "react";

import WorkCard from "@/components/WorkCard";
import WorkModal from "@/components/WorkModal";
import { motion } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Full Stack",
    description:
      "Enterprise-scale e-commerce solution with real-time inventory management, payment processing, and comprehensive analytics.",
    longDescription:
      "Architected and deployed a production-grade e-commerce platform handling high transaction volumes. Implemented microservices for order processing, inventory management, and payments using Node.js with PostgreSQL. Integrated Stripe for secure PCI-compliant payment handling. Built responsive React frontend with advanced filtering, recommendations engine, and real-time notifications. Deployed on AWS with auto-scaling, CDN distribution, and comprehensive monitoring. Optimized database queries reducing query time by 60% and implemented Redis caching for 3x performance improvement.",
    technologies: [
      "Next.js",
      "Node.js",
      "React",
      "PostgreSQL",
      "Stripe",
      "Redis",
      "AWS",
    ],
    features: [
      "Real-time inventory synchronization",
      "PCI-compliant payment processing",
      "User authentication with OAuth",
      "Advanced admin dashboard",
      "Elasticsearch-powered search",
      "Order fulfillment system",
      "CDN distribution",
      "Performance monitoring",
    ],
    year: "2024",
    github: "https://github.com",
    link: "https://example.com",
  },
  {
    id: 2,
    title: "DataSync Analytics Dashboard",
    category: "Data Visualization",
    description:
      "Real-time business intelligence platform with interactive visualizations and predictive analytics.",
    longDescription:
      "Built a comprehensive analytics platform aggregating data from multiple sources into actionable insights. Implemented real-time data pipelines using Apache Kafka for event streaming and Apache Spark for batch processing. Designed interactive dashboards with D3.js and Plotly visualizations. Integrated machine learning models for predictive forecasting. Backend built on Python with FastAPI, PostgreSQL with TimescaleDB for time-series optimization. Deployed on Kubernetes clusters with horizontal auto-scaling. Achieved sub-second dashboard load times and 99.9% uptime through distributed architecture.",
    technologies: [
      "Apache Kafka",
      "Apache Spark",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "TimescaleDB",
      "D3.js",
      "Kubernetes",
    ],
    features: [
      "Real-time data streaming",
      "Distributed batch processing",
      "Interactive visualizations",
      "Predictive analytics models",
      "Custom dashboard builder",
      "Multi-source data aggregation",
      "Automated alerting system",
      "Performance optimization",
    ],
    year: "2024",
    github: "https://github.com",
    link: "https://example.com",
  },
  {
    id: 3,
    title: "Containerized Microservices Platform",
    category: "DevOps/Infrastructure",
    description:
      "Cloud-native platform orchestrating microservices with automated deployment and monitoring.",
    longDescription:
      "Architected a scalable microservices infrastructure deployed on AWS EKS using Kubernetes. Implemented containerization with Docker for all services and CI/CD pipelines using GitLab CI/Jenkins. Designed infrastructure-as-code with Terraform managing 50+ AWS resources. Implemented comprehensive monitoring with Prometheus and Grafana, centralized logging with ELK stack, and distributed tracing with Jaeger. Set up automated scaling policies, health checks, and self-healing mechanisms. Reduced deployment time from 4 hours to 15 minutes through CI/CD optimization and achieved 99.99% availability.",
    technologies: [
      "Kubernetes",
      "Docker",
      "Terraform",
      "AWS EKS",
      "GitLab CI",
      "Prometheus",
      "Grafana",
      "ELK Stack",
    ],
    features: [
      "Container orchestration",
      "Infrastructure-as-Code",
      "Automated CI/CD pipelines",
      "Multi-node deployment",
      "Health checks and auto-healing",
      "Distributed logging",
      "Metrics collection",
      "Alert management",
    ],
    year: "2025",
    github: "https://github.com",
    link: "https://example.com",
  },
  {
    id: 4,
    title: "Machine Learning Pipeline Framework",
    category: "ML/AI",
    description:
      "End-to-end MLOps framework for model training, validation, and production deployment.",
    longDescription:
      "Developed a comprehensive ML pipeline framework automating the entire model lifecycle. Implemented data preprocessing pipelines handling terabytes of structured and unstructured data. Designed model training infrastructure using TensorFlow and PyTorch with distributed GPU training across multiple nodes. Created automated feature engineering and selection processes. Implemented A/B testing framework for model validation and performance monitoring. Deployed models using TensorFlow Serving and ONNX Runtime. Integrated with production systems achieving <100ms inference latency with 99.9% uptime. Reduced model training time by 70% through optimization and parallelization.",
    technologies: [
      "TensorFlow",
      "PyTorch",
      "Python",
      "Apache Airflow",
      "MLflow",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    features: [
      "Automated model training",
      "Distributed GPU processing",
      "Feature engineering pipeline",
      "Model versioning and tracking",
      "A/B testing framework",
      "Performance monitoring",
      "Inference optimization",
      "Data quality validation",
    ],
    year: "2024",
    github: "https://github.com",
    link: "https://example.com",
  },
  {
    id: 5,
    title: "Distributed System Monitoring Solution",
    category: "Full Stack",
    description:
      "Comprehensive monitoring and observability platform for distributed systems at scale.",
    longDescription:
      "Built a sophisticated monitoring and observability platform for distributed systems with millions of events per second. Implemented custom metrics collection using Prometheus exporters and custom instrumentation. Designed alert routing and escalation policies with machine learning for anomaly detection. Created interactive dashboards with Grafana for real-time visualization. Implemented distributed tracing with OpenTelemetry for end-to-end request tracking across microservices. Built notification system with multiple channels (email, Slack, PagerDuty). Handled 10M+ events/second with <500ms latency. Reduced MTTR (Mean Time to Resolution) by 60% through intelligent alerting.",
    technologies: [
      "Node.js",
      "Express",
      "Prometheus",
      "Grafana",
      "Elastic",
      "Jaeger",
      "OpenTelemetry",
      "Kubernetes",
    ],
    features: [
      "Real-time metrics collection",
      "Distributed tracing",
      "Custom dashboard creation",
      "Machine learning anomaly detection",
      "Multi-channel alerting",
      "High-cardinality metric handling",
      "SLA monitoring",
      "Log aggregation and analysis",
    ],
    year: "2025",
    github: "https://github.com",
    link: "https://example.com",
  },
  {
    id: 6,
    title: "GraphQL API Gateway",
    category: "Backend",
    description:
      "High-performance API gateway aggregating multiple services with intelligent caching and optimization.",
    longDescription:
      "Engineered a production-grade GraphQL API gateway serving as the central integration point for 20+ microservices. Implemented intelligent query optimization, field-level permissions, and role-based access control. Designed caching strategy with Redis achieving 85% cache hit rate. Built subscription system leveraging WebSockets for real-time updates. Implemented rate limiting, request batching, and query cost analysis to prevent resource abuse. Achieved 50MS average response time and handled 100K+ concurrent connections. Integrated comprehensive APM (Application Performance Monitoring) with detailed metrics and tracing.",
    technologies: [
      "Node.js",
      "GraphQL",
      "Apollo Server",
      "Redis",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "DataLoader",
    ],
    features: [
      "GraphQL query optimization",
      "Intelligent caching layer",
      "Real-time subscriptions",
      "Role-based access control",
      "Rate limiting and throttling",
      "Request batching",
      "Query cost analysis",
      "Comprehensive APM integration",
    ],
    year: "2024",
    github: "https://github.com",
    link: "https://example.com",
  },
];

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
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
          {/* Featured Badge */}
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
              Featured Works
            </motion.div>
          </motion.div>

          <h1 className="mb-6 h2">
            My <span className="text-accent">Projects</span>
          </h1>
          <p className="max-w-2xl text-white/60 text-lg">
            Curated portfolio of enterprise-grade applications demonstrating
            expertise in architecture patterns, system design, modern technology
            stacks, and delivery of high-impact solutions at scale.
          </p>

          {/* Decorative elements */}
          <div className="flex items-center gap-2 mt-8">
            <div className="bg-gradient-to-r from-accent to-transparent rounded-full w-12 h-1" />
            <span className="font-semibold text-accent">
              {projectsData.length} Projects
            </span>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <WorkCard
                project={project}
                onClick={() => handleCardClick(project)}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Motivational Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gradient-to-r from-accent/10 to-white/5 mt-20 p-8 border border-accent/20 rounded-lg"
        >
          <div className="text-center">
            <h3 className="mb-3 text-white h3">
              Continuous <span className="text-accent">Innovation</span>
            </h3>
            <p className="mx-auto max-w-xl text-white/70">
              Committed to leveraging cutting-edge technologies and engineering
              best practices to build scalable systems that deliver measurable
              business value and exceptional performance.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Work Modal */}
      <WorkModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </section>
  );
};

export default Work;

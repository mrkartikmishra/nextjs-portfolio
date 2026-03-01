"use client";

import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const socialLinks = [
  {
    id: 2,
    name: "LinkedIn",
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/kartikmishra0404/",
    handle: "kartikmishra0404",
    tagline: "Profile & experience",
  },
  {
    id: 2,
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/mrkartikmishra",
    handle: "mrkartikmishra",
    tagline: "Repos & open source",
  },
  {
    id: 3,
    name: "Twitter",
    icon: FaTwitter,
    href: "https://x.com/kartikmishra44",
    handle: "kartikmishra44",
    tagline: "Updates & thoughts",
  },
];

const Contact = () => {
  return (
    <section className="relative py-12 min-h-screen overflow-hidden">
      {/* Animated background elements - same as Certifications */}
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
        {/* Header Section - aligned with Certifications */}
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
              Get in Touch
            </motion.div>
          </motion.div>

          <h1 className="mb-6 h2">
            Connect & <span className="text-accent">Reach Out</span>
          </h1>
          <p className="max-w-2xl text-white/60 text-lg">
            Find me on these platforms — open to collaboration, opportunities,
            and conversations about tech and software engineering.
          </p>

          <div className="flex items-center gap-2 mt-8">
            <div className="bg-gradient-to-r from-accent to-transparent rounded-full w-12 h-1" />
            <span className="font-semibold text-accent">
              {socialLinks.length} Platforms
            </span>
          </div>
        </motion.div>

        {/* Social Links Grid - same grid and card pattern as Certifications */}
        <motion.div
          className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.div
                key={link.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <motion.div
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                  className="group h-full"
                >
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative hover:bg-white/10 bg-gradient-to-br from-white/5 to-white/0 hover:shadow-accent/20 hover:shadow-lg p-6 border border-accent/30 hover:border-accent rounded-lg h-full overflow-hidden transition-all duration-300 cursor-pointer block"
                  >
                    {/* Decorative accent element - same as CertificationCard */}
                    <div className="top-0 right-0 -z-10 absolute bg-accent/10 blur-3xl group-hover:blur-2xl rounded-full w-32 h-32 transition-all duration-300" />

                    <div className="flex flex-col justify-between h-full">
                      {/* Icon Section - same as CertificationCard */}
                      <div className="flex justify-center items-center bg-accent/10 group-hover:bg-accent/20 mb-4 rounded-lg w-16 h-16 transition-colors duration-300">
                        <Icon className="w-8 h-8 text-accent" />
                      </div>

                      {/* Content Section */}
                      <div className="flex-grow">
                        <h3 className="mb-2 font-semibold text-white group-hover:text-accent text-lg line-clamp-2 transition-colors duration-300">
                          {link.name}
                        </h3>
                        <p className="mb-3 text-white/60 group-hover:text-white/80 text-sm transition-colors duration-300">
                          @{link.handle}
                        </p>
                        <p className="text-white/50 group-hover:text-accent/70 text-xs transition-colors duration-300">
                          {link.tagline}
                        </p>
                      </div>

                      {/* Hover Action Indicator - same as CertificationCard */}
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 mt-4 text-accent text-sm transition-opacity duration-300">
                        <span>Open link</span>
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
                  </Link>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom strip - same style as Certifications motivational section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gradient-to-r from-accent/10 to-white/5 mt-20 p-8 border border-accent/20 rounded-lg"
        >
          <div className="text-center">
            <h3 className="mb-3 text-white h3">
              Open to <span className="text-accent">Opportunities</span>
            </h3>
            <p className="mx-auto max-w-xl text-white/70">
              I&apos;m actively seeking full-time roles and love connecting over
              tech, product, and engineering. Say hi on any of the platforms
              above.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

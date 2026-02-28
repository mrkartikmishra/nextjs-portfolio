"use client";

import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 9732107674",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "kartikmishra.km44@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Current location",
    description: "Hyderabad, Telangana, INDIA",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="mx-auto container">
        <div className="flex xl:flex-row flex-col gap-[30px]">
          <div className="order-2 xl:order-none xl:w-[54%]">
            <form className="flex flex-col gap-6 bg-[#27272c] p-10 rounded-xl">
              <h3 className="text-accent text-4xl">Let&apos;s Collaborate</h3>
              <p className="text-white/60">
                I'm actively seeking full-time opportunities with
                forward-thinking organizations. If you're looking for a
                dedicated software engineer who can contribute to your team's
                technical goals and business objectives, I'd love to hear from
                you. Let's connect and explore how we can work together.
              </p>
              <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
                <Input type="firstname" placeholder="First name" />
                <Input type="lastname" placeholder="Last name" />
                <Input type="email" placeholder="Email address" />
                <Input type="phone" placeholder="Phone number" />
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="blockchain">
                      Blockchain development
                    </SelectItem>
                    <SelectItem value="fullstack">
                      Full stack development
                    </SelectItem>
                    <SelectItem value="backend">Backend development</SelectItem>
                    <SelectItem value="frontend">
                      Frontend development
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here..."
              />
              <Button size="md" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>
          <div className="flex flex-1 xl:justify-end items-center order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {contactInfo.map((info, index) => {
                return (
                  <li key={index} className="flex items-center gap-1">
                    <div className="flex justify-center items-center bg-[#2727c] rounded-md w-[52px] xl:w-[72px] text-accent">
                      <div className="text-[28px]">{info.icon}</div>
                    </div>
                    <div className="felx-1">
                      <p className="text-white/60">{info.title}</p>
                      <h3 className="text-xl">{info.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default Contact;

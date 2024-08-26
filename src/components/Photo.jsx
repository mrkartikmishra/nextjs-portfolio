"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="relative w-full h-full">
      <motion.div>
        <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]">
          <Image
            src={"/assets/dp3.png"}
            priority
            quality={100}
            fill
            alt="photo"
            className="object-contain"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;

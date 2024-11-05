/* eslint-disable no-unused-vars */
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";

const moveIcon = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technology = () => {
  return (
    <div className="border-b border-neutral-800 pb-20 lg:mb-36">
      <motion.h2
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0 }}
        className="text-4xl text-center my-20"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{duration: 1,  delay: 0 }}
        className="flex items-center justify-center gap-8 pb-28 flex-wrap"
      >
        <motion.div
          variants={moveIcon(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaReact className="text-cyan-500 text-8xl md:text-5xl sm:text-4xl" />
        </motion.div>
        <motion.div
          variants={moveIcon(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          {/* <FaNodeJs className="text-green-600 text-8xl md:text-5xl sm:text-4xl" /> */}
          <FaHtml5 className=" text-[#E34C26] text-8xl md:text-5xl sm:text-4xl"/>
        </motion.div>
        <motion.div
          variants={moveIcon(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 "
        >
          {/* <BiLogoPostgresql className="text-sky-700 text-8xl md:text-5xl sm:text-4xl" /> */}
          <IoLogoCss3 className=" text-[#2965f1] text-8xl md:text-5xl sm:text-4xl" />
        </motion.div>
        <motion.div
          variants={moveIcon(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 "
        >
          {/* <SiMongodb className="text-green-500 text-8xl md:text-5xl sm:text-4xl" /> */}
          <FaBootstrap className="text-[#7110EF] text-8xl md:text-5xl sm:text-4xl"/>
        </motion.div>
        <motion.div
          variants={moveIcon(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 "
        >
          {/* <TbBrandNextjs className="text-8xl text-neutral-100 md:text-5xl sm:text-4xl" /> */}
          <RiJavascriptFill className="text-8xl text-[#f0db4f] md:text-5xl sm:text-4xl"/>
        </motion.div>
        <motion.div
          variants={moveIcon(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 "
        >
          <SiTailwindcss className="text-8xl text-sky-500 md:text-5xl sm:text-4xl" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technology;

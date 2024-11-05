import { motion } from "framer-motion";

import profile from "/assets/kevinRushProfile.png";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-14 lg:mb-35 ">
      <div id="heroText" className="flex mt-36 items-center flex-wrap md:mt-16">
        <div className="w-full lg:w-1/2">
          <motion.h2
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            className="pb-16 text-7xl font-thin tracking-tight lg:mt-16"
          >
            Rasel Shikder
          </motion.h2>
          <motion.h3
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className=" bg-gradient-to-r from-pink-300 via-purple-700 to-slate-200  bg-clip-text text-5xl  text-transparent lg:text-3xl md:text-2xl sm:text-xl "
          >
            Front-End Developer
          </motion.h3>
          <motion.p
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="my-2 text-xl max-w-2xl text-justify py-6 font-light tracking-tighter md:text-xl sm:text-lg sm:text-left"
          >
            I am a passionate Front-End Developer with a knack for crafting
            robust and scalable web applications. I have honed my skills in front-end technologies like
            React, Bootstrap and Tailwind Css with Framer Motion, as well as basic of back-end technologies like Node.js,
            Express.js, and MongoDB. My goal is to leverage my expertise
            to create innovative solutions that drive business growth and
            deliver exceptional user experiences.
          </motion.p>
        </div>
        <div id="heroImg" className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-end md:justify-center">
            <motion.img
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              className="object-cover"
              style={{ opacity: "1", transform: "none" }}
              src={profile}
              alt="RS"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

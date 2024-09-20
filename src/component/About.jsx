import { motion } from "framer-motion";
import about from "/assets/about.jpg";

const About = () => {
  return (
    <div className="border-b py-20 border-neutral-800 lg:mb-36 ">
      <motion.h2
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0 }}
        className="text-4xl my-20 text-center"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h2>
      <div className="flex flex-shrink-0 flex-wrap mb-5">
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0 }}
            className="flex items-center justify-end md:justify-center "
          >
            <img className="rounded-xl" src={about} alt="About" />
          </motion.div>
        </div>
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0 }}
          className="w-full flex items-center lg:w-1/2"
        >
          <p className="my-2 text-xl max-w-2xl text-justify py-6 font-light tracking-tighter md:px-12 md:mx-auto sm:text-left">
            I am a dedicated and versatile full stack developer with a passion
            for creating efficient and user-friendly web applications. With 5
            years of professional experience, I have worked with a variety of
            technologies, including React, Next.js, Node.js, MySQL, PostgreSQL,
            and MongoDB. My journey in web development began with a deep
            curiosity for how things work, and it has evolved into a career
            where I continuously strive to learn and adapt to new challenges. I
            thrive in collaborative environments and enjoy solving complex
            problems to deliver high-quality solutions. Outside of coding, I
            enjoy staying active, exploring new technologies, and contributing
            to open-source projects.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

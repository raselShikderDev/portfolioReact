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
           Enthusiastic front-end developer with hands-on experience in HTML, CSS, JavaScript, React, and modern CSS frameworks like Tailwind CSS and Bootstrap. Passionate about creating responsive, visually appealing web applications. Proven ability to work with GitHub and third-party hosting for live deployments. Seeking a remote internship to further develop my skills and contribute to innovative projects.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

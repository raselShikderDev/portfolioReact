import { motion } from "framer-motion";
import { PROJECTS } from "../assets/index";

const Projects = () => {
  return (
    <div className="border-b border-neutral-800 py-20 lg:mb-36">
      <motion.h2
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0 }}
        className="text-4xl text-center"
      >
        Projects
      </motion.h2>
      <div className="my-20">
        {PROJECTS.map((project, index) => {
          return (
            <div
              key={index}
              className="w-full flex flex-row items-center justify-center flex-wrap mb-20 md:justify-center "
            >
              <motion.div
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0 }}
                className="w-full lg:w-1/4 sm:w-2/4 lg:mr-16"
              >
                <img
                  width={250}
                  height={150}
                  className=" rounded"
                  src={project.image}
                  alt={project.title}
                />
              </motion.div>
              <motion.div
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: 100, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0 }}
                className="w-full sm:w-2/4"
              >
                <h3 className="text-2xl font-medium ">{project.title}</h3>
                <p className="my-2 text-xl text-neutral-400 tracking-wide sm:text-lg">
                  {project.description}
                </p>
                <div className="flex my-5 gap-3 flex-wrap sm:gap-1">
                  {project.technologies.map((technologies, ind) => {
                    return (
                      <button
                        className="py-1 px-2 bg-neutral-900 text-purple-700 rounded-md "
                        key={ind}
                      >
                        {technologies}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;

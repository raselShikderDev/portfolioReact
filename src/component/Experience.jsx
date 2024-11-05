import { motion } from "framer-motion";
// import { EXPERIENCES } from "../assets/index";

const Experience = () => {
  return (
    <div className="border-b border-neutral-800 py-20 lg:mb-36">
      <motion.h2
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0 }}
        className="text-4xl text-center"
      >
        Experience
      </motion.h2>
      <div>
        <div className="mb-8 mt-20 py-5 flex flex-col lg:flex-row lg:justify-between lg:px-40">
          {/* Year Section */}
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0 }}
            className="w-full lg:w-1/4 flex t"
          >
            <p className="mb-2 text-xl text-neutral-400">Present</p>
          </motion.div>

          {/* Role, Description, Technologies Section */}
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0 }}
            className="w-full lg:w-3/4"
          >
            <h3 className="text-2xl mb-5 font-semibold md:text-xl">
              Front-End Developer -{" "}
              <span className="text-md text-purple-100 md:text-sm">
                Fiverr (Marketplace)
              </span>
            </h3>
            <p className="my-2 text-xl text-neutral-400 tracking-tighter md:text-lg">
              Freelancing on Fiverr as a Frontend Developer, creating responsive
              and visually engaging websites tailored to client needs.
              Experienced in delivering high-quality projects using HTML, CSS,
              JavaScript, and frameworks like React and Tailwind CSS
            </p>
            <div className="flex gap-2 flex-wrap">
              <button className="bg-neutral-900 text-lg font-medium text-purple-700 py-1 px-2 rounded md:text-sm">
                HTML
              </button>
              <button className="bg-neutral-900 text-lg font-medium text-purple-700 py-1 px-2 rounded md:text-sm">
                CSS
              </button>
              <button className="bg-neutral-900 text-lg font-medium text-purple-700 py-1 px-2 rounded md:text-sm">
                Javascript
              </button>
              <button className="bg-neutral-900 text-lg font-medium text-purple-700 py-1 px-2 rounded md:text-sm">
                React
              </button>
              <button className="bg-neutral-900 text-lg font-medium text-purple-700 py-1 px-2 rounded md:text-sm">
                TailwindCSS
              </button>
              <button className="bg-neutral-900 text-lg font-medium text-purple-700 py-1 px-2 rounded md:text-sm">
                Bootstrap
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      {/* <div>
        {EXPERIENCES.map((experience, index) => {
          const { technologies, description, company, role, year } = experience;
          return (
            <div
              key={index}
              className="mb-8 mt-20 py-5 flex flex-col lg:flex-row lg:justify-between lg:px-40"
            > */}
      {/* Year Section */}
      {/* <motion.div
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0 }}
                className="w-full lg:w-1/4 flex t"
              >
                <p className="mb-2 text-xl text-neutral-400">{year}</p>
              </motion.div> */}

      {/* Role, Description, Technologies Section */}
      {/* <motion.div
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: 100, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0 }}
                className="w-full lg:w-3/4"
              >
                <h3 className="text-2xl mb-5 font-semibold md:text-xl">
                  {role} -{" "}
                  <span className="text-md text-purple-100 md:text-sm">
                    {company}
                  </span>
                </h3>
                <p className="my-2 text-xl text-neutral-400 tracking-tighter md:text-lg">
                  {description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {technologies.map((tech, ind) => (
                    <button
                      className="bg-neutral-900 text-lg font-medium text-purple-700 py-1 px-2 rounded md:text-sm"
                      key={ind}
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default Experience;

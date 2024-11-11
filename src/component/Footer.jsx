import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="py-16">
      <motion.h2
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0 }}
        className="text-4xl text-center"
      >
        Get in Touch
      </motion.h2>
      <div className="flex flex-col my-16 items-center gap-6">
        <motion.p
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0 }}
          className="text-xl text-center"
        >
          keraniganj, Dhaka, Bangladesh
        </motion.p>
        {/* <motion.p
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0 }}
          className="text-xl text-center"
        >
          +8801772108026
        </motion.p> */}
        <motion.a
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0 }}
          className="text-xl text-center"
          href="tel:+8801772108026"
        >
          +8801772108026
        </motion.a>
        <a
          href="mailto:rasel.sikder777.rk@gmail.com"
          className="text-xl border-b "
        >
          rasel.sikder777.rk@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Footer;

import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
const About = () => {
  return (
    <>
      <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">
          About
          <span className="text-neutral-500"> Me</span>
        </h1>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 lg:p-8">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center"
            >
              <img src={aboutImg} className="rounded-2xl" alt="" />
            </motion.div>
          </div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 flex items-center lg:justify-start justify-center p-8"
          >
            <p className="my-2 max-w-xl py-2">{ABOUT_TEXT}</p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
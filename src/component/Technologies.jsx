import { RiReactjsLine } from "react-icons/ri";
import { TbBrandJavascript } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { motion } from "framer-motion";

const Technologies = () => {
  console.log("it is rendering");
  const iconsVariants = (duration) => ({
    initial: {
      y: -10,
    },
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
  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1.5 }}
      className="border-b border-neutral-800 pb-24"
    >
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconsVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbBrandJavascript className="text-6xl text-yellow-300" />
        </motion.div>
        <motion.div
          variants={iconsVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-6xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconsVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-6xl text-green-400" />
        </motion.div>
        <motion.div
          variants={iconsVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiExpress className="text-6xl text-yellow-200" />
        </motion.div>
        <motion.div
          variants={iconsVariants(7)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <IoLogoNodejs className="text-6xl text-green-400" />
        </motion.div>
        <motion.div
          variants={iconsVariants(8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaPython className="text-6xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconsVariants(9)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaJava className="text-6xl text-red-400" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Technologies;

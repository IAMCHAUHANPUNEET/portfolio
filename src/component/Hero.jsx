import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/kevinRushProfile.jpg";
import { delay, motion } from "framer-motion";
const Hero = () => {
  const container = (delay) => {
    return {
      hidden: {
        x: -100,
        opacity: 0,
      },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: delay,
        },
      },
    };
  };

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-cetner lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-14 text-4xl tracking-tight kg:mt-16 lg:text-8xl"
            >
              Puneet Chauhan
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 bg-clip-text text-4xl tracking-tight text-transparent "
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2max-w-xl  py-6"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="rounded"
              src={profilePic}
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import { CONTACT } from "../constants";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        inital={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="my-4"
        >
          Solan, Himachal Pradesh, India
        </motion.p>
        <motion.p className="my-4">+91 8894883147</motion.p>
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          href="#"
          className="border-b"
        >
          iamchauhanpuneet@gmail.com
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;

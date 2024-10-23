import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <motion.nav
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
      className="mb-20 flex items-center justify-between py-6"
    >
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-zinc-500 font-extrabold text-4xl">RQ</h1>
      </div>
      <div className="m-8 items-center justify-center text-2xl flex gap-4">
        <a 
        target="_blank"
        href="https://www.linkedin.com/in/muhammad-rifqi-413713281/"
        className="hover:bg-gray-400 hover:text-black text-4xl duration-700">
          <FaLinkedin />
        </a>
        <a target="_blank"
        href="https://www.instagram.com/rifqi.setiawann/"
        className="hover:bg-gray-400 hover:text-black text-4xl duration-700">
          <FaInstagram />
        </a>
        <a target="_blank"
        href="https://github.com/Rifqi-Setiawan"
        className="hover:bg-gray-400 hover:text-black text-4xl duration-700">
          <FaGithub />
        </a>
      </div>
    </motion.nav>
  );
};

export default NavBar;

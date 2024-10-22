import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
        <h1 className="text-zinc-500 font-extrabold text-4xl">RQ</h1>
        </div>
        <div className="m-8 items-center justify-center text-2xl flex gap-4">
            <FaLinkedin />
            <FaInstagram/>
            <FaGithub/>
        </div>
    </nav>
  )
}

export default NavBar
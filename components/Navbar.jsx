import Link from "next/link"
import { FcDocument } from "react-icons/fc";
import { FcPlus } from "react-icons/fc";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <Link href={"/"} className="text-white font-bold flex">
        <FcDocument size={24}/>
        <span className="px-2">My Todo web</span>
      </Link>
      <Link href={"/addTopic"}>
        {/* Add Topic */}
        <FcPlus size={24}/>
      </Link>
    </nav>
  )
}

export default Navbar
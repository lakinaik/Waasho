import React from "react";
import { IoMdTime } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebookF,FaPinterestP ,FaWhatsapp} from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

const TopNav = ({width, px}) => {
  return (
    <div className={`w-[${width}] mx-auto bg-slate-800 text-slate-400 py-3 px-${px} md:flex hidden justify-between items-center`}>
      <div className="details">
        <span className="me-3">
          <IoMdTime className="inline text-orange-500 font-bold text-xl mx-2" />
          <span>Monday to Saturday 9:00 to 6:00</span>
        </span>
        <Link>
          <BsFillTelephoneFill className="inline text-orange-500" />
          <span> +91 99299 92929</span>
        </Link>
      </div>
      <div className="social-links flex gap-3 text-lg items-center ">
        <Link>
          <FaFacebookF className="hover:text-white hover:scale-105 duration-300"/>
        </Link>
        <Link>
          <AiOutlineInstagram className="hover:text-white hover:scale-105 duration-300"/>
        </Link>
        <Link>
          <FaPinterestP className="hover:text-white hover:scale-105 duration-300"/>
        </Link>
        <Link>
          <FaWhatsapp className="hover:text-white hover:scale-105 duration-300"/>
        </Link>
      </div>
    </div>
  );
};

export default TopNav;

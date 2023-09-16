import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebookF,FaPinterestP ,FaWhatsapp} from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
import '../App.css'

const TopNav = ({px}) => {
  return (
    <div className={`max-w-full mx-auto bg-sky-700 px-${px} flex justify-between items-center text-white md:pe-20`}>
      <div className="details-topnav md:py-3 md:px-3 md:w-1/3 w-1/2 md:pe-8 md:p-4 py-2 px-2 md:ps-16">
        <Link>
          <BsFillTelephoneFill className="inline text-sky-300" />
          <p className="inline md:text-lg text-base"> +91 99299 92929</p>
        </Link>
      </div>
      <div className="flex md:justify-between justify-end w-1/2 lg:w-full">
      <div className="social-links md:flex hidden gap-3 text-lg items-center ">
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
      <div className="select-city text-black pe-2">
        <label htmlFor="selectCity" className="text-white font-semibold mx-2 md:text-xl text-sm hidden md:inline-block">Select City : </label>
        <select name="selectCity" id="selectCity" className="p-1 bg-sky-900 text-white md:border-2 border rounded-lg"> 
          <option value="">--select city--</option>
          <option value="Bhubaneswar">Bhubaneswar</option>
          <option value="Cuttack">Cuttack</option>
          <option value="Patna">Patna</option>
          <option value="Delhi">Delhi</option>
          <option value="Bengaluru">Bengaluru</option>
          <option value="Pune">Pune</option>
        </select>
      </div>
    </div>
    </div>

  );
};

export default TopNav;

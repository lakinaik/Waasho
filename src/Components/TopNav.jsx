import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../App.css";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import whatsapp from "../assets/whatsapp.png";
import linkedin from "../assets/linkedin.png";

const TopNav = ({ px }) => {
  return (
    <div
      className={`max-w-full mx-auto bg-sky-700 px-${px} flex justify-between items-center text-white md:pe-20`}
    >
      <div className="details-topnav md:py-3 md:px-3 md:w-1/3 w-1/2 md:pe-8 md:p-4 py-2 px-2 md:ps-16">
        <BsFillTelephoneFill className="inline text-sky-300" />
        <Link>
          <p className="inline md:text-lg text-base"> +91 89261 23232</p>
        </Link>
      </div>
      <div className="flex md:justify-between justify-end w-1/2 lg:w-full">
        <div className="social-links md:flex hidden gap-8 text-xl items-center ">
          <Link>
            <img src={facebook} alt="img"  className="w-8"/>
          </Link>
          <Link>
            <img src={instagram} alt="img"  className="w-8"/>
          </Link>
          <Link>
            <img src={whatsapp} alt="img"  className="w-8"/>
          </Link>
          <Link>
            <img src={linkedin} alt="img"  className="w-8"/>
          </Link>
        </div>
        <div className="select-city text-black pe-2">
          <label
            htmlFor="selectCity"
            className="text-white mx-2 text-lg hidden md:inline-block"
          >
            Select City :{" "}
          </label>
          <select
            name="selectCity"
            id="selectCity"
            className="p-1 bg-sky-900 text-white rounded-lg"
          >
            <option value="">--select city--</option>
            <option value="Bhubaneswar">Bhubaneswar</option>
            <option value="Cuttack">Cuttack</option>
            <option value="Patna">Patna</option>
            <option value="Delhi">Delhi</option>
            <option value="Bengaluru">Bengaluru</option>
            <option value="Pune">Pune</option>
            <option value="Pune">Mumbai</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TopNav;

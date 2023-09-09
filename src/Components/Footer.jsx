import React from "react";
import { Link } from "react-router-dom";
import { ImLocation } from "react-icons/im";
import { MdCall } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import {FaArrowRight} from 'react-icons/fa'
import Logo from "../assets/white_blue__logo_2.png";

import "../App.css";

const Footer = () => {
  return (
    <>
      <footer className="footer-section ">
        
        <div className="footer-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:p-6 px-4 py-3">
          <div>
            <div className="logo-wrapper relative">
              <img src={Logo} alt="logo" className="w-52" />
            </div>
            <div className="wrapper text-white">
              <p className="relative -top-10 text-lg text-slate-400">
                There are many vari of pass of lorem ipsum availab but the
                majority have suffered in some form by injected humour or words.
              </p>
            </div>
            <div className="social-links flex gap-4">
              <Link className="text-slate-300 text-2xl bg-blue-800 p-3 rounded-full duration-500 hover:bg-blue-400">
                <AiFillFacebook />
              </Link>
              <Link className="text-slate-300 text-2xl bg-blue-800 p-3 rounded-full duration-500 hover:bg-blue-400">
                <AiFillInstagram />
              </Link>
              <Link className="text-slate-300 text-2xl bg-blue-800 p-3 rounded-full duration-500 hover:bg-blue-400">
                <AiFillTwitterCircle />
              </Link>
              <Link className="text-slate-300 text-2xl bg-blue-800 p-3 rounded-full duration-500 hover:bg-blue-400">
                <AiFillLinkedin />
              </Link>
            </div>
          </div>
          <div className="md:mt-20 mt-3">
            <h2 className="md:text-2xl text-xl font-extrabold text-white">Quick Links</h2>
            <div className="inline-flex flex-col gap-1 text-slate-400 mt-4 ">
            <Link className="duration-500 hover:text-white text-lg md:text-xl">Home</Link>
            <Link className="duration-500 hover:text-white text-lg md:text-xl">Online Booking</Link>
            <Link className="duration-500 hover:text-white text-lg md:text-xl">Services</Link>
            <Link className="duration-500 hover:text-white text-lg md:text-xl">About</Link>
            <Link className="duration-500 hover:text-white text-lg md:text-xl">Contact us</Link>
            <Link className="duration-500 hover:text-white text-lg md:text-xl"></Link>
            </div>
          </div>
          <div className="md:mt-20 mt-2">
          <h2 className="md:text-2xl text-xl font-extrabold text-white">Contact</h2>
          <div className="inline-flex flex-col gap-2 mt-4">
            <Link className="text-slate-400 duration-500 hover:text-white md:text-xl text-lg"><ImLocation className="inline text-orange-500 text-xl font-bold me-1"/><span>lorewm 304, 498rybshdb,</span></Link>
            <Link className="text-slate-400 duration-500 hover:text-white md:text-xl text-lg"><AiOutlineMail className="inline text-orange-500 text-xl font-bold me-1"/><span>support@gmail.com</span></Link>
            <Link className="text-slate-400 duration-500 hover:text-white md:text-xl text-lg"><MdCall className="inline text-orange-500 text-xl font-bold me-1"/><span>+91 90893 09324</span></Link>
          </div>
          </div>
          <div className="md:mt-20 mt-3">
          <h2 className="md:text-2xl text-xl font-extrabold text-white">Newslatter</h2>
            <div>
              <p className="text-lg text-slate-400 mt-4">Subscribe to our newsletter for daily new and updates.</p>
              <form>
                <input type="text" name="email" id="email1" placeholder="Email" className="p-3 outline-0 mt-2"/>
                <button className="bg-blue-500 text-white p-3 font-semibold">Send <FaArrowRight className="inline"/></button>
              </form>
            </div>
          </div>
        </div>
        <div className="bottom-footer flex gap-8 flex-wrap items-center bg-[#02489d] p-4 md:w-[80%] w-[90%]">
    <p className="text-slate-400 text-base">Copyright © 2023 All Rights Reserved. Developed By DIGITAL DETA</p>
    <div>
      <Link className="text-slate-300 text-base font-semibold">Terms & Condition</Link>
      <Link className="text-slate-300 text-base font-semibold mx-2">Privacy Policy</Link>
    </div>
        </div>  
      </footer>
    </>
  );
};

export default Footer;

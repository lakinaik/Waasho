import React from "react";
import { Link } from "react-router-dom";
import service1 from '../assets/service-1.jpg'
import service2 from '../assets/service-2.jpg'
import service3 from '../assets/service-3.jpg'
// import serviceIcon1 from '../assets/service-icon-1.png'
// import serviceIcon2 from '../assets/service-icon-2.png'
// import serviceIcon3 from '../assets/service-icon-3.png'
import {AiOutlinePlus} from 'react-icons/ai'
import Button from '../Components/Button'

import '../App.css'



const Service = () => {
  return (
    <>
      <section className="container max-w-full mx-auto md:p-8 px-2 py-6 mt-8 text-teal-950 bg-slate-300">
        <div className="heading text-center">
          <h4 className="md:text-lg font-medium text-sky-600 relative after:content-[''] after:h-[2px] after:w-14 after:bg-blue-500 after:absolute after:top-1/2 after:ms-1">
            What We're Offering
          </h4>
          <h1 className="md:text-5xl text-xl font-bold my-4">Services We're Provding <br /> to Customers</h1>
        </div>
        <div className="flex justify-center items-center">
        <div className="service-wrapper max-w-[1200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto my-8">
            <div className="service shadow-md p-4 bg-white relative ">
              <div className="img-wrapper relative overflow-hidden">
                <img src={service1} alt="img"  className="object-cover w-full"/>
                <Link className="overlay m-4 absolute top-0 bottom-0 left-0 right-0 z-20 flex justify-center items-center bg-[#192f57cc]">
                  <AiOutlinePlus className="z-30 text-4xl font-bold text-white"/></Link>
              </div>
              <div className="text-wrapper relative top-0 m-0 text-center">
              {/* <div className="service-icons w-32 h-32 rounded-full bg-white flex justify-center items-center p-8 z-30 mx-auto relative top-[-100px]">
                  <img src={serviceIcon1} alt="icon" className="object-cover"/>
                </div> */}
                <h2 className="text-2xl font-bold my-2">Auto Detailing</h2>
                <p className="text-lg">There are not many of passages of lorem ipsum avail isn alteration donationa in form.</p>
                <Button text={'Learn more'} url={'/'}/>
              </div>
            
            </div>
            <div className="service shadow-md p-4 bg-white relative ">
              <div className="img-wrapper relative overflow-hidden">
                <img src={service2} alt="img"  className="object-cover w-full"/>
                <Link className="overlay m-4 absolute top-0 bottom-0 left-0 right-0 z-20 flex justify-center items-center bg-[#192f57cc]">
                  <AiOutlinePlus className="z-30 text-4xl font-bold text-white"/></Link>
              </div>
              <div className="text-wrapper relative top-0 m-0 text-center">
              {/* <div className="service-icons w-32 h-32 rounded-full bg-white flex justify-center items-center p-8 z-30 mx-auto relative top-[-100px]">
                  <img src={serviceIcon1} alt="icon" className="object-cover"/>
                </div> */}
                <h2 className="text-2xl font-bold my-2">Full Service Wash</h2>
                <p className="text-lg">There are not many of passages of lorem ipsum avail isn alteration donationa in form.</p>
                <Button text={'Learn more'} url={'/'}/>
              </div>
            
            </div>
            <div className="service shadow-md p-4 bg-white relative ">
              <div className="img-wrapper relative overflow-hidden">
                <img src={service3} alt="img"  className="object-cover w-full"/>
                <Link className="overlay m-4 absolute top-0 bottom-0 left-0 right-0 z-20 flex justify-center items-center bg-[#192f57cc]">
                  <AiOutlinePlus className="z-30 text-4xl font-bold text-white"/></Link>
              </div>
              <div className="text-wrapper relative top-0 m-0 text-center">
              {/* <div className="service-icons w-32 h-32 rounded-full bg-white flex justify-center items-center p-8 z-30 mx-auto relative top-[-100px]">
                  <img src={serviceIcon1} alt="icon" className="object-cover"/>
                </div> */}
                <h2 className="text-2xl font-bold my-2">Express Interior</h2>
                <p className="text-lg">There are not many of passages of lorem ipsum avail isn alteration donationa in form.</p>
                <Button text={'Learn more'} url={'/'}/>
              </div>
            
            </div>
        </div>
        </div>

      </section>
    </>
  );
};

export default Service;

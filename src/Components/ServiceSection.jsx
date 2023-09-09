import React from "react";
import service1 from '../assets/service-1.jpg'
import service2 from '../assets/service-2.jpg'
import service3 from '../assets/service-3.jpg'
import serviceIcon1 from '../assets/service-icon-1.png'
import serviceIcon2 from '../assets/service-icon-2.png'
import serviceIcon3 from '../assets/service-icon-3.png'

import '../App.css'
import ServiceCard from "./ServiceCard";



const ServiceSection = () => {
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
           
           <ServiceCard sImg={service1} url={'/service'} sIcon={serviceIcon1} title={"Full Service Wash"} description={"There are not many of passages of lorem ipsum avail isn alteration donationa in form."}/>
           <ServiceCard sImg={service2} url={'/service'} sIcon={serviceIcon2} title={"Full Service Wash"} description={"There are not many of passages of lorem ipsum avail isn alteration donationa in form."}/>
           <ServiceCard sImg={service3} url={'/service'} sIcon={serviceIcon3} title={"Full Service Wash"} description={"There are not many of passages of lorem ipsum avail isn alteration donationa in form."}/>
        
        </div>
        </div>

      </section>
    </>
  );
};

export default ServiceSection;

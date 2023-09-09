import React, { useEffect } from "react";

import Footer from "./Footer";
import "../App.css";
import Bredcrumb from "./Bredcrumb";
import Header from "./Header";
import Vehicle from "./Vehicle";

import microbus from "../assets/minibus.png";
import minicar from "../assets/minibus.png";
import sedan from "../assets/sedan.png";
import suv from "../assets/suv.png";
import Calendar from "./Calendar";
import TimeSlot from "./TimeSlot";

const Booking = () => {
  const creatYears = () => {
    let years = [];
    let startYear = 2010;
    let currentYear = new Date().getFullYear();
    for (let year = startYear; year <= currentYear; year++) {
      years.push(year);
    }
  };
  useEffect(() => {
    creatYears();
  });
  return (
    <>
      <Header />
      <div>
        <Bredcrumb page={"Online Booking"} />
      </div>
      <section className="booking md:mt-20 my-4 md:px-16 px-4">
        <div className="Choose-car ">
          <div className="flex justify-between flex-wrap md:flex-row flex-col-reverse">
            <div className="vehicle">
              <p className="text-xl font-medium text-sky-600 relative after:content-[''] after:h-[2px] after:w-14 after:bg-blue-500 after:absolute after:top-1/2 after:ms-1">
                Choose car
              </p>
              <h2 className="md:text-5xl text-2xl font-semibold mb-3 text-cyan-950">
                Select Vehicle Type
              </h2>
            </div>
            <div className="step my-4">
              <div className="bg-blue-600 text-white text-4xl rounded-full w-20 h-20 grid place-items-center">
                1
              </div>
            </div>
          </div>
          <div className="vehicles grid md:grid-cols-4 grid-cols-2 mx-auto gap-3">
            <Vehicle text={"Microbus"} img={microbus} />
            <Vehicle text={"Minivan Car"} img={minicar} />
            <Vehicle text={"Sedan Car"} img={sedan} />
            <Vehicle text={"SUV car"} img={suv} />
          </div>
        </div>
        <div className="date-time md:mt-14 mt-8">
          <div className="flex justify-between flex-wrap md:flex-row flex-col-reverse">
            <div className="dates">
              <p className="text-xl font-medium text-sky-600 relative after:content-[''] after:h-[2px] after:w-14 after:bg-blue-500 after:absolute after:top-1/2 after:ms-1">
                Select Your Booking Date
              </p>
              <h2 className="md:text-5xl text-2xl font-semibold mb-3 text-cyan-950">
                Booking Date
              </h2>
            </div>
            <div className="step my-4">
              <div className="bg-blue-600 text-white md:text-4xl text-xl rounded-full md:w-20 md:h-20 w-16 h-16 grid place-items-center">
                2
              </div>
            </div>
          </div>
          <div className="calendar">
            <div className="flex gap-3">
              <Calendar />
              <TimeSlot />
            </div>
          </div>
        </div>
        {/* ================User details============ */}
        <div className="details">
          <div className="flex justify-between flex-wrap md:flex-row flex-col-reverse">
            <div className="user-details">
              <p className="text-xl font-medium text-sky-600 relative after:content-[''] after:h-[2px] after:w-14 after:bg-blue-500 after:absolute after:top-1/2 after:ms-1">
                Enter your details
              </p>
              <h2 className="md:text-5xl text-2xl font-semibold mb-3 text-cyan-950">
                User details
              </h2>
            </div>
            <div className="step my-4">
              <div className="bg-blue-600 text-white md:text-4xl text-xl rounded-full md:w-20 md:h-20 w-16 h-16 grid place-items-center">
                3
              </div>
            </div>
          </div>
          <form action="">
            <div className="grid gap-4">
              <input
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Enter Your Fullname"
                className="bg-slate-300 p-3 outline-0 text-base text-black"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                className="bg-slate-300 p-3 outline-0 text-base text-black"
              />
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter Your Phone Number"
                className="bg-slate-300 p-3 outline-0 text-base text-black"
              />
              <select
                name="modelYear"
                id="modelYear"
                className="bg-slate-300 p-3 outline-0 text-base text-slate-500"
              >
                <option value="">Vehicle Model Year</option>
              </select>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter Vehicle Company"
                className="bg-slate-300 p-3 outline-0 text-base text-black"
              />
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter Vehicle Model Name"
                className="bg-slate-300 p-3 outline-0 text-base text-black"
              />
              <textarea
                name="message"
                id="message"
                rows="10"
                placeholder="Message"
                className="bg-slate-300 p-3 outline-0 text-base text-black md:col-span-3"
              ></textarea>
            </div>
            <button className="bg-blue-500 text-white my-4 px-4 py-3 font-semibold duration-300 hover:bg-black">
              Confirm Booking
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Booking;

import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Bredcrumb from "../Components/Bredcrumb";
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { PiPhoneCall } from "react-icons/pi";
import { ImLocation } from "react-icons/im";

const Contact = () => {
  return (
    <>
      <Header />
      <Bredcrumb page={"Contact"} />
      <section className="contact mt-20 ">
        <div className="header my-6 md:px-20 px-4">
          <p className="text-xl font-medium text-sky-600 relative after:content-[''] after:h-[2px] after:w-14 after:bg-blue-500 after:absolute after:top-1/2 after:ms-1">
            Write a Message
          </p>
          <h2 className="md:text-5xl text-2xl font-semibold my-3 text-cyan-950">
            We're Connected to Help You <br /> All the Time
          </h2>
        </div>
        <div className="mx-auto grid md:grid-cols-2 gap-4 md:px-20 px-4 md:my-8 my-6">
          <div>
            <p className="text-xl text-slate-500 mb-8">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour.
            </p>
            <Link className="text-xl font-semibold flex md:items-center text-slate-600 my-4">
              <ImLocation className="inline text-2xl" />
              86 Road Broklyn Street, 600 New York, USA
            </Link>
            <div>
              <Link
                className="text-xl text-slate-500"
                to={"mailto:someone@example.com"}
              >
                <AiOutlineMail className="inline text-xl me-2 text-blue-600" />
                <span>needhelpwaasho@gmail.com</span>
              </Link>
              <br />
              <Link
                className="text-xl text-slate-500 my-3"
                to={"tel:+4733378901"}
              >
                <PiPhoneCall className="inline text-xl me-2 text-blue-600" />
                <span>+91 83453947984</span>
              </Link>
            </div>
          </div>
          <div>
            <form action="">
              <h2 className="text-center text-blue-950 text-2xl font-semibold mb-4">Get in touch</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder="Your Fullname"
                  className="p-3 outline-0 bg-slate-300 text-black"
                />

                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  className="p-3 outline-0 bg-slate-300 text-black"
                />

                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone number"
                  className="p-3 outline-0 bg-slate-300 text-black"
                />
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  className="p-3 outline-0 bg-slate-300 text-black"
                />

                <textarea
                  name="comment"
                  id="comment"
                  placeholder="Your Comment"
                  className="p-3 outline-0 bg-slate-300 text-black md:col-span-2"
                ></textarea>
              </div>

              <div className="flex justify-center my-8">
                <button className=" bg-sky-500 border-2 border-sky-500 rounded-lg px-5 py-2 duration-300 hover:bg-transparent hover:border-2 hover:border-sky-500 text-white hover:text-black cursor-pointer">
                  Sent message
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="map-details h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.2942735161682!2d85.8524559!3d20.28808310000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190b21e89b3d25%3A0x30714914f5a1d4f4!2sDigitalDeta!5e0!3m2!1sen!2sin!4v1693639240833!5m2!1sen!2sin"
            title="map"
            className="h-full w-full"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;

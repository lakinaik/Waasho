import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="contact mt-20">
        <h2 className="text-center md:text-4xl text-2xl font-semibold mt-14">
          Get in touch
        </h2>
        <div className="max-w-[900px] mx-auto grid md:grid-cols-2 gap-4 p-4">
          <div className="map-details">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.2942735161682!2d85.8524559!3d20.28808310000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190b21e89b3d25%3A0x30714914f5a1d4f4!2sDigitalDeta!5e0!3m2!1sen!2sin!4v1693639240833!5m2!1sen!2sin"
              title="map"
              className="h-full w-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="shadow-lg p-3 pt-0">
            <form action="">
              <label htmlFor="fullname" className="text-lg font-medium">
                Full name:{" "}
              </label>
              <br />
              <input
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Enter your full name"
                className="border-2 border-sky-500 outline-0 p-2 rounded-md w-full mb-4"
              />
              <br />
              <label htmlFor="email" className="text-lg font-medium">
                Email address:{" "}
              </label>
              <br />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                className="border-2 border-sky-500 outline-0 p-2 rounded-md w-full mb-4"
              />
              <label htmlFor="phone" className="text-lg font-medium">
                Phone number:{" "}
              </label>
              <br />
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
                className="border-2 border-sky-500 outline-0 p-2 rounded-md w-full mb-4"
              />
              <label htmlFor="address" className="text-lg font-medium">
                Address:{" "}
              </label>
              <br />
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Enter your address"
                className="border-2 border-sky-500 outline-0 p-2 rounded-md w-full mb-4"
              />
              <label htmlFor="message" className="text-lg font-medium">
                Message:{" "}
              </label>
              <br />
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Message"
                className="border-2 border-sky-500 outline-0 p-2 rounded-md w-full mb-4"
              ></textarea>
              <div className="flex justify-center">
              <button className=" bg-sky-500 border-2 border-sky-500 rounded-lg px-5 py-2 duration-300 hover:bg-transparent hover:border-2 hover:border-sky-500 text-white hover:text-black cursor-pointer">
                Submit
              </button>
              </div>
             
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;

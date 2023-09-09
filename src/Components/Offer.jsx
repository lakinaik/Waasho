import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import Button from "./Button";

const Offer = () => {
  return (
    <>
      <section className="offer-section mb-8 md:p-8 px-2 py-6">
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto text-white">
              <div className="heading text-white">
                <h4 className="md:text-lg font-medium text-sky-600 relative after:content-[''] after:h-[2px] after:w-14 after:bg-blue-500 after:absolute after:top-1/2 after:ms-1">
                  What We're Offering
                </h4>
                <h1 className="md:text-4xl text-xl font-bold my-4">
                  Premium Car Washing Center
                </h1>
                <Button text={'Appointment'} url={'/booking'}/>
            
            </div>
              <div className="offer">
                <p className="text-lg mb-3"><BsCheckCircleFill className="inline me-1 text-blue-500"/>Platinum Exterior Wash</p>
                <p className="text-lg mb-3"><BsCheckCircleFill className="inline me-1 text-blue-500"/>24-Hour Rain Guarantee</p>
                <p className="text-lg mb-3"><BsCheckCircleFill className="inline me-1 text-blue-500"/>Door Panels / Seats Wiped</p>
                <p className="text-lg mb-3"><BsCheckCircleFill className="inline me-1 text-blue-500"/>Super Wash</p>
                <p className="text-lg mb-3"><BsCheckCircleFill className="inline me-1 text-blue-500"/>Hard Surfaces Cleaned</p>
                <p className="text-lg mb-3"><BsCheckCircleFill className="inline me-1 text-blue-500"/>Thorough Cleaning of Dash</p>
              </div>
              <div className="offer">
                <p className="text-lg mb-3"><BsCheckCircleFill className="inline me-1 text-blue-500"/>
Rubber Mats Washed</p>
                <p className="text-lg mb-3"><BsCheckCircleFill className="inline me-1 text-blue-500"/>24-Hour Rain Guarantee</p>
                <p className="text-lg mb-3"><BsCheckCircleFill className="inline me-1 text-blue-500"/>Tire Shine</p>
                <p className="text-lg mb-3"><BsCheckCircleFill className="inline me-1 text-blue-500"/>Engine Wash</p>
                <p className="text-lg mb-3"><BsCheckCircleFill className="inline me-1 text-blue-500"/>
Rim Cleaner x 2</p>
                <p className="text-lg mb-3"><BsCheckCircleFill className="inline me-1 text-blue-500"/>Interior Polish</p>
              </div>
              <div className="offer">
                <p className="text-lg mb-3"><BsCheckCircleFill className="inline me-1 text-blue-500"/>Dashboard Cleaning</p>
                <p className="text-lg mb-3"><BsCheckCircleFill className="inline me-1 text-blue-500"/>Exterior Shine</p>
                <p className="text-lg mb-3"><BsCheckCircleFill className="inline me-1 text-blue-500"/>Auto Detailing</p>
                <p className="text-lg mb-3"><BsCheckCircleFill className="inline me-1 text-blue-500"/>Full Car Service</p>
                <p className="text-lg mb-3"><BsCheckCircleFill className="inline me-1 text-blue-500"/>All Cars Wash</p>
                <p className="text-lg mb-3"><BsCheckCircleFill className="inline me-1 text-blue-500"/>Best Quality</p>
              </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Offer;

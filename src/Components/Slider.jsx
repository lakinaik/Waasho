import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import slide1 from '../assets/slide-1.jpg'
import slide2 from '../assets/slide-2.jpg'
import slide3 from '../assets/slide-3.jpg'

import Button from "./Button";
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'

const Slider = () => {
  return (
    <section className="max-w-full relative">
      <Carousel 
        autoPlay={true}
        dynamicHeight={false}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        renderArrowPrev={(clickHandler, hasPrev)=>{
        <div onClick={clickHandler} 
        className="absolute w-60 h-60 bg-red-900 right-10 bottom-7 z-50"
        >
            <FaAngleLeft/>
        </div>
        }}
        renderArrowNext={(clickHandler, hasNext)=>{
        <div onClick={clickHandler} 
        className="absolute w-60 h-60 bg-red-900 right-10 bottom-7 z-50"
        >
            <FaAngleRight/>
        </div>
        }}
      >
        <div className="slide z-0 h-[360px] md:h-screen w-full flex justify-center items-center relative overflow-hidden">
          <img
            src={slide1}
            alt=""
            className="h-full"
          />
          <div className="overlay bg-gradient-to-b bg-[#0b0816cc] z-10 absolute w-full h-[100%]"></div>
          <div className="container z-20 absolute text-white mx-auto max-w-[900px] mt-14 px-6 text-wrapper">
            <h2 className="md:text-6xl text-xl font-bold">
            Car Spa Services For Your Cars
            </h2>
            <p className="text-slate-300 md:my-6 text-xl">Imagine driving down the street in a car that glistens in the sunlight, turning heads at every corner.</p>
            <Button text={'Book now'} url={'/booking'}/>
          </div>
        </div>
        <div className="slide z-0 md:h-screen h-[360px] w-full flex justify-center items-center relative overflow-hidden">
          <img
             src={slide2}
            alt=""
          className="h-full"
          />
          <div className="overlay bg-gradient-to-b bg-[#0b0816cc] z-10 absolute w-full h-[100%]"></div>
          <div className="container z-20 absolute text-white mx-auto max-w-[900px] mt-14 px-6 text-wrapper">
            <h2 className="md:text-6xl text-xl font-bold">
            Book Your Car Wash Services
            </h2>
            <p className="text-slate-300 md:my-6 text-xl">Our dedication to excellence has not gone unnoticed</p>
            <Button text={'Book now'} url={'/booking'}/>
          </div>
        </div>
        <div className="slide z-0  md:h-screen h-[360px] w-full flex justify-center items-center relative overflow-hidden">
          <img
             src={slide3}
            alt=""
            className="h-full"
          />
          <div className="overlay bg-gradient-to-b bg-[#0b0816cc] z-10 absolute w-full h-[100%]"></div>
           <div className="container z-20 absolute text-white mx-auto max-w-[900px] mt-14 px-6 text-wrapper">
            <h2 className="md:text-6xl text-xl font-bold">
            🏆 Award-Winning Excellence, Every Wash
            </h2>
            <p className="text-slate-300 md:my-6 text-xl">Imagine driving down the street in a car that glistens in the sunlight, turning heads at every corner.</p>
            <Button text={'Book now'} url={'/booking'}/>
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default Slider;

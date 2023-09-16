import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import slide1 from '../assets/slide-1.jpg'
import slide2 from '../assets/slide-2.jpg'
import slide3 from '../assets/slide-3.jpg'

import Button from "./Button";
import SlideCard from "./SlideCard";
const Slider = () => {
  const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      }
    };
  return (
    <section className="max-w-full relative">
      <Carousel 
      showDots={false}
      responsive={responsive}
      autoPlay={true}
      // autoPlaySpeed={1000}
      infinite={true}
      >
       

    <SlideCard img={slide1} text={"Waterless Car Wash For Your Cars"} desc={"Imagine driving down the street in a car that glistens in the sunlight, turning heads at every corner."}/>
    <SlideCard img={slide1} text={"Waterless Car Wash For Your Cars"} desc={"Imagine driving down the street in a car that glistens in the sunlight, turning heads at every corner."}/>
    <SlideCard img={slide1} text={"Waterless Car Wash For Your Cars"} desc={"Imagine driving down the street in a car that glistens in the sunlight, turning heads at every corner."}/>

      </Carousel>
    </section>
  );
};

export default Slider;

import React from 'react'
import Button from './Button'


const SlideCard = ({img,text,desc}) => {
  return (
    <>
    <div className="slide z-0 w-full flex justify-center items-center text-center relative overflow-hidden md:h-[500px]">
          <img
            src={img}
            alt=""
            className="w-full"
          />
          <div className="overlay bg-gradient-to-b bg-[#0b0816cc] z-10 absolute w-full h-[100%]"></div>
          <div className="container z-20 absolute text-white mx-auto max-w-[900px] mt-14 px-6 text-wrapper">
            <h2 className="md:text-6xl text-xl font-bold">
            {text}
            </h2>
            <p className="text-slate-300 md:my-6 text-xl"> {desc}</p>
            <Button text={'Book now'} url={'/booking'}/>
          </div>
        </div>
    </>
  )
}

export default SlideCard
import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import {AiOutlinePlus} from 'react-icons/ai'



const ServiceCard = ({sImg,url,sIcon,title,description,btnUrl}) => {
  return (
    <>
     <div className="service shadow-md p-4 bg-white text-black relative">
              <div className="img-wrapper relative overflow-hidden">
                <img src={sImg} alt="img"  className="object-cover w-full"/>
                <Link to={url} className="overlay m-4 absolute top-0 bottom-0 left-0 right-0 z-20 flex justify-center items-center bg-[#192f57cc]">
                  <AiOutlinePlus className="z-30 text-4xl font-bold text-white"/></Link>
              </div>
              <div className="text-wrapper relative top-0 m-0 text-center">
              <div className="service-icons w-28 h-28 bg-white rounded-full flex justify-center items-center p-5 z-30 mx-auto absolute top-[-120px] sm:left-[33%] left-[334%]">
                  <img src={sIcon} alt="icon" className="object-cover relative bottom-1 left-1"/>
                </div>
                <h2 className="text-2xl font-bold mt-16">{title}</h2>
                <p className="text-base md:h-44">{description}</p>
                <div className=' mt-4'>
                <Button text={'Learn more'} url={btnUrl}/>
                </div>
              </div>
            
            </div>
    </>
  )
}

export default ServiceCard
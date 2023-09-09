import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import ServiceCard from '../Components/ServiceCard'
import Bredcrumb from '../Components/Bredcrumb'
import service1 from '../assets/service-1.jpg'
import service2 from '../assets/service-2.jpg'
import service3 from '../assets/service-3.jpg'
import serviceIcon1 from '../assets/service-icon-1.png'
import serviceIcon2 from '../assets/service-icon-2.png'
import serviceIcon3 from '../assets/service-icon-3.png'


const Services = () => {
  return (
    <>
    <Header/>
    <Bredcrumb page={'Services'}/>
    <section className="services-wrapper">
    <div className="service-wrapper max-w-[1200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto my-8">
           
           <ServiceCard sImg={service1} url={'/service'} sIcon={serviceIcon1} title={"Full Service Wash"} description={"There are not many of passages of lorem ipsum avail isn alteration donationa in form."}/>
           <ServiceCard sImg={service2} url={'/service'} sIcon={serviceIcon2} title={"Full Service Wash"} description={"There are not many of passages of lorem ipsum avail isn alteration donationa in form."}/>
           <ServiceCard sImg={service3} url={'/service'} sIcon={serviceIcon3} title={"Full Service Wash"} description={"There are not many of passages of lorem ipsum avail isn alteration donationa in form."}/>
        
        </div>
    </section>
    <Footer/>
    </>
  )
}

export default Services
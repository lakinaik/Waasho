import React from 'react'
import Slider from '../Components/Slider'
import AboutSection from '../Components/AboutSection'
import Service from '../Components/ServiceSection'
import Header from '../Components/Header'
import Offer from '../Components/Offer'
import BookingWrapper from '../Components/BookingWrapper'
import Faq from '../Components/Faq'
import Quality from '../Components/Quality'
import Footer from '../Components/Footer'
import PackageWrapper from '../Components/PackageWrapper'
import TopNav from '../Components/TopNav'
import Navbar from '../Components/Navbar'
import TrendingOffers from '../Components/TrendingOffers'
import WhyChooseUs from '../Components/WhyChooseUs'
import Brands from '../Components/Brands'

const Home = () => {

  return (
    <>
      {/* <Header /> */}
      <TopNav/>
      <Navbar/>
      <Slider />
      <TrendingOffers/>
      {/* <AboutSection /> */}
      <Service />
      <Offer />
      <PackageWrapper/>
      <WhyChooseUs/>
      {/* <BookingWrapper /> */}
      <Faq />
      {/* <Quality /> */}
      <Brands/>
      <Footer />
    </>
  )
}

export default Home
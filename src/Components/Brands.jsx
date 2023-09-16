import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Brands = () => {
    const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 7,
        slidesToSlide: 1 // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
        slidesToSlide: 1 // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      }
    };

  return (
    <>
      <div className="top-offers-wrapper my-7 max-w-1000px">
        <div className="section-heading-wrapper">
          <h2 className="text-4xl font-bold text-center treding-heading">
            We Service Most Brands
          </h2>
        </div>

        <div className="carousel">
          <Carousel
            className="relative px-10 mt-14"
            showDots={false}
            responsive={responsive}
            autoPlay={true}
            // autoPlaySpeed={1000}
            infinite={true}
          >
          <div className='w-36 mx-12 border hover:shadow-lg duration-300 rounded-full mt-4'>
            <img src="https://fixigo.in/FixigoAssets2023/images/make_logo/bmw.png" alt="" />
          </div>
          <div className='w-36 mx-8 border hover:shadow-lg duration-300 rounded-full mt-4'>
            <img src="https://fixigo.in/FixigoAssets2023/images/make_logo/audi.png" alt="" />
          </div>
          <div className='w-36 mx-8 border hover:shadow-lg duration-300 rounded-full mt-4'>
            <img src="https://fixigo.in/FixigoAssets2023/images/make_logo/mercedes.png" alt="" />
          </div>
          <div className='w-36 mx-8 border hover:shadow-lg duration-300 rounded-full mt-4'>
            <img src="https://fixigo.in/FixigoAssets2023/images/make_logo/landrover.png" alt="" />
          </div>
          <div className='w-36 mx-8 border hover:shadow-lg duration-300 rounded-full mt-4'>
            <img src="https://fixigo.in/FixigoAssets2023/images/make_logo/jaguar.png" alt="" />
          </div>
          <div className='w-36 mx-8 border hover:shadow-lg duration-300 rounded-full mt-4'>
            <img src="https://fixigo.in/FixigoAssets2023/images/make_logo/mahendra2.png" alt="" />
          </div>
          <div className='w-36 mx-8 border hover:shadow-lg duration-300 rounded-full mt-4'>
            <img src="https://fixigo.in/FixigoAssets2023/images/make_logo/mitsubishi.png" alt="" />
          </div>
          <div className='w-36 mx-8 border hover:shadow-lg duration-300 rounded-full mt-4'>
            <img src="https://fixigo.in/FixigoAssets2023/images/make_logo/mg.png" alt="" />
          </div>
          <div className='w-36 mx-8 border hover:shadow-lg duration-300 rounded-full mt-4'>
            <img src="https://fixigo.in/FixigoAssets2023/images/make_logo/ssangyong.png" alt="" />
          </div>
          <div className='w-36 mx-8 border hover:shadow-lg duration-300 rounded-full mt-4'>
            <img src="https://fixigo.in/FixigoAssets2023/images/make_logo/volvo.png" alt="" />
          </div>
          <div className='w-36 mx-8 border hover:shadow-lg duration-300 rounded-full mt-4'>
            <img src="https://fixigo.in/FixigoAssets2023/images/make_logo/jeep.png" alt="" />
          </div>
          <div className='w-36 mx-8 border hover:shadow-lg duration-300 rounded-full mt-4'>
            <img src="https://fixigo.in/FixigoAssets2023/images/make_logo/skoda.png" alt="" />
          </div>
          <div className='w-36 mx-8 border hover:shadow-lg duration-300 rounded-full mt-4'>
            <img src="https://fixigo.in/FixigoAssets2023/images/make_logo/fiat.png" alt="" />
          </div>
          <div className='w-36 mx-8 border hover:shadow-lg duration-300 rounded-full mt-4'>
            <img src="https://fixigo.in/FixigoAssets2023/images/make_logo/datsun.png" alt="" />
          </div>
          <div className='w-36 mx-8 border hover:shadow-lg duration-300 rounded-full mt-4'>
            <img src="https://fixigo.in/FixigoAssets2023/images/make_logo/volkswagen.png" alt="" />
          </div>
          <div className='w-36 mx-8 border hover:shadow-lg duration-300 rounded-full mt-4'>
            <img src="https://fixigo.in/FixigoAssets2023/images/make_logo/chevrolet.png" alt="" />
          </div>
          <div className='w-36 mx-8 border hover:shadow-lg duration-300 rounded-full mt-4'>
            <img src="https://fixigo.in/FixigoAssets2023/images/make_logo/nissan.png" alt="" />
          </div>
          <div className='w-36 mx-8 border hover:shadow-lg duration-300 rounded-full mt-4'>
            <img src="https://fixigo.in/FixigoAssets2023/images/make_logo/renault.png" alt="" />
          </div>
          <div className='w-36 mx-8 border hover:shadow-lg duration-300 rounded-full mt-4'>
            <img src="https://fixigo.in/FixigoAssets2023/images/make_logo/ford.png" alt="" />
          </div>
          <div className='w-36 mx-8 border hover:shadow-lg duration-300 rounded-full mt-4'>
            <img src="https://fixigo.in/FixigoAssets2023/images/make_logo/mahendra.png" alt="" />
          </div>
          <div className='w-36 mx-8 border hover:shadow-lg duration-300 rounded-full mt-4'>
            <img src="https://fixigo.in/FixigoAssets2023/images/make_logo/hyundai.png" alt="" />
          </div>
          <div className='w-36 mx-8 border hover:shadow-lg duration-300 rounded-full mt-4'>
            <img src="https://fixigo.in/FixigoAssets2023/images/make_logo/honda.png" alt="" />
          </div>
          <div className='w-36 mx-8 border hover:shadow-lg duration-300 rounded-full mt-4'>
            <img src="https://fixigo.in/FixigoAssets2023/images/make_logo/tyota.png" alt="" />
          </div>
          <div className='w-36 mx-8 border hover:shadow-lg duration-300 rounded-full mt-4'>
            <img src="https://fixigo.in/FixigoAssets2023/images/make_logo/tata.png" alt="" />
          </div>
          <div className='w-36 mx-8 border hover:shadow-lg duration-300 rounded-full mt-4'>
            <img src="https://fixigo.in/FixigoAssets2023/images/make_logo/suzuki.png" alt="" />
          </div>
          <div className='w-36 mx-8 border hover:shadow-lg duration-300 rounded-full mt-4'>
            <img src="https://fixigo.in/FixigoAssets2023/images/make_logo/citroen.png" alt="" />
          </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Brands
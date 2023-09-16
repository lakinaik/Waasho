import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const TrendingOffers = () => {
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
    <>
      <div className="top-offers-wrapper my-7 w-1000px">
        <div className="section-heading-wrapper">
          <h2 className="text-4xl font-bold text-center treding-heading">
            Top Trending Offer
          </h2>
        </div>

        <div className="carousel">
          <Carousel
            className="relative"
            showDots={true}
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={1000}
            infinite={true}
          >
            <div className="lg:w-[1100px] mx-auto">
              <img
                src="https://fixigo.in/FixigoAssets2023/images/wheel_care%20services.png"
                alt=""
              />
            </div>
            <div className="lg:w-[1100px] mx-auto">
              <img
                src="https://fixigo.in/FixigoAssets2023/images/car_service.png"
                alt=""
              />
            </div>
            <div className="lg:w-[1100px] mx-auto">
              <img
                src="https://fixigo.in/FixigoAssets2023/images/car_acservice.png"
                alt=""
              />
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default TrendingOffers;

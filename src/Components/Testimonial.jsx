import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Testimonial = () => {
  return (
    <>
      <section className="testimonial my-10 p-4 max-w-full">
        <h2 className="text-4xl text-center my-4">Testimonial</h2>
        <div className="carousel-container">
            <Carousel
              autoPlay={true}
              dynamicHeight={false}
              infiniteLoop={true}
              showStatus={false}
              showThumbs={false}
              showArrows={false}
              showIndicators= {false}
              swipeable= {true}
            >
             <div className="select-none max-w-full overflow-hidden">
              <div className="img-box w-40 h-40 rounded-full my-8 overflow-hidden mx-auto">
              <img src="https://img.freepik.com/free-photo/indian-businessman-with-his-white-car_496169-2889.jpg?size=626&ext=jpg&uid=R114616714&ga=GA1.2.643624295.1693064507&semt=sph" className="" alt="img" />
              </div>
              <div className=" mx-auto overflow-hidden">
                <h2 className="text-2xl font-semibold my-2 text-sky-900">Rahul rohys</h2>
                <h4 className="md:text-md font-semibold my-2 text-center text-[.7rem]">Excellent Work</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident inventore dolor vitae, eum qui dignissimos, architecto dolore esse iusto quae necessitatibus possimus optio velit explicabo recusandae cumque, tempore enim quisquam minus error non eius reiciendis? Excepturi sequi fuga amet ea.</p>
                </div>
             </div>
             <div className="select-none max-w-full overflow-hidden">
              <div className="img-box w-40 h-40 rounded-full my-8 overflow-hidden mx-auto">
              <img src="https://img.freepik.com/free-photo/indian-businessman-with-his-white-car_496169-2889.jpg?size=626&ext=jpg&uid=R114616714&ga=GA1.2.643624295.1693064507&semt=sph" className="" alt="img" />
              </div>
              <div className=" mx-auto overflow-hidden">
                <h2 className="text-2xl font-semibold my-2 text-sky-900">Rahul rohys</h2>
                <h4 className="md:text-md font-semibold my-2 text-center text-[.7rem]">Excellent Work</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident inventore dolor vitae, eum qui dignissimos, architecto dolore esse iusto quae necessitatibus possimus optio velit explicabo recusandae cumque, tempore enim quisquam minus error non eius reiciendis? Excepturi sequi fuga amet ea.</p>
                </div>
             </div>
             
             <div className="select-none max-w-full overflow-hidden">
              <div className="img-box w-40 h-40 rounded-full my-8 overflow-hidden mx-auto">
              <img src="https://img.freepik.com/free-photo/indian-businessman-with-his-white-car_496169-2889.jpg?size=626&ext=jpg&uid=R114616714&ga=GA1.2.643624295.1693064507&semt=sph" className="" alt="img" />
              </div>
              <div className=" mx-auto overflow-hidden">
                <h2 className="text-2xl font-semibold my-2 text-sky-900">Rahul rohys</h2>
                <h4 className="md:text-md font-semibold my-2 text-center text-[.7rem]">Excellent Work</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident inventore dolor vitae, eum qui dignissimos, architecto dolore esse iusto quae necessitatibus possimus optio velit explicabo recusandae cumque, tempore enim quisquam minus error non eius reiciendis? Excepturi sequi fuga amet ea.</p>
                </div>
             </div>
            </Carousel>
          </div>
      </section>
    </>
  );
};

export default Testimonial;

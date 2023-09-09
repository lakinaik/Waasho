import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

import bannerImg from "../assets/man-washing-his-car-garage.jpg";
import teamImg from '../assets/Team.jpg'
import Button from "./Button";

const About = () => {
  return (
    <>
      <Navbar />
      <section className="about">
        <div className="z-0 h-[200px] md:h-[250px] w-full flex justify-center items-center text-center relative overflow-hidden">
          <img src={bannerImg} alt="img" className="w-full" />
          <div className="overlay bg-[#0000009f] z-10 absolute w-full h-[100%] overflow-hidden"></div>
          <div className="container z-20 absolute text-white mx-auto max-w-[900px] sm:mt-14">
            <h2 className="md:text-4xl text-xl font-bold">About us</h2>
            <span className="text-sm mt-4">
              <Link className="text-sky-500" to={"/"}>
                Home
              </Link>{" "}
              / <Link>About</Link>
            </span>
          </div>
        </div>

        <div className="about max-w-full p-4 ">
          <div className="grid md:grid-cols-2 gap-8">
             
              <div className="left-wrapper">
                <div className="imgbox relative">
                  <img src={teamImg} alt="img" className="h-full z-20" />
                  {/* <div className="imgOverlay absolute -right-6 sm:h-8 w-1/2 bg-black top-0">
                  </div>
                  <div className="imgOverlay absolute -right-6 w-8 sm:h-1/2 bg-black top-0">
                  </div> */}
                </div>
              </div>
              <div className="right-wrapper">
                <h2 className="heading md:text-2xl text-xl text-sky-500 font-semibold my-3">About Waasho</h2>
                <h1 className="sub-heading md:text-4xl text-2xl text-cyan-700 font-semibold">Professional Washing and Cleaning of Your Car</h1>
                <p className="my-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi vitae repellat dolores similique nihil dolorum fugiat! Cumque, optio eveniet adipisci similique at rerum soluta repudiandae totam ea voluptas, asperiores necessitatibus beatae reprehenderit! Tenetur accusamus quisquam repellendus adipisci, aperiam eius fugiat? Voluptatum consectetur veritatis quia ut! Ex vel nihil illum, dignissimos itaque odit rem voluptate nisi ab, dolore ut corporis fugiat neque, eum sint distinctio. Voluptate, quaerat quc</p>
                <p className="my-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos qui sunt modi recusandae iure veniam ullam deleniti reprehenderit? Enim quo sint sit quia, atque iusto voluptate error consectetur incidunt, modi nobis </p>
                <hr className="my-4"/>
                <Button text={"Learn more"} /> 
              </div>
          </div>

          
        </div>


      </section>
      <Footer />
    </>
  );
};

export default About;

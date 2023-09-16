import Footer from "../Components/Footer";

import Header from "../Components/Header";
import Bredcrumb from "../Components/Bredcrumb";
import img1 from "../assets/car-wash-3960877_1280.jpg";
import img2 from "../assets/slide-2.jpg";
import BookingWrapper from "../Components/BookingWrapper";
import TeamCard from "../Components/TeamCard";

import member1 from '../assets/member1.jpg'
import member2 from '../assets/member2.jpg'
import member3 from '../assets/member3.jpg'
import member4 from '../assets/member4.jpg'


const About = () => {
  return (
    <>
      <Header />
      <Bredcrumb page={"About"} />
      <section className="about ">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:my-10 my-6 md:px-20 px-4">
          <img src={img1} alt="img" />
          <img src={img2} alt="img" />
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-8 md:my-10 my-6 md:px-16 px-4">
          <div className="left">
            <p className="text-xl font-medium text-sky-600 relative after:content-[''] after:h-[2px] after:w-14 after:bg-blue-500 after:absolute after:top-1/2 after:ms-1">
              Write a Message
            </p>
            <h2 className="md:text-5xl text-2xl font-semibold my-3 text-cyan-950">
              We're the Leading Carwash Center For You
            </h2>
          </div>
          <div className="right md:col-span-2">
            <p className="text-orange-500 text-3xl mb-8">
              We have 30+ years of experiences for give you better quality
              results.
            </p>
            <p className="text-slate-600 text-xl">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even you are
              going to use a passage. consectetur adipiscing elit.{" "}
            </p>
          </div>
        </div>
        <section className="team md:my-10 my-8 bg-slate-100 md:px-20 px-4 py-10">
          <div className="header mx-auto text-center md:w-[32rem]">
            <p className="text-lg font-medium text-sky-600 relative after:content-[''] after:h-[2px] after:w-14 after:bg-blue-500 after:absolute after:top-1/2 after:ms-1">
            Meet Our Team
            </p>
            <h2 className="md:text-5xl text-2xl font-semibold my-3 text-cyan-950">
            Meet Our Professional Skilled Staff
            </h2>
          </div>
          <div className="team-member-wrapper">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-14 my-14">
                <TeamCard img={member1} name={"John doe"} position={"Owner/Consultant"} fbLink={'/'}InstaLink={'/'} twitLink={'/'}/>
                <TeamCard img={member2} name={"John doe"} position={"Owner/Consultant"} fbLink={'/'}InstaLink={'/'} twitLink={'/'}/>
                <TeamCard img={member3} name={"John doe"} position={"Owner/Consultant"} fbLink={'/'}InstaLink={'/'} twitLink={'/'}/>
                <TeamCard img={member4} name={"John doe"} position={"Owner/Consultant"} fbLink={'/'}InstaLink={'/'} twitLink={'/'}/>
            </div>
          </div>
          {/* ==========Testimonial======= */}

          {/* <div className="testimonial bg-red-500 max-w-[600px] h-[300px] mx-auto">
            
          </div> */}
        </section>
      </section>
      <BookingWrapper/>
      <Footer />
    </>
  );
};

export default About;

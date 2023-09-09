import React from "react";
import { Link } from "react-router-dom";


const MobileApp = () => {
  return (
    <>
      <section className="bg-black mt-10 p-4">
        <h2 className="md:text-4xl text-center my-8 font-bold text-white">
          Scheduling a Service Now a Click Away
        </h2>
        <div className="grid md:grid-cols-2">
          <div className="mx-auto">
            <img
              src="https://img.freepik.com/free-vector/mobile-ux-concept-illustration_114360-4276.jpg?size=626&ext=jpg&uid=R114616714&ga=GA1.2.643624295.1693064507&semt=ais"
              alt=""
              width={500}
            />
          </div>
          <div className="right text-white mx-auto">
            <p className="text-xl">
              Wassho App Offers Unmatched Service Experience In Just Few Clicks.
            </p>
            <p className="my-8 font-bold md:text-2xl">Download the App</p>
            <p className="my-8 text-md">
              FIXIGO App Offers Unmatched Service Experience In Just Few Clicks
              . Download the App. Register and Select a Service ,Enter Pick Up
              Time and Location, We Are Done !
            </p>
            <div className="flex gap-3">
            <Link className="inline"><img src="https://fixigo.in/FixigoAssets2023/images/androied.png" alt="" /></Link>
            <Link className="inline"><img src="https://fixigo.in/FixigoAssets2023/images/ios.png" alt="" /></Link>
            
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MobileApp;

import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Breadcrumb from "../Components/Bredcrumb";
import Vehicle from "../Components/Vehicle";
import microbus from "../assets/minibus.png";
import minicar from "../assets/minibus.png";
import sedan from "../assets/sedan.png";
import suv from "../assets/suv.png";
import Calendar from "../Components/Calendar";
import { useAuth } from "../Components/context/auth";
import { Link } from "react-router-dom";
import TopNav from "../Components/TopNav";
import Navbar from "../Components/Navbar";




const Booking = () => {
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [selectedVehicleData, setSelectedVehicleData] = useState({});
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [years, setYears] = useState([]);
  const [auth, setAuth] = useAuth();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    modelYear: "",
    vehicleCompany: "",
    vehicleModelName: "",
    message: "",
  });
  let vehicleType = selectedVehicleData.text
  const bookingDetails = {
    formData,
    vehicleType,
    selectedDate,
    selectedTime
  };

  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const yearArray = Array.from(
      { length: currentYear - 2009 },
      (_, index) => 2010 + index
    );
    setYears(yearArray);
  }, [currentYear]);

  const handleSelect = (vehicle) => {
    if (selectedVehicle === vehicle) {
      setSelectedVehicle(""); 
      setSelectedVehicleData({}); 
    } else {
      setSelectedVehicle(vehicle); // Select the clicked vehicle
      // Find and set the selected vehicle data
      const data = vehiclesData.find(
        (vehicleData) => vehicleData.text === vehicle
      );
      setSelectedVehicleData(data);
      // Update bookingDetails with the selected vehicle
    }
  };


  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (time) =>{
    setSelectedTime(time)
  }


  const vehiclesData = [
    { text: "Microbus", img: microbus },
    { text: "Minivan Car", img: minicar },
    { text: "Sedan Car", img: sedan },
    { text: "SUV car", img: suv },
  ];

  const createYears = () => {
    let years = [];
    let startYear = 2010;
    let currentYear = new Date().getFullYear();
    for (let year = startYear; year <= currentYear; year++) {
      years.push(year);
    }
  };

  useEffect(() => {
    createYears();
  }, []);

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(bookingDetails.vehicleType===undefined){
      window.alert("select vehicle")
      return;
    }
    if(bookingDetails.selectedDate===""){
        window.alert("Select a date")
        return;
    }
    if(bookingDetails.selectedTime===""){
        window.alert("Select Time")
        return;
    }
    if(bookingDetails.formData.fullname===""||
    bookingDetails.formData.email===""||
    bookingDetails.formData.phone===""||
    bookingDetails.formData.modelYear===""||
    bookingDetails.formData.vehicleCompany===""||
    bookingDetails.formData.vehicleModelName===""){
        window.alert("All field are required")
        return;
    }
    
    
    await fetch(`${process.env.REACT_APP_API}/booking`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        bookingDetails
      ),
    }).then((res) => {
      if (res.status === 200) {
     window.alert("Booking Successful")
        window.location.href = "/";
      } else {
      }
    });
  };

  return (
    <>
    <TopNav/>
    <Navbar/>
      <div>
        <Breadcrumb page={"Online Booking"} />
      </div>
      <section className="booking md:mt-20 my-4 md:px-16 px-4">
        <div className="Choose-car">
          <div className="flex justify-between flex-wrap md:flex-row flex-col-reverse">
            <div className="vehicle">
              <p className="text-xl font-medium text-sky-600 relative after:content-[''] after:h-[2px] after:w-14 after:bg-blue-500 after:absolute after:top-1/2 after:ms-1">
                Choose car
              </p>
              <h2 className="md:text-5xl text-2xl font-semibold mb-3 text-cyan-950">
                Select Vehicle Type
              </h2>
            </div>
            <div className="step my-4">
              <div className="bg-blue-600 text-white text-4xl rounded-full w-20 h-20 grid place-items-center">
                1
              </div>
            </div>
          </div>
          <div className="vehicles grid md:grid-cols-4 grid-cols-2 mx-auto gap-3">
            {vehiclesData.map((vehicleData) => (
              <Vehicle
                key={vehicleData.text}
                text={vehicleData.text}
                img={vehicleData.img}
                isSelected={selectedVehicle === vehicleData.text}
                onSelect={handleSelect}
              />
            ))}
          </div>
        </div>
        <div className="date-time md:mt-14 mt-8">
          <div className="flex justify-between flex-wrap md:flex-row flex-col-reverse">
            <div className="dates">
              <p className="text-xl font-medium text-sky-600 relative after:content-[''] after:h-[2px] after:w-14 after:bg-blue-500 after:absolute after:top-1/2 after:ms-1">
                Select Your Booking Date
              </p>
              <h2 className="md:text-5xl text-2xl font-semibold mb-3 text-cyan-950">
                Booking Date
              </h2>
            </div>
            <div className="step my-4">
              <div className="bg-blue-600 text-white md:text-4xl text-xl rounded-full md:w-20 md:h-20 w-16 h-16 grid place-items-center">
                2
              </div>
            </div>
          </div>
          <div className="calendar">
          <Calendar onDateSelect={handleDateSelect} onTimeSelect={handleTimeSelect}/>
          </div>
        
        </div>
        {/* ================User details============ */}
        <div className="details">
          <div className="flex justify-between flex-wrap md:flex-row flex-col-reverse">
            <div className="user-details">
              <p className="text-xl font-medium text-sky-600 relative after:content-[''] after:h-[2px] after:w-14 after:bg-blue-500 after:absolute after:top-1/2 after:ms-1">
                Enter your details
              </p>
              <h2 className="md:text-5xl text-2xl font-semibold mb-3 text-cyan-950">
                User details
              </h2>
            </div>
            <div className="step my-4">
              <div className="bg-blue-600 text-white md:text-4xl text-xl rounded-full md:w-20 md:h-20 w-16 h-16 grid place-items-center">
                3
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} method="POST">
            <div className="grid gap-4">
              <input
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Enter Your Fullname"
                className="bg-slate-300 p-3 outline-0 text-base text-black"
                onChange={handleInputChange}
                value={formData.fullname}
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                className="bg-slate-300 p-3 outline-0 text-base text-black"
                onChange={handleInputChange}
                value={formData.email}
              />
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter Your Phone Number"
                className="bg-slate-300 p-3 outline-0 text-base text-black"
                onChange={handleInputChange}
                value={formData.phone}
              />
              <select
                name="modelYear"
                id="modelYear"
                className="bg-slate-300 p-3 outline-0 text-base text-slate-500"
                onChange={handleInputChange}
                value={formData.modelYear}
              >
                <option value="">Vehicle Model Year</option>
                {years.map((year, index) => {
                  return (
                    <option value={year} key={index}>
                      {year}
                    </option>
                  );
                })}
              </select>
              <input
                type="text"
                name="vehicleCompany"
                id="vehicleCompany"
                placeholder="Enter Vehicle Company"
                className="bg-slate-300 p-3 outline-0 text-base text-black"
                onChange={handleInputChange}
                value={formData.vehicleCompany}
              />
              <input
                type="text"
                name="vehicleModelName"
                id="vehicleModelName"
                placeholder="Enter Vehicle Model Name"
                className="bg-slate-300 p-3 outline-0 text-base text-black"
                onChange={handleInputChange}
                value={formData.vehicleModelName}
              />
              <textarea
                name="message"
                id="message"
                rows="10"
                placeholder="Message"
                className="bg-slate-300 p-3 outline-0 text-base text-black md:col-span-3"
                onChange={handleInputChange}
                value={formData.message}
              ></textarea>
            </div>
            {
              !auth.user? (<Link
                to="/login"
                className="bg-blue-500 text-white mt-8 px-4 py-3 font-semibold duration-300 hover:bg-black"
              >
                Login to booking
              </Link>):(<button
                type="submit"
                className="bg-blue-500 text-white my-4 px-4 py-3 font-semibold duration-300 hover:bg-black"
              >
                Confirm Booking
              </button>)
            }
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Booking;

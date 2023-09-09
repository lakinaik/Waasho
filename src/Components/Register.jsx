import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Logo from "../assets/white_blue__logo_2.png";
import { BiSolidUser } from "react-icons/bi";
import { GrMail } from "react-icons/gr";
import { BsTelephoneFill } from "react-icons/bs";
import {
  AiFillLock,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";

import { Link } from "react-router-dom";
import regImg from "../assets/istockphoto-1427943227-612x612.jpg";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
    term: false, // Add a term field to track the checkbox
  });
  const [formErrors, setFormErrors] = useState({
    fullname: false,
    email: false,
    phone: false,
    password: false,
  });

  const handleShow = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    // Update the formData based on the input type (text or checkbox)
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    // Remove the red border when user types in an input field
    setFormErrors({
      ...formErrors,
      [name]: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the user has agreed to the terms
    if (!formData.term) {
      alert("Please agree to the Terms & Conditions before submitting.");
      return;
    }
    // Validate the form
    const errors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) {
        errors[key] = true;
      }
    });
    if (Object.keys(errors).length === 0) {
      // Submit the form if there are no errors
      console.log("Form submitted successfully!");
    } else {
      // Highlight the input fields with errors in red
      setFormErrors(errors);
    }
  };

  return (
    <>
      <Navbar />

      <section className="register max-w-full mt-10 flex items-center justify-center md:pt-8 bg-[#dbe6ee]">
        <div className="bg-white rounded register my-8 p-4">
          <p className="text-center">
            <img src={Logo} alt="logo" className="p-2 mx-auto" width={100} />
            <span className="text-xl font-semibold">Create a new account</span>
          </p>
          <div className=" grid md:grid-cols-2 gap-4">
            <div className="reg-img">
              <img src={regImg} alt="img" className="md:w-[430px]" />
            </div>
            <div>
              <form onSubmit={handleSubmit} className="my-4">
                <div className={`border-2 border-sky-500 p-2 mb-4 rounded ${formErrors.fullname && 'border-red-500'}`}>
                  <BiSolidUser className="inline me-2" />
                  <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    className="outline-0 w-[90%]"
                    placeholder="Full name"
                    value={formData.fullname}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className={`border-2 border-sky-500 p-2 mb-4 rounded ${formErrors.email && 'border-red-500'}`}>
                  <GrMail className="inline me-2" />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="outline-0 w-[90%]"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className={`border-2 border-sky-500 p-2 mb-4 rounded ${formErrors.phone && 'border-red-500'}`}>
                  <BsTelephoneFill className="inline me-2" />
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="outline-0 w-[90%]"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className={`border-2 border-sky-500 p-2 mb-4 ${formErrors.password && 'border-red-500'}`}>
                  <AiFillLock className="inline me-2" />
                  {showPassword ? (
                    <input
                      type="text"
                      name="password"
                      id="password"
                      className="outline-0 w-[80%]"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                    />
                  ) : (
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="outline-0 w-[80%]"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                    />
                  )}
                  <button
                    className="cursor-pointer float-right"
                    onClick={handleShow}
                  >
                    {showPassword ? (
                      <AiOutlineEye className="inline" />
                    ) : (
                      <AiOutlineEyeInvisible className="inline" />
                    )}
                  </button>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="term"
                    id="term"
                    className="me-2 "
                    checked={formData.term}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="term">
                    You agree to our{" "}
                    <Link to={"/terms"} className="text-sky-700">
                      term & conditions
                    </Link>
                  </label>
                </div>
                <div className="text-center my-4">
                  <button className="bg-sky-500 text-white py-1 px-4 border-2 border-sky-500 rounded-lg duration-300 hover:bg-transparent hover:text-black">
                    Register
                  </button>
                </div>
                <div className="text-center font-medium">
                  <span>
                    Already have an account?{" "}
                    <Link to={"/login"} className="text-sky-700">
                      Login
                    </Link>{" "}
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Register;

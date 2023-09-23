import React, { useState } from "react";
import Footer from "../Components/Footer";
import Logo from "../assets/waasho-logo-1.png";
import { BiSolidUser } from "react-icons/bi";
import { GrMail } from "react-icons/gr";
import { BsTelephoneFill } from "react-icons/bs";
import {
  AiFillLock,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";

import { Link } from "react-router-dom";
import regImg from "../assets/logo3.png";
import Header from "../Components/Header";
import { toast } from "react-toastify";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
    term: false,
  });
  const [formErrors, setFormErrors] = useState({
    fullname: false,
    email: false,
    phone: false,
    password: false,
  });
  const [loader, setLoader] = useState(false)

  const handleShow = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Define a regular expression pattern for a strong password
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;

    // Check if the input is for the password field
    if (name === "password") {
      // Test the password against the pattern
      const isValidPassword = passwordPattern.test(value);

      // Update the formData and formErrors accordingly
      setFormData({
        ...formData,
        [name]: value,
      });
      setFormErrors({
        ...formErrors,
        [name]: !isValidPassword, // Set to true if password is invalid
      });
    } else {
      // For other fields, update formData and remove any previous error
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
      setFormErrors({
        ...formErrors,
        [name]: false, // Remove the error for this field
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullname, email, phone, password } = formData;

    if (!formData.term) {
      toast.error("Agree to terms & conditions", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return;
    }

    try {
      setLoader(true)
      await fetch(`${process.env.REACT_APP_API}/register`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname,
          email,
          phone,
          password,
        }),
      }).then((response) => {
        if (response.status === 200) {
          toast.success("Registered successfully!", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
          window.location.href = "/login";
        } 
        else if(response.status === 422){
          toast.error("Email already exists!", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        }
        else {
          toast.error("Something went wrong!", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        }
      });
    } catch (error) {
      console.error("register failed:", error);
    }
  };

  return (
    <>
      <Header />
      <section className="register max-w-full flex items-center justify-center md:pt-8 bg-[#dbe6ee]">
        <div className="bg-white rounded register my-8 p-4">
          <div className="text-center bg-blue-900 px-2 text-white">
            <img src={Logo} alt="logo" className="p-2 mx-auto" width={150} />
            <span className="text-xl font-semibold relative bottom-4">
              Create a new account
            </span>
          </div>
          <div className=" grid md:grid-cols-2 gap-4">
            <div className="reg-img">
              <img src={regImg} alt="img" className="md:w-[430px]" />
            </div>
            <div>
              <form
                onSubmit={handleSubmit}
                method="POST"
                className="my-4"
              >
                <div
                  className={`border-2 border-sky-500 p-2 mb-4 rounded ${
                    formErrors.fullname && "border-red-500"
                  }`}
                >
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
                <div
                  className={`border-2 border-sky-500 p-2 mb-4 rounded ${
                    formErrors.email && "border-red-500"
                  }`}
                >
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
                <div
                  className={`border-2 border-sky-500 p-2 mb-4 rounded ${
                    formErrors.phone && "border-red-500"
                  }`}
                >
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
                <div
                  className={`border-2 border-sky-500 p-2 mb-4 ${
                    formErrors.password && "border-red-500"
                  }`}
                >
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
                  <button
                    type="submit"
                    className="bg-sky-500 text-white py-1 px-4 border-2 border-sky-500 rounded-lg duration-300 hover:bg-transparent hover:text-black"
                  >
                    {
                        loader ? "Processing" : "Register"
                      }
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

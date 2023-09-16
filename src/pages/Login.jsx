import React, { useState } from "react";
import Footer from "../Components/Footer";
import Logo from "../assets/white_blue__logo_2.png";
import { GrMail } from "react-icons/gr";
import { AiFillLock } from "react-icons/ai";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Bredcrumb from "../Components/Bredcrumb";
import leftImg from "../assets/istockphoto-1427943227-612x612.jpg";
import { useAuth } from "../Components/context/auth";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [auth, setAuth] =useAuth()

  const handleShow = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      // Make a POST request to your authentication API
      const response = await fetch(`${process.env.REACT_APP_API}/login`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
    
      if (response.status === 200) {
        toast.success("Login successfully !", {
          position: toast.POSITION.BOTTOM_RIGHT
        });
        const data = await response.json();
        const user = data
        const token = data.user.token
        
        setAuth({
          ...auth,
          user,
          token,
        });
        localStorage.setItem('token', JSON.stringify(data))
        window.location.href = "/";
      } else {
        toast.error("Wrong email or password !", {
          position: toast.POSITION.BOTTOM_RIGHT
        });
        console.log("failed to login");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
    
  };

  return (
    <>
      <Header />
      <Bredcrumb page={"Login"} />
      <section className="max-w-full flex items-center justify-center bg-[#dbe6ee]">
        <div className="bg-white rounded my-20 login p-4">
          <div className="text-center bg-blue-900 px-2 text-white">
            <img src={Logo} alt="logo" className="p-2 mx-auto" width={150} />
            <span className="text-xl font-semibold relative bottom-4">
              Welcome back !
            </span>
          </div>
          <div className="grid md:grid-cols-2">
            <div className="img-box">
              <img src={leftImg} alt="img" className="" width={300} />
            </div>
            <div>
              <form method="POST" onSubmit={handleSubmit} className="my-4">
                <div className="border-2 border-sky-500 p-2 mb-4 rounded">
                  <GrMail className="inline me-2" />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="outline-0 w-[90%]"
                    placeholder="Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className="border-2 border-sky-500 p-2 mb-4">
                  <AiFillLock className="inline me-2" />
                  {showPassword ? (
                    <input
                      type="text"
                      name="password"
                      id="password"
                      className="outline-0 w-[80%]"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  ) : (
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="outline-0 w-[80%]"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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
                    name="remember"
                    id="remember"
                    className="me-2 "
                  />
                  <label htmlFor="remember">Remember me</label>
                </div>
                <div className="text-center my-4">
                  <button
                    type="submit"
                    className="bg-sky-500 text-white py-1 px-4 border-2 border-sky-500 rounded-lg duration-300 hover:bg-transparent hover:text-black"
                  >
                    Login
                  </button>
                </div>
                <div className="text-center font-medium">
                  <span>
                    Create a new account?
                    <Link to={"/register"} className="text-sky-700">
                      Create
                    </Link>
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

export default Login;

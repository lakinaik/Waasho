import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Services from "./pages/Services";
import Register from "./pages/Register";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { AuthProvider } from "./Components/context/auth";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
        <ToastContainer />
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route path="/booking" Component={Booking} />
            <Route path="/services" Component={Services} />
            <Route path="/register" Component={Register} />
            <Route path="/login" Component={Login} />
            <Route path="/about" Component={About} />
            <Route path="/contact" Component={Contact} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;

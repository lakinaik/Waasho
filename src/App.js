import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Booking from './Components/Booking';
import Register from './Components/Register';
import Login from './Components/Login'
import About from './Components/About';
import Contact from './Components/Contact';




function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route exact path='/' Component={Home}/>
    <Route path='/booking' Component={Booking}/>
    <Route path='/register' Component={Register}/>
    <Route path='/login' Component={Login}/>
    <Route path='/about' Component={About}/>
    <Route path='/contact' Component={Contact}/>

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

import './index.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'
import {photos, setting} from './PhotoCollageData'
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<HomePage photos = {photos} setting = {setting}/>}/>
        <Route path = "/about" element = {<AboutPage/>}/>
        <Route path = "/services" element = {<ServicesPage/>}/>
        <Route path = "/contact" element = {<ContactPage/>}/>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;

import { useState } from 'react'
import viteLogo from './assets/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CostumerLayout from "./components/Layout/CostumerLayout";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Cources from "./components/Pages/Cources"
import Team from './components/Pages/DropdownPages/Team';
import Testimonial from './components/Pages/DropdownPages/Testimonial';
import Random from './components/Pages/DropdownPages/Random';
import Login from './components/Pages/Login';
import { ToastContainer } from 'react-toastify';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CostumerLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cources" element={<Cources />} />
            <Route path="/login" element={<Login />} />

            //Dropdown
            <Route path="/team" element={<Team/>} />
            <Route path="/testimonial" element={<Testimonial/>} />
            <Route path="/404" element={<Random/>} />
          </Route>
        </Routes>
      </BrowserRouter>

      <ToastContainer />
    </>
  )
}

export default App

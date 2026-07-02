import { useState } from 'react'
import viteLogo from './assets/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CostumerLayout from "./components/Layout/CostumerLayout";
import Home from "./components/Pages/Home";
import Contact from "./components/Pages/Contact";
import Register from "./components/Pages/Register"
import Login from './components/Pages/Login';
import { ToastContainer } from 'react-toastify';
import Team from './components/Pages/About/Team';
import Testimonial from './components/Pages/About/Testimonial';
import About1 from './components/Pages/About/About1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CostumerLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/about" element={<About1 />} />



          </Route>
        </Routes>
      </BrowserRouter>

      <ToastContainer />
    </>
  )
}

export default App

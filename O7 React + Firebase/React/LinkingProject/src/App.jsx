import { useState } from "react";
import viteLogo from "./assets/vite.svg";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CostumerLayout from "./Components/Costumer/Layout/CostumerLayout";
import Home from "./Components/Costumer/Pages/Home";
import About from "./Components/Costumer/Pages/About";
import Contact from "./Components/Costumer/Pages/Contact";
import LayoutA from "./Components/Admin/AdminLayout/LayoutA"
import Dashboard from "./Components/Admin/AdminPages/Dashboard"
import User from "./Components/Admin/AdminPages/User"
import Enquiries from "./Components/Admin/AdminPages/Enquiries"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CostumerLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

          <Route path="/admin" element={<LayoutA />}>
            <Route index element={<Dashboard/>} />
            <Route path='user' element={<User/>} />
            <Route path='enquiries' element={<Enquiries/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

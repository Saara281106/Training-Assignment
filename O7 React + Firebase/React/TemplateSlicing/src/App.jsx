import { useState } from "react";
import viteLogo from "./assets/vite.svg";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CostumerLayout from "./Components/Costumer/Layout/CostumerLayout";
import Home from "./Components/Costumer/Pages/Home";
import Shop from "./Components/Costumer/Pages/Shop";
import Contact from "./Components/Costumer/Pages/Contact";
import Details from "./components/Costumer/Pages/Details"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CostumerLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/details" element={<Details />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

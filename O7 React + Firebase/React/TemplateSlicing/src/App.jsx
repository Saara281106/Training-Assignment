import { useState } from "react";
import viteLogo from "./assets/vite.svg";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CostumerLayout from "./Components/Costumer/Layout/CostumerLayout";
import Home from "./Components/Costumer/Pages/Home";
import Shop from "./Components/Costumer/Pages/Shop";
import Contact from "./Components/Costumer/Pages/Contact";
import Details from "./components/Costumer/Pages/Details"
import Login from "./components/Costumer/Pages/Login";

import AdminLayout from "./components/Admin/LayoutA.jsx/AdminLayout";
import Dashboard from "./components/Admin/Pages/Dashboard";
import Users from "./components/Admin/Pages/Users";
import ShowCategories from "./components/Admin/Pages/Categories/ShowCategories";
import AddCategories from "./components/Admin/Pages/Categories/AddCategories"
import { ToastContainer } from "react-toastify";

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
            <Route path="/login" element={<Login />} />

            
          </Route>

          <Route path="/admin" element={<AdminLayout/>}>
            <Route path="/admin" element={<Dashboard/>}></Route>
            <Route path="categories" element={<ShowCategories/>}/>
            <Route path="user" element={<Users/>}/>
            <Route path="/admin/categories/add" element={<AddCategories/>}/>


          </Route>
        </Routes>
      </BrowserRouter>
       <ToastContainer />
    </>
  );
}

export default App;

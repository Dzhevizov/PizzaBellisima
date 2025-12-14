import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Navbar from "./components/Navbar";
import Catalog from "./components/Catalog";
import ProductDetails from "./components/ProductDetails";
import MyOrders from "./components/MyOrders";
import AdminPanel from "./components/AdminPanel";
import Login from "./components/Login";
import Register from "./components/Register";


function App() {
  
  return (
    <>
      <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<ProductDetails />} />
        <Route path="/orders" element={<MyOrders />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

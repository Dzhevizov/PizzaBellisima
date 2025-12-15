import { BrowserRouter, Routes, Route } from "react-router";
import Catalog from "./components/Catalog";
import ProductDetails from "./components/ProductDetails";
import MyOrders from "./components/MyOrders";
import AdminPanel from "./components/AdminPanel";
import Login from "./components/Login";
import Register from "./components/Register";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Footer from "./components/Footer";
import CartModal from "./components/CartModal";
import { useState } from "react";

const products = [
  { id: 1, name: "Маргарита", description: "Класическа пица", price: 8.50, quantity: 1, imageSrc: "https://www.creativefabrica.com/wp-content/uploads/2021/03/02/Remora-Camilla-Fonts-8452894-4-312x208.jpg", imageAlt: "Пица Маргарита" },
  // ...
];


function App() {
  const [cartOpen, setCartOpen] = useState(false);
  
  return (
    <>
      <BrowserRouter>
        <Navigation onCartClick={() => setCartOpen(true)} cartCount={products.length}/>
        <CartModal open={cartOpen} setOpen={setCartOpen} products={products} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<ProductDetails />} />
          <Route path="/orders" element={<MyOrders />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<CartModal />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

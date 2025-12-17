import { BrowserRouter, Routes, Route } from "react-router";
import Catalog from "./components/Catalog";
import ProductDetails from "./components/ProductDetails";
import MyOrders from "./components/MyOrders";
import Login from "./components/Login";
import Register from "./components/Register";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Footer from "./components/Footer";
import CartModal from "./components/CartModal";
import { useState } from "react";
import { ProductsProvider } from "./contexts/ProductContext";

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

        <ProductsProvider>
          <Routes>
            <Route path='/catalog' >
              <Route index element={<Catalog category='pizza' title='Италиански пици'/>}/>
              <Route path='pasta' element={<Catalog category='pasta' title='Паста'/>}/>
              <Route path='risotto' element={<Catalog category='risotto' title='Ризото'/>}/>
              <Route path='dessert' element={<Catalog category='dessert' title='Десерти'/>}/>
              <Route path='drink' element={<Catalog category='drink' title='Напитки'/>}/>
            </Route>

            <Route path="/" element={<Home />} />
            <Route path="/catalog/:id" element={<ProductDetails />} />
            <Route path="/orders" element={<MyOrders />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<CartModal />} />
          </Routes>
        </ProductsProvider>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

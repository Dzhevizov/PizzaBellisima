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
import { useCart } from "./contexts/CartContext";
import { OrderProvider } from "./contexts/OrderContext";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import ProtectedRoute from "./guards/ProtectedRoute";
import AdminRoute from "./guards/AdminRoute";
import Forbidden from "./components/Forbidden";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const { cart } = useCart();

  return (
    <BrowserRouter>
      <Navigation onCartClick={() => setCartOpen(true)} cartCount={cart.length} />

      <ProductsProvider>
        <OrderProvider>

          <CartModal open={cartOpen} setOpen={setCartOpen} />

          <Routes>

            {/* Публични */}
            <Route path="/" element={<Home />} />
            <Route path="/catalog/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Категории */}
            <Route path="/catalog">
              <Route index element={<Catalog category="pizza" title="Италиански пици" />} />
              <Route path="pasta" element={<Catalog category="pasta" title="Паста" />} />
              <Route path="risotto" element={<Catalog category="risotto" title="Ризото" />} />
              <Route path="dessert" element={<Catalog category="dessert" title="Десерти" />} />
              <Route path="drink" element={<Catalog category="drink" title="Напитки" />} />
            </Route>

            {/* Само за логнати */}
            <Route
              path="/orders"
              element={
                <ProtectedRoute>
                  <MyOrders />
                </ProtectedRoute>
              }
            />

            {/* Само за админ */}
            <Route
              path="/add-product"
              element={
                <AdminRoute>
                  <AddProduct />
                </AdminRoute>
              }
            />

            <Route
              path="/edit-product/:id"
              element={
                <AdminRoute>
                  <EditProduct />
                </AdminRoute>
              }
            />

            {/* 403 */}
            <Route path="/403" element={<Forbidden />} />

          </Routes>

        </OrderProvider>
      </ProductsProvider>

      <Footer />
    </BrowserRouter>
  );
}

export default App

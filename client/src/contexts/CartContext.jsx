import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Добавяне на продукт
  const addToCart = (product) => {
    setCart((prev) => {
        const existing = prev.find((p) => p.id === product.id);
        if (existing) {
        return prev.map((p) =>
            p.id === product.id
            ? { ...p, quantity: p.quantity + product.quantity }
            : p
        );
        }
        return [...prev, product];
    });
    };

  // Промяна на количество
  const updateQuantity = (id, delta) => {
    setCart((prev) =>
      prev.map((p) =>
        p._id === id ? { ...p, quantity: Math.max(1, p.quantity + delta) } : p
      )
    );
  };

  // Премахване
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((p) => p._id !== id));
  };

  const clearCart = () => setCart([]);

  const value = {
    cart,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  return useContext(CartContext);
}

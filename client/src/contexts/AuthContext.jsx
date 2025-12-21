import { createContext, useContext, useState } from "react";
import useRequest from "../hooks/useRequest";
import { useCart } from "../contexts/CartContext";

export const AuthContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const { clearCart } = useCart();

  const { request } = useRequest();

  const registerHandler = async (username, password, extraData) => {
    try {
      const payload = {
        email: extraData.email,
        password,
        username,
        firstName: extraData.firstName,
        lastName: extraData.lastName,
        address: extraData.address,
        city: extraData.city,
        phone: extraData.phone,
        notes: extraData.notes || "",
        registryDate: new Date().toISOString().split("T")[0],
        role: "client"
      };

      const result = await request("/users/register", "POST", payload);

      setUser(result);
      localStorage.setItem("user", JSON.stringify(result));

    } catch (err) {
      if (err === "Conflict") {
        alert("Имейлът вече е регистриран!");
      } else {
        alert("Грешка при регистрация: " + err);
      }
    }
  };

  const loginHandler = async (email, password) => {
    const result = await request("/users/login", "POST", { email, password });
    setUser(result);
    localStorage.setItem("user", JSON.stringify(result));
  };

  const logoutHandler = async () => {
    await request("/users/logout", "GET", null, { accessToken: user?.accessToken });
    clearCart();
    setUser(null);
    localStorage.removeItem("user");
  };

  const userContextValues = {
    user,
    isAuthenticated: !!user?.accessToken,
    isAdmin: user?.role === 'admin',
    registerHandler,
    loginHandler,
    logoutHandler,
  };

  return (
    <AuthContext.Provider value={userContextValues}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}

export default AuthContext;

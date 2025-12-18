import { createContext, useContext, useState, useEffect } from "react";
import { useAuthContext } from "./AuthContext";
import useRequest from "../hooks/useRequest";

const OrderContext = createContext();

export function OrderProvider({ children }) {
  const { user } = useAuthContext();
  const { request } = useRequest();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchOrders = async () => {
    if (!user?._id) return;
    setLoading(true);
    setError(null);

    try {
      // Взимаме всички поръчки
      const result = await request("/data/orders", "GET", null, {
        accessToken: user?.accessToken,
      });

      let filtered;
      if (user.role === "admin") {
        // админ → дневни поръчки
        const today = new Date().toISOString().split("T")[0];
        filtered = result.filter((o) => o.date === today);
      } else {
        // клиент → неговите поръчки
        filtered = result.filter((o) => o.clientId === user._id);
      }

      setOrders(filtered);
    } catch (err) {
      setError("Грешка при зареждане на поръчките");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [user]);

  const value = {
    orders,
    loading,
    error,
    fetchOrders,
  };

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
}

export function useOrders() {
  return useContext(OrderContext);
}

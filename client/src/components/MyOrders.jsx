import { useEffect, useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import useRequest from "../hooks/useRequest";
import OrderCard from "./OrderCard";

export default function MyOrders() {
  const { user } = useAuthContext();
  const { request } = useRequest();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const result = await request(
          `/data/orders?where=clientId%3D%22${user._id}%22`,
          "GET",
          null,
          { accessToken: user?.accessToken }
        );
        setOrders(result);
      } catch (err) {
        setError("Грешка при зареждане на поръчките");
      } finally {
        setLoading(false);
      }
    };

    if (user?._id) {
      fetchOrders();
    }
  }, [user, request]);

  if (loading) return <p>Зареждане...</p>;
  if (error) return <p className="text-red-600">{error}</p>;
  if (orders.length === 0) return <p>Нямате поръчки.</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Моите поръчки</h1>
      <div className="space-y-6">
        {orders.map((order) => <OrderCard key={order._id} order={order}/>)}
      </div>
    </div>
  );
}

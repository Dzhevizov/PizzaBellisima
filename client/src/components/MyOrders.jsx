import OrderCard from "./OrderCard";
import { useOrders } from "../contexts/OrderContext";
import { useAuthContext } from "../contexts/AuthContext";

export default function MyOrders() {
    const { orders, loading, error } = useOrders();
    const { user } = useAuthContext();

    if (loading) return <p>Зареждане...</p>;
    if (error) return <p className="text-red-600">{error}</p>;
    if (orders.length === 0) return <p>Няма поръчки.</p>;


    return (
        <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">{user.role === 'admin' ? 'Дневни поръчки' : 'Моите поръчки'}</h1>
        <div className="space-y-6">
            {orders.map((order) => <OrderCard key={order._id} order={order}/>)}
        </div>
        </div>
    );
}

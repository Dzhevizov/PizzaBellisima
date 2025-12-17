import formatPrice from "../utils/FormatPriceUtil";

export default function OrderCard ({
    order
}) {

    return (
        <div className="rounded-lg border border-gray-200 shadow-md p-4 bg-white">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-900">
                Поръчка #{order._id}
                </h2>
                <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                    order.status === "PENDING"
                    ? "bg-yellow-100 text-yellow-800"
                    : order.status === "DELIVERED"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
                >
                {order.status}
                </span>
            </div>

            <p className="text-sm text-gray-600 mb-2">
                Дата: {order.date}
            </p>

            <ul className="divide-y divide-gray-200 mb-4">
                {order.items.map((item, idx) => (
                <li key={idx} className="flex justify-between py-2">
                    <span>
                    {item.name} × {item.quantity}
                    </span>
                    <span>{formatPrice(item.price * item.quantity)}</span>
                </li>
                ))}
            </ul>

            <div className="text-sm text-gray-700 space-y-1">
                <p>Субтотал: {formatPrice(order.subtotal)} </p>
                <p>Отстъпки: -{formatPrice(order.discounts)} </p>
                {order.subtotal > 0 && order.subtotal < 20 && <p>Доставка: {formatPrice(4.99)}</p>}
                <p className="font-bold">
                Общо: {formatPrice(order.total)}
                </p>
            </div>
        </div>
    )
}
const orders = [
  { id: 1, items: ["Маргарита", "Кола"], status: "pending" },
  { id: 2, items: ["Пеперони"], status: "delivered" },
];

export default function MyOrders() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Моите поръчки</h2>
      {orders.map(o => (
        <div key={o.id} className="border p-4 mb-2">
          <p>Поръчка #{o.id}</p>
          <p>Продукти: {o.items.join(", ")}</p>
          <p>Статус: {o.status}</p>
        </div>
      ))}
    </div>
  );
}

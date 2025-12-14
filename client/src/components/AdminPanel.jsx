const products = [
  { id: 1, name: "Маргарита", price: 8.50 },
  { id: 2, name: "Пеперони", price: 9.90 },
];

export default function AdminPanel() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
      {products.map(p => (
        <div key={p.id} className="border p-4 mb-2 flex justify-between">
          <span>{p.name} – {p.price} лв.</span>
          <div className="flex gap-2">
            <button className="bg-blue-500 text-white px-2 py-1">Edit</button>
            <button className="bg-red-500 text-white px-2 py-1">Delete</button>
          </div>
        </div>
      ))}
      <button className="bg-green-500 text-white px-4 py-2 mt-4">Add Product</button>
    </div>
  );
}

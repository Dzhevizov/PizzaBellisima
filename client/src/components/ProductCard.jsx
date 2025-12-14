export default function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded shadow">
      <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover"/>
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p>{product.description}</p>
      <p className="text-red-600 font-semibold">{product.price} лв.</p>
    </div>
  );
}

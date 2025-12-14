import { useParams } from "react-router";

const products = [
  { id: 1, name: "Маргарита", description: "Класическа пица с домати и моцарела", price: 8.50 },
  { id: 2, name: "Пеперони", description: "Пица с пикантно пеперони", price: 9.90 },
];

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) return <p>Продуктът не е намерен.</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">{product.name}</h2>
      <p>{product.description}</p>
      <p className="text-red-600 font-semibold">{product.price} лв.</p>
    </div>
  );
}

import ProductCard from "../components/ProductCard";
import Navbar from "./Navbar";

const products = [
  { id: 1, name: "Маргарита", description: "Класическа пица с домати и моцарела", price: 8.50, imageUrl: "https://via.placeholder.com/150" },
  { id: 2, name: "Пеперони", description: "Пица с пикантно пеперони", price: 9.90, imageUrl: "https://via.placeholder.com/150" },
  { id: 3, name: "Паста Болонезе", description: "Паста с месен сос", price: 7.50, imageUrl: "https://via.placeholder.com/150" },
  { id: 4, name: "Кола", description: "Напитка 500ml", price: 2.50, imageUrl: "https://via.placeholder.com/150" },
];

export default function Catalog() {
  return (
    <>
        <Navbar />
        <div className="grid grid-cols-2 gap-4 p-6">
            {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
    </>
    
  );
}

import ProductCard from "../components/ProductCard";
import { useProducts } from "../contexts/ProductContext";
import Navbar from "./Navbar";

export default function Catalog({ 
    category, 
    title
}) {
    const { products, loading, error } = useProducts();

    if (loading) return <p>Зареждане...</p>;
    if (error) return <p className="text-red-600">{error}</p>;

    const filtered = category
    ? products.filter(p => p.category === category)
    : products;

    return (
        <>
            <Navbar />

            <div className="bg-white">

                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h2>

                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {filtered.map(p => <ProductCard key={p._id} product={p} />)}
                    </div>
                </div>
            </div>
        </>
    );
}

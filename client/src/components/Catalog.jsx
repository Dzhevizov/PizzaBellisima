import ProductCard from "../components/ProductCard";
import { useProducts } from "../contexts/ProductContext";
import { useAuthContext } from "../contexts/AuthContext";
import Navbar from "./Navbar";
import { Link } from "react-router";

export default function Catalog({ 
    category, 
    title
}) {
    const { products, loading, error } = useProducts();
    const { isAdmin } = useAuthContext();

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

                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                            {title}
                        </h2>

                        {isAdmin && (
                            <Link
                                to="/add-product"
                                className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-red-500"
                            >
                                + Добави продукт
                            </Link>
                        )}
                    </div>

                    {/* Продукти */}
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {filtered.map(p => (
                            <ProductCard key={p._id} product={p} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

import { Link } from "react-router";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../contexts/ProductContext";

export default function HotOffers() {
    const { products, loading, error } = useProducts();

    if (loading) return <p>Зареждане...</p>;
    if (error) return <p className="text-red-600">{error}</p>;

    const topOffers = [...products]
        .sort((a, b) => b.discount - a.discount)
        .slice(0, 4);

  return (
    <section className="bg-gray-50 py-12">
        <h2 className="text-center text-3xl font-bold text-red-600 sm:text-4xl">
            Нашите горещи оферти
        </h2>
        <p className="mt-2 text-center text-gray-600">
            Специални предложения за дома и офиса
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
            {topOffers.map(p => <ProductCard key={p._id} product={p} />)}
        </div>

        <div className="mt-8 flex justify-center">
            <Link
                to="/catalog"
                className="rounded-md bg-red-600 px-6 py-3 text-lg font-semibold text-white shadow hover:bg-red-500"
            >
                Виж всички продукти
            </Link>
        </div>
    </section>
  );
}


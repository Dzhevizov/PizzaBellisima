import { useParams } from "react-router";
import QuantityInput from "./QuantityInput";
import { useProducts } from "../contexts/ProductContext";
import formatPrice from "../utils/FormatPriceUtil";
import { useState } from "react";
import { useCart } from "../contexts/CartContext";
import { useAuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router";
import useRequest from "../hooks/useRequest";
import ConfirmDeleteModal from "./ConfirmDeleteModal";

export default function ProductDetails() {
    const { id } = useParams();
    const { products, loading, refreshProducts  } = useProducts();
    const [quantity, setQuantity] = useState(1);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const { isAuthenticated, isAdmin, user } = useAuthContext();
    const { addToCart } = useCart();
    const { request } = useRequest();
    const navigate = useNavigate();

    if (loading) return <p>Зареждане...</p>;

    const product = products.find((p) => p._id === id);

    if (!product) return <p>Продуктът не е намерен.</p>;

    const decreaseQuantityHandle = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const increaseQuantityHandle = () => {
        setQuantity(quantity + 1);
    };

    const handleAdd = () => {
    addToCart({
        id: product._id,
        name: product.name,
        description: product.description,
        price: product.price,
        quantity, 
        discount: product.discount || 0,
        image: product.image,
        imageAlt: product.imageAlt,
        });
    };

    const handleDelete = async () => {
    try {
      await request(`/data/products/${id}`, "DELETE", null, {
        accessToken: user?.accessToken,
      });

      await refreshProducts(); 

      navigate("/catalog");
    } catch (err) {
      alert("Грешка при изтриване:", err);
    }
  };


    return (
    <div className="bg-white relative">
        <div className="mx-auto max-w-6xl px-6 py-12 lg:grid lg:grid-cols-2 lg:gap-12">
        
        <div className="relative">
            <img
                src={product.image}
                alt={product.name}
                className="w-full rounded-lg object-cover shadow-lg"
            />

            {product.discount > 0 && (
                <span className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-md text-sm font-bold shadow-lg">
                -{product.discount}%
                </span>
            )}
        </div>

        <div className="mt-8 lg:mt-0">
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="mt-2 text-xl text-red-600 font-semibold">{formatPrice(product.price)}</p>

            <p className="mt-6 italic text-gray-700">/{product.ingredients}/</p>

            {isAuthenticated && !isAdmin &&
                <>
                    <div className="mt-6">
                        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                            Количество за {product.name}
                        </label>
                        <QuantityInput quantity={quantity} onDecrease={decreaseQuantityHandle} onIncrease={increaseQuantityHandle}/>
                    </div>

                    <button
                        onClick={handleAdd}
                        type="button"
                        className="mt-6 w-full rounded-md bg-red-600 px-6 py-3 text-lg font-semibold text-white shadow hover:bg-red-500"
                    >
                        Добавяне в количката
                    </button>
                </>
            }

            {isAdmin && (
                <div className="mt-6 flex space-x-4">
                    <button
                    onClick={() => navigate(`/edit-product/${product._id}`)}
                    className="rounded-md bg-yellow-500 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-yellow-400"
                    >
                    Редактирай
                    </button>

                    <button
                        onClick={() => setShowDeleteModal(true)}
                        className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-red-500"
                    >
                        Изтрий
                    </button>

                    <ConfirmDeleteModal
                        open={showDeleteModal}
                        onCancel={() => setShowDeleteModal(false)}
                        onConfirm={handleDelete}
                    />
                </div>
            )}
            
            <p className="mt-6 text-sm text-gray-500">Категория: {product.category}</p>
        </div>
        </div>
    </div>
    );
}

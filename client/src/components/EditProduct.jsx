import { useParams } from "react-router";
import { useProducts } from "../contexts/ProductContext";
import ProductForm from "../components/ProductForm";
import useRequest from "../hooks/useRequest";
import { useNavigate } from "react-router";

export default function EditProduct() {
  const { id } = useParams();
  const { products, loading } = useProducts();
  const { request } = useRequest();
  const navigate = useNavigate();

  if (loading) return <p>Зареждане...</p>;

  const product = products.find((p) => p._id === id);

  if (!product) return <p className="text-red-600">Продуктът не е намерен.</p>;

  const handleUpdateProduct = async (updatedData) => {
    try {
      await request(`/data/products/${id}`, "PUT", updatedData);
      navigate(`/catalog/${id}`);
    } catch (err) {
      alert("Грешка при редакция:", err);
    }
  };

  return (
    <div className="py-10">
      <ProductForm product={product} onSubmit={handleUpdateProduct} />
    </div>
  );
}

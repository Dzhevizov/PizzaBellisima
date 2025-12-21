import ProductForm from "../components/ProductForm";
import useRequest from "../hooks/useRequest";
import { useNavigate } from "react-router";
import { useAuthContext } from "../contexts/AuthContext";
import { useProducts } from "../contexts/ProductContext";

export default function AddProduct() {
  const { request } = useRequest();
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { refreshProducts } = useProducts();

  const handleCreateProduct = async (productData) => {
    try {
      await request("/data/products", "POST", productData, { accessToken: user?.accessToken });
      await refreshProducts();
      navigate("/catalog");
    } catch (err) {
      alert("Грешка при създаване на продукт:", err);
    }
  };

  return (
    <div className="py-10">
      <ProductForm onSubmit={handleCreateProduct} />
    </div>
  );
}

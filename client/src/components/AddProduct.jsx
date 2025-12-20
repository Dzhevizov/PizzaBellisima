import ProductForm from "../components/ProductForm";
import useRequest from "../hooks/useRequest";
import { useNavigate } from "react-router";

export default function AddProduct() {
  const { request } = useRequest();
  const navigate = useNavigate();

  const handleCreateProduct = async (productData) => {
    try {
      await request("/data/products", "POST", productData);
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

import { useParams } from "react-router";
import QuantityInput from "./QuantityInput";

const products = [
  {
    id: 1,
    name: 'Маргарита',
    imageSrc: 'https://www.creativefabrica.com/wp-content/uploads/2021/03/02/Remora-Camilla-Fonts-8452894-4-312x208.jpg',
    imageAlt: "Маргарита",
    price: '8.50лв',
    description: 'Класическа пица с домати и моцарела',
    category: 'pizza',
    discount: 20,
    ingredients: 'барбекю сос, телешко дърпано месо, карамелизиран лук, жълта моцарела, бургер сос'
  },
  // ... други продукти
];

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p>Продуктът не е намерен.</p>;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:grid lg:grid-cols-2 lg:gap-12">
        
        {/* Снимка вляво */}
        <div className="relative">
            <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="w-full rounded-lg object-cover shadow-lg"
            />

            {/* Badge за отстъпка */}
            {product.discount && (
                <span className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-md text-sm font-bold shadow-lg">
                -{product.discount}%
                </span>
            )}
        </div>

        {/* Информация вдясно */}
        <div className="mt-8 lg:mt-0">
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="mt-2 text-xl text-red-600 font-semibold">{product.price}</p>

          <p className="mt-6 italic text-gray-700">/{product.ingredients}/</p>

          <div className="mt-6">
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
              Количество за {product.name}
            </label>
            <QuantityInput />
          </div>

          <button
            type="button"
            className="mt-6 w-full rounded-md bg-red-600 px-6 py-3 text-lg font-semibold text-white shadow hover:bg-red-500"
          >
            Добавяне в количката
          </button>

          <p className="mt-6 text-sm text-gray-500">Категория: {product.category}</p>
        </div>
      </div>
    </div>
  );
}

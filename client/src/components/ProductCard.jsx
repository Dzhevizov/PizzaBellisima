import { Link } from "react-router";
import formatPrice from "../utils/FormatPriceUtil";

export default function ProductCard({ product }) {
  return (
    <div className="group relative w-64 h-80 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-cover"
        />

        {/* Badge за отстъпка */}
        {product.discount > 0 && (
          <span className="absolute top-2 left-2 bg-red-600 text-white px-3 py-1 rounded-md text-sm font-bold shadow-lg">
            -{product.discount}%
          </span>
        )}
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-sm font-bold text-gray-700">
            <Link to={`/catalog/${product._id}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500 line-clamp-2">
            {product.description}
          </p>
        </div>
        <p className="text-sm font-medium text-gray-900">{formatPrice(product.price)}</p>
      </div>
    </div>
  );
}

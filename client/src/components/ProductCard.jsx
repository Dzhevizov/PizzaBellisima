export default function ProductCard({ product }) {
  return (
    <div className="group relative">
        <div className="relative">
            <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="w-full rounded-lg object-cover shadow-lg"
            />

            {/* Badge за отстъпка */}
            {product.discount > 0 && (
                <span className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-md text-sm font-bold shadow-lg">
                -{product.discount}%
                </span>
            )}
        </div>
        <div className="mt-4 flex justify-between">
        <div>
            <h3 className="text-sm text-gray-700">
            <a href={product.href}>
                <span aria-hidden="true" className="absolute inset-0" />
                {product.name}
            </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{product.description}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{product.price}</p>
        </div>
    </div>
  );
}

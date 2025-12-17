export default function QuantityInput({ 
    quantity,
    onDecrease,
    onIncrease 
}) {
    return (
    <div className="mt-2 flex items-center">
        {/* Минус бутон */}
        <button
        type="button"
        onClick={onDecrease}
        className="px-3 py-1 rounded-l-md border border-gray-300 bg-gray-100 text-gray-700 hover:bg-gray-200"
        >
        –
        </button>

        {/* Стойност */}
        <input
        type="text"
        readOnly
        value={quantity}
        className="w-16 text-center border-t border-b border-gray-300 focus:outline-none"
        />

        {/* Плюс бутон */}
        <button
        type="button"
        onClick={onIncrease}
        className="px-3 py-1 rounded-r-md border border-gray-300 bg-gray-100 text-gray-700 hover:bg-gray-200"
        >
        +
        </button>
    </div>
    );
}

import { useState } from "react";

export default function QuantityInput({ initial = 1 }) {
    const [quantity, setQuantity] = useState(initial);

    const decrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
    };

    const increase = () => {
    setQuantity(quantity + 1);
    };

    return (
    <div className="mt-2 flex items-center">
        {/* Минус бутон */}
        <button
        type="button"
        onClick={decrease}
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
        onClick={increase}
        className="px-3 py-1 rounded-r-md border border-gray-300 bg-gray-100 text-gray-700 hover:bg-gray-200"
        >
        +
        </button>
    </div>
    );
}

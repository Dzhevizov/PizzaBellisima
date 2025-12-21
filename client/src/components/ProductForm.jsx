import { useState } from "react";

export default function ProductForm({ product = {}, onSubmit }) {
    const [name, setName] = useState(product.name || "");
    const [category, setCategory] = useState(product.category || "pizza");
    const [price, setPrice] = useState(product.price || 0);
    const [discount, setDiscount] = useState(product.discount || 0);
    const [size, setSize] = useState(product.size || "");
    const [description, setDescription] = useState(product.description || "");
    const [ingredients, setIngredients] = useState(product.ingredients || "");
    const [image, setImage] = useState(product.image || "");

    const handleSubmit = (e) => {
    e.preventDefault();

    const productData = {
        _id: product._id || undefined, // само при редакция
        name,
        category,
        price: Number(price),
        discount: Number(discount),
        size,
        description,
        ingredients,
        image,
    };

    onSubmit(productData);
    };

    return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-xl font-bold text-gray-800">
        {product._id ? "Редакция на продукт" : "Добавяне на нов продукт"}
        </h2>

        <div>
        <label className="block text-sm font-medium text-gray-700">Име</label>
        <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full rounded-md border-gray-300 shadow-sm"
            required
        />
        </div>

        <div>
        <label className="block text-sm font-medium text-gray-700">Категория</label>
        <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 w-full rounded-md border-gray-300 shadow-sm"
        >
            <option value="pizza">Пица</option>
            <option value="pasta">Паста</option>
            <option value="risotto">Ризото</option>
            <option value="dessert">Десерт</option>
            <option value="drink">Напитка</option>
        </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
        <div>
            <label className="block text-sm font-medium text-gray-700">Цена</label>
            <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="mt-1 w-full rounded-md border-gray-300 shadow-sm"
            step="0.01"
            required
            />
        </div>
        <div>
            <label className="block text-sm font-medium text-gray-700">Отстъпка (%)</label>
            <input
            type="number"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            className="mt-1 w-full rounded-md border-gray-300 shadow-sm"
            step="1"
            />
        </div>
        </div>

        <div>
        <label className="block text-sm font-medium text-gray-700">Размер</label>
        <input
            type="text"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="mt-1 w-full rounded-md border-gray-300 shadow-sm"
        />
        </div>

        <div>
        <label className="block text-sm font-medium text-gray-700">Описание</label>
        <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 w-full rounded-md border-gray-300 shadow-sm"
            rows={3}
        />
        </div>

        <div>
        <label className="block text-sm font-medium text-gray-700">Съставки</label>
        <input
            type="text"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="mt-1 w-full rounded-md border-gray-300 shadow-sm"
        />
        </div>

        <div>
        <label className="block text-sm font-medium text-gray-700">URL на изображение</label>
        <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="mt-1 w-full rounded-md border-gray-300 shadow-sm"
        />
        </div>

        <button
        type="submit"
        className="mt-4 w-full rounded-md bg-red-600 px-6 py-3 text-base font-semibold text-white hover:bg-red-500"
        >
        {product._id ? "Запази промените" : "Добави продукт"}
        </button>
    </form>
    );
}

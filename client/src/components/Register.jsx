import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

export default function Register() {
  const { registerHandler } = useContext(AuthContext);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== rePassword) {
      alert("Паролите не съвпадат!");
      return;
    }

    await registerHandler(username, password, {
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      notes,
    });

    navigate("/catalog");
  };

  return (
    <div className="flex justify-center items-start py-24 bg-gray-50">
        <div className="max-w-3xl w-full bg-gray-100 shadow-lg rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-12">
                {/* Регистрация */}
                <div className="border-b border-gray-300 pb-8">
                <h2 className="text-xl font-bold text-gray-900">Регистрация</h2>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                        Потребителско име
                    </label>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="mt-2 block w-full rounded-md border border-gray-400 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                    />
                    </div>

                    <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Парола
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-2 block w-full rounded-md border border-gray-400 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                    />
                    </div>

                    <div>
                    <label htmlFor="re-password" className="block text-sm font-medium text-gray-700">
                        Повторете паролата
                    </label>
                    <input
                        id="re-password"
                        name="re-password"
                        type="password"
                        value={rePassword}
                        onChange={(e) => setRePassword(e.target.value)}
                        className="mt-2 block w-full rounded-md border border-gray-400 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                    />
                    </div>
                </div>
                </div>

                {/* Лична информация */}
                <div className="border-b border-gray-300 pb-8">
                <h2 className="text-xl font-bold text-gray-900">Лична информация</h2>
                <p className="mt-1 text-sm text-gray-500">
                    Използвайте личен имейл, на който да получавате информация за Вашите поръчки.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                    <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        Име
                    </label>
                    <input
                        id="first-name"
                        name="first-name"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="mt-2 block w-full rounded-md border border-gray-400 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                    />
                    </div>

                    <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Фамилия
                    </label>
                    <input
                        id="last-name"
                        name="last-name"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="mt-2 block w-full rounded-md border border-gray-400 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                    />
                    </div>

                    <div className="sm:col-span-2 grid grid-cols-2 gap-4">
                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                            </label>
                            <input
                            id="email"
                            name="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-2 block w-full rounded-md border border-gray-400 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                            />
                        </div>

                        {/* Телефон */}
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                            Телефон
                            </label>
                            <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            pattern="^\+359[0-9]{9}$"
                            placeholder="+359888123456"
                            className="mt-2 block w-full rounded-md border border-gray-400 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                            />
                            <p className="mt-1 text-xs text-gray-500">Формат: +359XXXXXXXXX</p>
                        </div>
                    </div>


                    <div className="sm:col-span-2">
                    <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                        Адрес за доставка
                    </label>
                    <input
                        id="street-address"
                        name="street-address"
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="mt-2 block w-full rounded-md border border-gray-400 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                    />
                    </div>

                    <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        Град
                    </label>
                    <input
                        id="city"
                        name="city"
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="mt-2 block w-full rounded-md border border-gray-400 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                    />
                    </div>
                </div>
                </div>

                {/* Бележки */}
                <div>
                <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                    Бележки
                </label>
                <textarea
                    id="about"
                    name="about"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="mt-2 block w-full rounded-md border border-gray-400 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                    placeholder="Оставете инструкции и предпочитания към доставчика..."
                />
                </div>

                {/* Бутони */}
                <div className="mt-8 flex items-center justify-end gap-x-4">
                <button
                    type="button"
                    className="rounded-md border border-gray-400 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    onClick={() => navigate("/")}
                >
                    Отмени
                </button>
                <button
                    type="submit"
                    className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                    Регистрирай се
                </button>
                </div>
            </form>
        </div>
    </div>
  );
}

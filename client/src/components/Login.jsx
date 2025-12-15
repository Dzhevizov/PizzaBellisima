import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

export default function Login() {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(username, password);
    if (success) {
      navigate("/catalog");
    } else {
      setError("Грешно потребителско име или парола");
    }
  };

  return (
    <div className="flex justify-center items-start py-34 bg-gray-50"> 
        <div className="max-w-md w-full bg-gray-100 shadow-lg rounded-lg p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Вход в профила</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Потребителско име */}
                <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                    Потребителско име
                </label>
                <input
                    id="username"
                    type="text"
                    placeholder="Въведете потребителско име"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="mt-2 block w-full rounded-md border border-gray-400 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                />
                </div>

                {/* Парола */}
                <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Парола
                </label>
                <input
                    id="password"
                    type="password"
                    placeholder="Въведете парола"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-2 block w-full rounded-md border border-gray-400 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                />
                </div>

                {/* Грешка */}
                {error && <p className="text-red-600 text-sm">{error}</p>}

                {/* Бутон */}
                <div className="flex items-center justify-end">
                <button
                    type="submit"
                    className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                    Вход
                </button>
                </div>
            </form>

            {/* Линк към регистрация */}
            <div className="mt-6 text-center text-sm">
                <p className="text-gray-700">
                Нямате профил?{" "}
                <Link
                    to="/register"
                    className="font-medium text-red-600 hover:text-red-500"
                >
                    Регистрирайте се
                </Link>
                </p>
            </div>
        </div>
    </div>
    
  );
}

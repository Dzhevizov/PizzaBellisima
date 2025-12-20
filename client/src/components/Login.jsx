import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { useAuthContext } from "../contexts/AuthContext";

export default function Login() {
    const { loginHandler } = useAuthContext();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await loginHandler(email, password);
        navigate("/");
    } catch {
        setError("Грешен имейл или парола");
    }
    };


    return (
    <div className="flex justify-center items-start py-24 bg-gray-50">
      <div className="max-w-md w-full bg-gray-100 shadow-lg rounded-lg p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Вход в профила</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Имейл
            </label>
            <input
              id="email"
              type="email"
              placeholder="Въведете имейл"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 block w-full rounded-md border border-gray-400 px-3 py-2"
            />
          </div>
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
              className="mt-2 block w-full rounded-md border border-gray-400 px-3 py-2"
            />
          </div>
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <button type="submit" className="rounded-md bg-red-600 px-4 py-2 text-white">
            Вход
          </button>
        </form>
        <div className="mt-6 text-center text-sm">
          <p className="text-gray-700">
            Нямате профил?{" "}
            <Link to="/register" className="font-medium text-red-600 hover:text-red-500">
              Регистрирайте се
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

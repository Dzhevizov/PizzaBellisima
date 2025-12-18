import { PopoverGroup } from '@headlessui/react'
import { MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import logo from "./../assets/logo/pizza-bellisima-logo.png"
import { Link } from 'react-router'
import { useAuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router";

export default function Navigation({ onCartClick, cartCount }) {
    const { isAuthenticated, logoutHandler, user } = useAuthContext();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logoutHandler();
        navigate("/login");
    };

    const pages = [
    { name: "Каталог", to: "/catalog" },
    ...(user?.role === "admin"
      ? [{ name: "Дневни поръчки", to: "/orders" }]
      : isAuthenticated
      ? [{ name: "Моите поръчки", to: "/orders" }]
      : []),
  ];

    return (
        <div className="bg-white">
        <header className="relative bg-white">
            <p className="flex h-10 items-center justify-center bg-red-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
            Безплатна доставка във Варна за поръчки над 20 лв
            </p>

            <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="border-b border-gray-200">
                <div className="flex h-16 items-center">
                {/* Logo */}
                <div className="ml-4 flex lg:ml-0">
                    <Link to="/">
                    <span className="sr-only">Pizza Bellisima</span>
                    <img alt="Pizza Bellisima" src={logo} className="h-20 w-auto" />
                    </Link>
                </div>

                {/* Navigation */}
                <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                    <div className="flex h-full space-x-8">
                    {pages.map((page) => (
                        <Link
                            key={page.name}
                            to={page.to}
                            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                            >
                            {page.name}
                        </Link>
                    ))}
                    </div>
                </PopoverGroup>

                <div className="ml-auto flex items-center">
                    <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                        {!isAuthenticated ? (
                            <>
                            <Link
                                to="/login"
                                className="text-sm font-medium text-gray-700 hover:text-gray-800"
                            >
                                Вход
                            </Link>
                            <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                            <Link
                                to="/register"
                                className="text-sm font-medium text-gray-700 hover:text-gray-800"
                            >
                                Регистрация
                            </Link>
                            </>
                            ) : (
                                <>
                                <span className="text-sm font-medium text-gray-700">
                                    Здравей, <strong>{user?.username}</strong>
                                </span>
                                <button
                                    onClick={handleLogout}
                                    className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-red-500"
                                >
                                    Изход
                                </button>
                                </>
                            )}
                    </div>

                    {/* Cart */}
                    <div className="ml-4 flow-root lg:ml-6">
                        <button
                            onClick={onCartClick}
                            className="group -m-2 flex items-center p-2"
                        >
                            <ShoppingBagIcon
                            aria-hidden="true"
                            className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                            />
                            <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                            {cartCount}
                            </span>
                            <span className="sr-only">Артикули в количката</span>
                        </button>
                    </div>
                </div>
                </div>
            </div>
            </nav>
        </header>
        </div>
    )
}

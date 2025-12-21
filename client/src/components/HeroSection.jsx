import { Link } from "react-router";

export default function HeroSection() {
  return (
    <div
      className="bg-gray-900 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/pizza-bg.jpg')", backgroundPosition: "center 30%" }}
    >
      <div className="relative isolate px-6 pt-14 lg:px-8 bg-black/50">
        <div className="mx-auto max-w-2xl py-8 sm:py-12 lg:py-16">

            <div className="mt-10 flex items-center justify-center gap-x-6">
                <p className="mt-8 text-2xl font-semibold text-gray-100 sm:text-3xl">
                    Добре дошли в Пицария Белисима!
                </p>
            </div>
          
            <div className="mt-10 flex items-center justify-center gap-x-6">
                <h1 className="text-7xl font-extrabold tracking-tight text-white sm:text-9xl">
                    -20%
                </h1>
            </div>

            <div className="mt-10 flex items-center justify-center gap-x-6">
                <p className="mt-8 text-2xl font-semibold text-gray-100 sm:text-3xl">
                    допълнителна празнична отстъпка
                </p>
            </div>

            <div className="mt-10 flex items-center justify-center gap-x-6">
                <p className="mt-8 text-lg font-medium text-gray-200 sm:text-xl">
                    само до 31 декември
                </p>
            </div>

            <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                to="/catalog"
                className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow hover:bg-red-500"
                >
                Виж менюто
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
}

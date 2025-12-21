export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl font-extrabold text-red-600">404</h1>

      <h2 className="mt-4 text-2xl font-semibold text-gray-800">
        Страницата не е намерена
      </h2>

      <p className="mt-2 text-gray-600 max-w-md">
        Изглежда сте попаднали на страница, която не съществува или е преместена.
      </p>

      <div className="mt-6 flex space-x-4">
        <a
          href="/"
          className="px-6 py-3 rounded-md bg-red-600 text-white font-semibold hover:bg-red-500"
        >
          Към началото
        </a>

        <a
          href="/catalog"
          className="px-6 py-3 rounded-md bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300"
        >
          Към каталога
        </a>
      </div>
    </div>
  );
}

export default function Forbidden() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold text-red-600">403 – Нямате достъп</h1>
      <p className="mt-4 text-gray-600">Тази страница е достъпна само за администратори.</p>
    </div>
  );
}

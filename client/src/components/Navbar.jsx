import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="bg-red-600 items-center justify-center text-white p-4 flex gap-4">
      <Link to="/catalog">Италиански пици</Link>
      <Link to="/catalog/pasta">Паста</Link>
      <Link to="/catalog/risotto">Ризото</Link>
      <Link to="/catalog/dessert">Десерти</Link>
      <Link to="/catalog/drink">Напитки</Link>
    </nav>
  );
}

import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="bg-red-600 text-white p-4 flex gap-4">
      <Link to="/catalog">Catalog</Link>
      <Link to="/orders">My Orders</Link>
      <Link to="/admin">Admin Panel</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  );
}

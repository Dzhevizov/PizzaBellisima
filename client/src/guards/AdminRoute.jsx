import { Navigate } from "react-router";
import { useAuthContext } from "../contexts/AuthContext";

export default function AdminRoute({ children }) {
  const { isAuthenticated, isAdmin } = useAuthContext();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!isAdmin) {
    return <Navigate to="/403" replace />;
  }

  return children;
}

import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

export const ProtectedRoute = () => {
  const { user } = useAuth();
  
  if (!user) {
    // Redirect them to login if they aren't authenticated
    return <Navigate to="/login" replace />;
  }

  return <Outlet />; // Render the child routes (like /admin)
};
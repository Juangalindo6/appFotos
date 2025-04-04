import { createBrowserRouter, Navigate } from "react-router-dom";
import { auth } from "./firabase/firabaseConfig";

// Importación de componentes
import Login from "./screens/Login/login";

// Componente para proteger rutas
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  if (!auth.currentUser) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

// Configuración de rutas
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <div>Home Page</div>
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
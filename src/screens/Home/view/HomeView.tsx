import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HomeController } from "../controller/HomeController";
import { HomeState, UserProfile } from "../model/HomeModel";
import AdminPanel from "../../../components/admin/AdminPanel";

const HomeView = () => {
  // Estado del componente usando la interfaz del modelo
  const [homeState, setHomeState] = useState<HomeState>({
    userEmail: null,
    loading: true,
    error: null
  });
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const navigate = useNavigate();

  // Efecto para cargar los datos del usuario al montar el componente
  useEffect(() => {
    const loadUserProfile = async () => {
      try {
        const profile = await HomeController.getUserProfile();
        if (profile) {
          setUserProfile(profile);
          setHomeState({
            userEmail: profile.email,
            loading: false,
            error: null
          });
        } else {
          setHomeState({
            userEmail: null,
            loading: false,
            error: "No se pudo cargar la información del usuario"
          });
        }
      } catch (error) {
        setHomeState({
          userEmail: null,
          loading: false,
          error: "Error al cargar el perfil de usuario"
        });
      }
    };

    loadUserProfile();
  }, []);

  // Manejador para cerrar sesión
  const handleLogout = async () => {
    try {
      const response = await HomeController.logout();
      if (response.success) {
        navigate("/login");
      } else {
        setHomeState({
          ...homeState,
          error: response.error || "Error al cerrar sesión"
        });
      }
    } catch (error) {
      setHomeState({
        ...homeState,
        error: "Error inesperado al cerrar sesión"
      });
    }
  };

  // Mostrar indicador de carga mientras se obtienen los datos
  if (homeState.loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto">
          {/* Cabecera con información del usuario y botón de cerrar sesión */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 pb-4 border-b border-gray-200">
            <div className="flex items-center mb-4 md:mb-0">
              {/* Avatar circular con la primera letra del correo */}
              <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold mr-4">
                {userProfile?.avatarLetter || "U"}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">¡Bienvenido!</h1>
                <p className="text-gray-600">{homeState.userEmail}</p>
                {userProfile?.role && (
                  <p className="text-gray-500 mt-1 flex items-center">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                    Rol: {userProfile.role}
                  </p>
                )}
              </div>
            </div>
            {/* Botón para cerrar sesión */}
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Cerrar Sesión
            </button>
          </div>

          {/* Mostrar mensaje de error si existe */}
          {homeState.error && (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded">
              <p>{homeState.error}</p>
            </div>
          )}

          {/* Contenido principal de la página */}
          <div className="py-8">
            {/* Panel de administración - solo visible para usuarios con rol 'admin' */}
            {userProfile?.role === 'admin' && <AdminPanel />}
            
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Bienvenido a la Aplicación de Fotos</h2>
              <p className="text-gray-600 mb-8">Aquí podrás gestionar tus fotografías y álbumes.</p>
              
              {/* Contenido común para todos los usuarios */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">Mis Fotos</h3>
                  <p className="text-gray-600">Accede a tu galería de fotos</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-xl font-semibold text-purple-800 mb-2">Álbumes</h3>
                  <p className="text-gray-600">Organiza tus fotos en álbumes</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Compartir</h3>
                  <p className="text-gray-600">Comparte tus fotos con amigos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
// Definición de tipos e interfaces para la pantalla Home

// Interfaz para el estado del componente Home
export interface HomeState {
  userEmail: string | null;
  loading: boolean;
  error: string | null;
}

// Interfaz para la respuesta de cierre de sesión
export interface LogoutResponse {
  success: boolean;
  error?: string;
}

// Interfaz para los datos de usuario
export interface UserProfile {
  email: string;
  avatarLetter: string;
  role?: string;
}
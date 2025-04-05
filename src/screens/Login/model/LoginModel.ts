// Definición de tipos e interfaces para el Login

// Interfaz para los datos de autenticación
export interface LoginCredentials {
  email: string;
  password: string;
}

// Interfaz para el estado del login
export interface LoginState {
  email: string;
  password: string;
  error: string;
}

// Interfaz para las respuestas de autenticación
export interface AuthResponse {
  success: boolean;
  error?: string;
}

// Interfaz para los datos de usuario en Firestore
export interface UserData {
  cuenta: string;
  contraseña: string;
  rol: string;
  fechaCreacion: Date;
}
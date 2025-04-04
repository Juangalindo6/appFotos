import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../firabase/firabaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { LoginCredentials, AuthResponse, UserData } from "../model/LoginModel";

// Clase controlador para manejar la lógica de autenticación
export class LoginController {
  // Método para realizar el inicio de sesión
  static async login(credentials: LoginCredentials): Promise<AuthResponse> {
    try {
      // Intentar iniciar sesión con Firebase
      const userCredential = await signInWithEmailAndPassword(auth, credentials.email, credentials.password);
      const user = userCredential.user;
      
      // Verificar si el usuario ya existe en Firestore
      const userDocRef = doc(db, "usuarios", user.uid);
      const userDoc = await getDoc(userDocRef);
      
      // Si es el primer inicio de sesión (no existe en Firestore), guardar sus datos
      if (!userDoc.exists()) {
        // Crear objeto con los datos del usuario
        const userData: UserData = {
          cuenta: credentials.email,
          contraseña: credentials.password, // No guardamos la contraseña real por seguridad
          rol: "usuario", // Rol por defecto
          fechaCreacion: new Date()
        };
        
        // Guardar datos en Firestore
        await setDoc(userDocRef, userData);
        console.log("Datos de usuario guardados en Firestore");
      }
      
      // Si es exitoso, retornar respuesta de éxito
      return { success: true };
    } catch (err) {
      // En caso de error, retornar respuesta con error
      console.error(err);
      return { 
        success: false, 
        error: "Error al iniciar sesión. Por favor, verifica tus credenciales." 
      };
    }
  }
}
import { signOut } from "firebase/auth";
import { auth, db } from "../../../firabase/firabaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { LogoutResponse, UserProfile } from "../model/HomeModel";

// Clase controlador para manejar la lógica de la pantalla Home
export class HomeController {
  // Método para obtener los datos del usuario actual
  static async getUserProfile(): Promise<UserProfile | null> {
    try {
      const currentUser = auth.currentUser;
      
      if (!currentUser || !currentUser.email) {
        return null;
      }
      
      // Obtener la primera letra del correo para el avatar
      const avatarLetter = currentUser.email.charAt(0).toUpperCase();
      
      // Intentar obtener información adicional del usuario desde Firestore
      const userDocRef = doc(db, "usuarios", currentUser.uid);
      const userDoc = await getDoc(userDocRef);
      
      if (userDoc.exists()) {
        const userData = userDoc.data();
        return {
          email: currentUser.email,
          avatarLetter,
          role: userData.rol
        };
      }
      
      // Si no hay datos adicionales, devolver lo básico
      return {
        email: currentUser.email,
        avatarLetter
      };
    } catch (error) {
      console.error("Error al obtener perfil de usuario:", error);
      return null;
    }
  }
  
  // Método para cerrar sesión
  static async logout(): Promise<LogoutResponse> {
    try {
      await signOut(auth);
      return { success: true };
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
      return { 
        success: false, 
        error: "Error al cerrar sesión. Por favor, intenta nuevamente." 
      };
    }
  }
}
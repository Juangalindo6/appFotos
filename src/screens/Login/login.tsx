import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firabase/firabaseConfig";
import camaraPng from "../../assets/camara.png";
import camaraCanon from "../../assets/camara-canon.png";
import camaraRosa from "../../assets/camara-rosa.png";
import curlyGirl from "../../assets/curly-girl-with-a-camara.png";
import rosa from "../../assets/rosa-.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setError("Error al iniciar sesión. Por favor, verifica tus credenciales.");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-[-1] overflow-hidden p-8 grid grid-cols-6 gap-4">
        <img src={camaraPng} alt="camera background" className="absolute object-cover h-32 w-32 transition-all duration-300 hover:scale-110 hover:rotate-[15deg] floating-image" style={{ top: '5%', left: '5%', transform: `rotate(18deg) scale(1)`, animation: 'float 4s ease-in-out infinite' }} data-rotation="18deg" />
        <img src={rosa} alt="camera background" className="absolute object-cover h-32 w-32 transition-all duration-300 hover:scale-110 hover:rotate-[15deg] floating-image" style={{ top: '15%', left: '25%', transform: `rotate(-25deg) scale(1)`, animation: 'float 5s ease-in-out infinite 0.5s' }} data-rotation="-25deg" />
        <img src={curlyGirl} alt="camera background" className="absolute object-cover h-32 w-32 transition-all duration-300 hover:scale-110 hover:rotate-[15deg] floating-image" style={{ top: '10%', left: '45%', transform: `rotate(35deg) scale(1)`, animation: 'float 4.5s ease-in-out infinite 1s' }} data-rotation="35deg" />
        <img src={camaraCanon} alt="camera background" className="absolute object-cover h-32 w-32 transition-all duration-300 hover:scale-110 hover:rotate-[15deg] floating-image" style={{ top: '5%', left: '65%', transform: `rotate(-18deg) scale(1)`, animation: 'float 3.5s ease-in-out infinite 1.5s' }} data-rotation="-18deg" />
        <img src={camaraRosa} alt="camera background" className="absolute object-cover h-32 w-32 transition-all duration-300 hover:scale-110 hover:rotate-[15deg] floating-image" style={{ top: '15%', left: '85%', transform: `rotate(28deg) scale(1)`, animation: 'float 4.8s ease-in-out infinite 0.8s' }} data-rotation="28deg" />
        <img src={camaraCanon} alt="camera background" className="absolute object-cover h-32 w-32 transition-all duration-300 hover:scale-110 hover:rotate-[15deg] floating-image" style={{ top: '25%', left: '15%', transform: 'rotate(-28deg) scale(1)', animation: 'float 4.2s ease-in-out infinite 1.2s' }} data-rotation="-28deg" />
        <img src={curlyGirl} alt="camera background" className="absolute object-cover h-32 w-32 transition-all duration-300 hover:scale-110 hover:rotate-[15deg] floating-image" style={{ top: '30%', left: '35%', transform: 'rotate(22deg) scale(1)', animation: 'float 3.8s ease-in-out infinite 0.3s' }} data-rotation="22deg" />
        <img src={camaraPng} alt="camera background" className="absolute object-cover h-32 w-32 transition-all duration-300 hover:scale-110 hover:rotate-[15deg] floating-image" style={{ top: '25%', left: '55%', transform: 'rotate(-32deg) scale(1)', animation: 'float 5.2s ease-in-out infinite 1.8s' }} data-rotation="-32deg" />
        <img src={curlyGirl} alt="camera background" className="absolute object-cover h-32 w-32 transition-all duration-300 hover:scale-110 hover:rotate-[15deg] floating-image" style={{ top: '30%', left: '75%', transform: 'rotate(15deg) scale(1)', animation: 'float 4.6s ease-in-out infinite 0.6s' }} data-rotation="15deg" />
        <img src={rosa} alt="camera background" className="absolute object-cover h-32 w-32 transition-all duration-300 hover:scale-110 hover:rotate-[15deg] floating-image" style={{ top: '45%', left: '5%', transform: 'rotate(-22deg) scale(1)', animation: 'float 3.9s ease-in-out infinite 1.4s' }} data-rotation="-22deg" />
        <img src={curlyGirl} alt="camera background" className="absolute object-cover h-32 w-32 transition-all duration-300 hover:scale-110 hover:rotate-[15deg] floating-image" style={{ top: '50%', left: '25%', transform: 'rotate(25deg) scale(1)', animation: 'float 4.4s ease-in-out infinite 0.9s' }} data-rotation="25deg" />
        <img src={camaraPng} alt="camera background" className="absolute object-cover h-32 w-32 transition-all duration-300 hover:scale-110 hover:rotate-[15deg] floating-image" style={{ top: '45%', left: '45%', transform: 'rotate(-15deg) scale(1)', animation: 'float 5s ease-in-out infinite 1.1s' }} data-rotation="-15deg" />
        <img src={camaraCanon} alt="camera background" className="absolute object-cover h-32 w-32 transition-all duration-300 hover:scale-110 hover:rotate-[15deg] floating-image" style={{ top: '50%', left: '65%', transform: 'rotate(20deg) scale(1)', animation: 'float 4.3s ease-in-out infinite 0.7s' }} data-rotation="20deg" />
        <img src={camaraRosa} alt="camera background" className="absolute object-cover h-32 w-32 transition-all duration-300 hover:scale-110 hover:rotate-[15deg] floating-image" style={{ top: '45%', left: '85%', transform: 'rotate(-28deg) scale(1)', animation: 'float 4.7s ease-in-out infinite 1.3s' }} data-rotation="-28deg" />
        <img src={curlyGirl} alt="camera background" className="absolute object-cover h-32 w-32 transition-all duration-300 hover:scale-110 hover:rotate-[15deg] floating-image" style={{ top: '65%', left: '15%', transform: 'rotate(32deg) scale(1)', animation: 'float 4.1s ease-in-out infinite 1.6s' }} data-rotation="32deg" />
        <img src={camaraPng} alt="camera background" className="absolute object-cover h-32 w-32 transition-all duration-300 hover:scale-110 hover:rotate-[15deg] floating-image" style={{ top: '70%', left: '35%', transform: 'rotate(-30deg) scale(1)', animation: 'float 4.9s ease-in-out infinite 0.4s' }} data-rotation="-30deg" />
        <img src={rosa} alt="camera background" className="absolute object-cover h-32 w-32 transition-all duration-300 hover:scale-110 hover:rotate-[15deg] floating-image" style={{ top: '65%', left: '55%', transform: 'rotate(25deg) scale(1)', animation: 'float 3.7s ease-in-out infinite 1.7s' }} data-rotation="25deg" />
        <img src={camaraCanon} alt="camera background" className="absolute object-cover h-32 w-32 transition-all duration-300 hover:scale-110 hover:rotate-[15deg] floating-image" style={{ top: '70%', left: '75%', transform: 'rotate(-20deg) scale(1)', animation: 'float 4.5s ease-in-out infinite 0.2s' }} data-rotation="-20deg" />
        <img src={curlyGirl} alt="camera background" className="absolute object-cover h-32 w-32 transition-all duration-300 hover:scale-110 hover:rotate-[15deg] floating-image" style={{ top: '65%', left: '95%', transform: 'rotate(35deg) scale(1)', animation: 'float 5.1s ease-in-out infinite 1.9s' }} data-rotation="35deg" />
        <img src={rosa} alt="camera background" className="absolute object-cover h-32 w-32 transition-all duration-300 hover:scale-110 hover:rotate-[15deg] floating-image" style={{ top: '85%', left: '5%', transform: 'rotate(-15deg) scale(1)', animation: 'float 4.3s ease-in-out infinite 0.5s' }} data-rotation="-15deg" />
        <img src={camaraPng} alt="camera background" className="absolute object-cover h-32 w-32 transition-all duration-300 hover:scale-110 hover:rotate-[15deg] floating-image" style={{ top: '90%', left: '25%', transform: 'rotate(28deg) scale(1)', animation: 'float 3.8s ease-in-out infinite 1.2s' }} data-rotation="28deg" />
        <img src={camaraRosa} alt="camera background" className="absolute object-cover h-32 w-32 transition-all duration-300 hover:scale-110 hover:rotate-[15deg] floating-image" style={{ top: '85%', left: '45%', transform: 'rotate(-22deg) scale(1)', animation: 'float 4.6s ease-in-out infinite 0.8s' }} data-rotation="-22deg" />
        <img src={camaraCanon} alt="camera background" className="absolute object-cover h-32 w-32 transition-all duration-300 hover:scale-110 hover:rotate-[15deg] floating-image" style={{ top: '90%', left: '65%', transform: 'rotate(18deg) scale(1)', animation: 'float 5s ease-in-out infinite 1.5s' }} data-rotation="18deg" />
        <img src={rosa} alt="camera background" className="absolute object-cover h-32 w-32 transition-all duration-300 hover:scale-110 hover:rotate-[15deg] floating-image" style={{ top: '85%', left: '85%', transform: 'rotate(-35deg) scale(1)', animation: 'float 4.2s ease-in-out infinite 0.3s' }} data-rotation="-35deg" />
      </div>
      <div className="max-w-md w-full bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl z-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Iniciar Sesión</h2>
        {error && <p className="text-red-500 text-sm mb-6 bg-red-50 p-3 rounded-lg">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              placeholder="tu@email.com"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform transition-all duration-200 hover:scale-[1.02]"
          >
            Iniciar Sesión...
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
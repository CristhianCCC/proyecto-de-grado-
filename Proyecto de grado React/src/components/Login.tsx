import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const authHeader = "Basic " + btoa(`${usuario}:${contrasena}`);
      localStorage.setItem("auth", authHeader);

      await axios.get("http://localhost:8080/vehiculo", {
        headers: {
          Authorization: authHeader,
        },
      });

      navigate("/vehiculos");
    } catch (err) {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <motion.form
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl px-8 pt-8 pb-10 w-full max-w-md border border-gray-200"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Perfil de Administrador
        </h2>

        {/* Usuario */}
        <div className="mb-5">
          <label
            htmlFor="usuario"
            className="block text-gray-700 font-medium mb-1"
          >
            Usuario
          </label>
          <input
            id="usuario"
            type="text"
            placeholder="Ingrese su usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
            className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-500"
          />
        </div>

        {/* Contraseña */}
        <div className="mb-5">
          <label
            htmlFor="contrasena"
            className="block text-gray-700 font-medium mb-1"
          >
            Contraseña
          </label>
          <input
            id="contrasena"
            type="password"
            placeholder="Ingrese su contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required
            className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-500"
          />
        </div>

        {/* Error */}
        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-600 text-sm mb-4 text-center font-medium"
          >
            {error}
          </motion.p>
        )}

        {/* Botón */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition"
        >
          Iniciar Sesión
        </motion.button>
      </motion.form>
    </div>
  );
}

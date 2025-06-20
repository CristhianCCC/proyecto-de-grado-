import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

      // Prueba con un endpoint público o protegido
      await axios.get("http://localhost:8080/vehiculo", {
        headers: {
          Authorization: authHeader,
        },
      });

      // Redirige si la autenticación fue exitosa
      navigate("/vehiculos");
    } catch (err) {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="flex justify-center items-center p-20 bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-2xl px-8 pt-6 pb-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Perfil de Administrador</h2>

        <div className="mb-4">
          <label
            htmlFor="usuario"
            className="block text-gray-700"
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
            className="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="contrasena"
            className="block text-gray-700"
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
            className="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded w-full">Iniciar Sesión</button>
        </div>
      </form>
    </div>
  );
}

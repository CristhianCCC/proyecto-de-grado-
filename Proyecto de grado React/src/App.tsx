import { Route, Routes, useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import VehiculoCard from "./components/VehiculoCard";
import VehiculoInfo from "./components/VehiculoInfo";
import CrearVehiculo from "./components/CrearVehiculo";
import Contacto from "./components/Contacto";
import LandingPage from "./pages/LandingPage"; // Único cambio: Importar LandingPage
import Login from "./components/Login";

function App() {
  const navigate = useNavigate();


  function isAuthenticated () {
    const token = localStorage.getItem("auth");
    return token && token.startsWith("Basic");
  }

  return (
    <Routes>
      {/* Ruta para Landing Page */}
      <Route path="/" element={<LandingPage />} />

      {/* Rutas existentes (sin cambios) */}
      <Route path="*" element={
        <>
          <NavBar />
          <Routes>
            <Route path="/vehiculos" element={
              <>
                <div className="py-20 text-black text-center font-bold container mx-auto flex justify-around items-center">
                  <h1 className="text-3xl font-bold text-gray-800 mb-4">Vehículos Disponibles</h1>        
                  {isAuthenticated() && (
                  <button 
                    className="hover:cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300" 
                    onClick={() => navigate("/vehiculo/crear")}
                  >
                    + Crear Vehículo
                  </button>
            )}
                </div>
                <div className="container mx-auto">
                  <div className="xl:grid xl:grid-cols-4 lg:grid-cols-3 md:grid md:grid-cols-2 gap-5">
                    <VehiculoCard/>
                  </div>
                </div>
              </>
            }/>
            <Route path="/vehiculo/:id" element={<VehiculoInfo />} />
            <Route path="/vehiculo/crear" element={<CrearVehiculo/>} />
            <Route path="/vehiculo/crear/:id" element={<CrearVehiculo/>}/>
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/login" element={<Login/>}/>
          </Routes>
          <Footer />
        </>
      }/>
    </Routes>
  );
}

export default App;
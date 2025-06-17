import { Route, Routes, useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import VehiculoCard from "./components/VehiculoCard";
import VehiculoInfo from "./components/VehiculoInfo";
import CrearVehiculo from "./components/CrearVehiculo";
import Contacto from "./components/Contacto";
import LandingPage from "./pages/LandingPage"; // Único cambio: Importar LandingPage

function App() {
  const navigate = useNavigate();

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
                  <button 
                    className="hover:cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300" 
                    onClick={() => navigate("/vehiculo/crear")}
                  >
                    + Crear Vehículo
                  </button>
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
          </Routes>
          <Footer />
        </>
      }/>
    </Routes>
  );
}

export default App;
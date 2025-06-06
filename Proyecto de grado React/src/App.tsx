import { Route, Routes } from "react-router"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import VehiculoCard from "./components/VehiculoCard"
import VehiculoInfo from "./components/VehiculoInfo"
import { useNavigate } from "react-router"
import CrearVehiculo from "./components/CrearVehiculo"

function App() {

  const crearVehiculo = useNavigate();

  return (
    <>

    <NavBar/>

    {/*Ruta para ver el listado de vehiculos inicio*/}
    <Routes>
        <Route path="/vehiculos" element={
          <>
          <div className="py-20 text-black text-center font-bold container mx-auto flex justify-around items-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Vehículos Disponibles</h1>          
          <button className="hover:cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300" onClick={() => crearVehiculo("/vehiculo/crear")}>
          + Crear Vehículo</button>
        </div>
        <div className="container mx-auto">
        <div className="xl:grid xl:grid-cols-4 lg:grid-cols-3 md:grid md:grid-cols-2 gap-5">
          <VehiculoCard/>
        </div>
        </div>
        
        </>
        }/>
        
        {/*Ruta para ver el listado de vehiculos final*/}
        <Route path="/vehiculo/:id" element={<VehiculoInfo />} />
        {/*Ruta para crear un vehiculo*/}
        <Route path="/vehiculo/crear" element={<CrearVehiculo/>} />
        {/*Ruta para editar un vehiculo*/}
        <Route path="/vehiculo/crear/:id" element={<CrearVehiculo/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App

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
          <h1 className="text-2xl">Listado de vehiculos disponibles</h1>
          <button className="bg-indigo-500 shadow-lg shadow-indigo-500/50 font-bold text-white text-center p-4 cursor-pointer rounded-2xl hover:text-2xl" onClick={() => crearVehiculo("/vehiculo/crear")}>Crear Producto</button>
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

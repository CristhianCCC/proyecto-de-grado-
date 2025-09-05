import { useState, useEffect } from "react";
import VehiculoService from "../services/VehiculoService";
import { Vehiculo } from "../types";
import { Link, useParams } from "react-router-dom";
import FormatCurrency from "../helpers";
import MensajesModales from "./MensajesModales";
import { easeInOut, motion } from "motion/react";
import { FaWhatsapp } from "react-icons/fa";

export default function VehiculoInfo() {
  const { id } = useParams();

  const [vehiculoId, setVehiculoId] = useState<Vehiculo>({
    id: 0,
    nombre: "",
    descripcion: "",
    precio: 0,
    puestos: 0,
    imageURL: "",
  });
  const [estado, setEstado] = useState<boolean | null>(null);

  // Obtener información del vehículo por ID
  useEffect(() => {
    if (id) {
      VehiculoService.getVehiculoById(Number(id))
        .then((response: { data: Vehiculo }) => {
          setVehiculoId(response.data);
        })
        .catch((error) => {
          console.log("Error al obtener vehículo:", error);
        });
    }
  }, [id]);

  // Mostrar mensaje mientras se carga la información
  if (!vehiculoId.nombre) {
    return (
      <p className="text-center mt-10 text-gray-500">
        Cargando información del vehículo...
      </p>
    );
  }

  /** Para eliminar el vehículo */
  function EliminarVehiculo(id: number) {
    VehiculoService.deleteVehiculo(id)
      .then(() => {
        setEstado(false);
        setTimeout(() => {
          window.location.href = "/vehiculos";
        }, 2000);
      })
      .catch((error) => {
        console.error("Error al eliminar vehículo:", error);
        setEstado(null); // o manejarlo como true si es éxito
      });
  }

  /** Para redireccionar al formulario y poder editar el vehículo */
  function editarVehiculo(id: number) {
    window.location.href = `/vehiculo/crear/${id}`;
  }


  function isAuthenticated () {
    const token = localStorage.getItem("auth");
    return token && token.startsWith("Basic");
  }

  return (
    <>
      {estado !== null && <MensajesModales estado={estado} />}

      <div className="lg:pt-40 flex flex-col lg:flex-row items-center justify-center px-4 py-10 md:px-10 lg:px-20 max-w-6xl mx-auto">
            <motion.img
            initial= {{opacity: 0, y: 20}}
            animate = {{opacity: 1, y: 0}}
            transition={{ duration: 0.6, ease: easeInOut, delay: 0.4 }}
            whileHover={{ scale: 1.2}}
            whileTap={{ scale: 0.9, opacity: 0.5 }}
            src={vehiculoId.imageURL}
            alt={`Imagen del vehículo ${vehiculoId.nombre}`}
            className="w-full max-w-[500px] h-[300px] rounded-xl shadow-md object-cover mb-10"
          />

        <div className="w-full text-center space-y-6">
            <motion.h1 
              initial = {{ opacity: 0, y: 20 }}
              animate = {{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-4xl font-bold text-gray-800">
              {vehiculoId.nombre}
            </motion.h1>

            <motion.p 
              initial = {{ opacity: 0, y: 20 }}
              animate = {{ opacity: 1, y: 0 }}
              transition={{duration:0.6, delay: 0.6}}
              className="text-lg text-gray-600 break-words whitespace-pre-line mx-10">
              {vehiculoId.descripcion}</motion.p>

            <motion.p 
              initial = {{ opacity: 0, y: 20 }}
              animate = {{ opacity: 1, y: 0 }}
              transition={{duration:0.6, delay: 0.6}}
              className="text-lg text-gray-600 break-words whitespace-pre-line mx-10">
              Espacio para {vehiculoId.puestos} personas</motion.p>

            <motion.p 
              initial = {{ opacity: 0, y: 20 }}
              animate = {{ opacity: 1, y: 0 }}
              transition={{duration:0.6, delay: 0.6}}
            className="text-3xl font-bold text-lime-600">
              Precio: {FormatCurrency(vehiculoId.precio)}
            </motion.p>

            {isAuthenticated() && (
              <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
              <motion.button
                initial = {{ opacity: 0, y: 50 }}
                animate = {{ opacity: 1, y: 0 }}
                transition={{duration:0.6, delay: 0.6}}
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded-lg shadow transition duration-300 hover:cursor-pointer"
                onClick={() => {
                  if (vehiculoId.id !== undefined) {
                    editarVehiculo(vehiculoId.id);
                  }
                }}
              >
                Editar
              </motion.button>
              
                <motion.button
                initial = {{ opacity: 0, y: 50 }}
                animate = {{ opacity: 1, y: 0 }}
                transition={{duration:0.6, delay: 0.6}}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg shadow transition duration-300 hover:cursor-pointer"
                onClick={() => {
                  if (vehiculoId.id !== undefined) {
                    EliminarVehiculo(vehiculoId.id);
                  }
                }}
              >
                Eliminar
              </motion.button>
            </div>
)}       
{!isAuthenticated() && (
  <div className="flex flex-col justify-center sm:flex-row gap-3 m-5">
    {/* Botón Contacto */}
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link
        to="/contacto"
        className="bg-gray-800 hover:bg-gray-700 text-white px-5 py-3 rounded-lg font-semibold shadow-md text-center block"
      >
        Contáctanos para agendar la reserva
      </Link>
    </motion.div>

    {/* Botón WhatsApp */}
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href="https://wa.me/573001234567" // Cambia al número de WhatsApp real
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg font-semibold shadow-md flex items-center justify-center gap-2"
    >
      <FaWhatsapp className="text-xl" />
      Escríbenos por WhatsApp
    </motion.a>
  </div>
)}
</div>
      </div>
    </>
  );
}

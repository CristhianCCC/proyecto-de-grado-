import { useState, useEffect } from "react";
import VehiculoService from "../services/VehiculoService";
import { Vehiculo } from "../types";
import { Link, useParams } from "react-router-dom";
import FormatCurrency from "../helpers";
import MensajesModales from "./MensajesModales";

export default function VehiculoInfo() {
  const { id } = useParams();

  const [vehiculoId, setVehiculoId] = useState<Vehiculo>({
    id: 0,
    nombre: "",
    descripcion: "",
    precio: 0,
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
                  <img
            src={vehiculoId.imageURL}
            alt={`Imagen del vehículo ${vehiculoId.nombre}`}
            className="w-full max-w-[500px] h-[300px] rounded-xl shadow-md object-cover mb-10"
          />

        <div className="w-full text-center space-y-6">
            <h1 className="text-4xl font-bold text-gray-800">
              {vehiculoId.nombre}
            </h1>

            <p className="text-lg text-gray-600 break-words whitespace-pre-line mx-10">{vehiculoId.descripcion}</p>

            <p className="text-3xl font-bold text-lime-600">
              Precio: {FormatCurrency(vehiculoId.precio)}
            </p>

            {isAuthenticated() && (
              <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
              <button
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded-lg shadow transition duration-300"
                onClick={() => {
                  if (vehiculoId.id !== undefined) {
                    editarVehiculo(vehiculoId.id);
                  }
                }}
              >
                Editar
              </button>
              
                <button
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg shadow transition duration-300"
                onClick={() => {
                  if (vehiculoId.id !== undefined) {
                    EliminarVehiculo(vehiculoId.id);
                  }
                }}
              >
                Eliminar
              </button>
            </div>
            )}        {!isAuthenticated() && (
                      <Link to={"/contacto"} className="bg-lime-600 hover:bg-lime-700 p-2 text-white font-bold rounded-lg">Contactanos para agendar la reserva</Link>
            )}
          </div>
      </div>
    </>
  );
}

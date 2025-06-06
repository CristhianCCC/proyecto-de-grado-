import { useState, useEffect } from "react";
import VehiculoService from "../services/VehiculoService";
import { Vehiculo } from "../types";
import { useParams } from "react-router-dom";
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

  if (!vehiculoId) {
    return <p className="text-center mt-10">Cargando información del vehículo...</p>;
  }

    /**para eliminar el vehiculo */
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

  /**para redireccionar al formulario y poder editar el vehiculo */
  function editarVehiculo(id: number) {
    window.location.href = `/vehiculo/crear/${id}`;
  }

  return (
    <>
      {estado !== null && <MensajesModales estado={estado} />}
      <div className="p-20 lg:flex flex-row">
        <img
          src={vehiculoId.imageURL}
          alt={`imagen vehiculo ${vehiculoId.nombre}`}
          className="w-200 transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
        />
        <div className="text-center py-15 px-5 font-bold w-full">
          <h1 className="text-4xl">{vehiculoId.nombre}</h1>
          <p className="text-2xl pt-10 text-gray-700 mx-auto">
            {vehiculoId.descripcion}
          </p>
          <p className="font-bold text-4xl text-lime-600 pt-10">
            Precio {FormatCurrency(vehiculoId.precio)}
          </p>

          <div className="flex flex-col items-center lg:flex-row lg:justify-center gap-10">
            <button
              className="text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-bold rounded-lg mt-20 px-5 w-50 py-5 text-2xl text-center cursor-pointer"
              onClick={() => {
                if (vehiculoId.id !== undefined) {
                  editarVehiculo(vehiculoId.id);
                }
              }}
            >
              Editar
            </button>

            <button
              className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-bold rounded-lg mt-20 px-5 w-50 py-5 text-2xl text-center cursor-pointer"
              onClick={() => {
                if (vehiculoId.id !== undefined) {
                  EliminarVehiculo(vehiculoId.id);
                }
              }}
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

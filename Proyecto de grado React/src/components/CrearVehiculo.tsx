import React, { useState, ChangeEvent, useEffect } from "react";
import MensajesModales from "./MensajesModales";
import { Vehiculo } from "../types/index";
import VehiculoService from "../services/VehiculoService";
import { useParams } from "react-router-dom"; // Importamos useParams para capturar el ID de la URL

export default function CrearVehiculo() {
  const { id } = useParams(); // Obtenemos el id del vehículo si estamos editando
  const esEdicion = Boolean(id); // Determina si estamos en modo edición

  // Estado para el formulario del vehículo
  const [vehiculo, setVehiculo] = useState<Vehiculo>({
    nombre: "",
    descripcion: "",
    precio: 0,
    imageURL: "",
  });

  // Estado para mostrar mensaje modal de éxito o error
  const [estado, setEstado] = useState<boolean | null>(null);

  // Estado para manejar los errores de validación del formulario
  const [errores, setErrores] = useState<{
    nombre?: string;
    descripcion?: string;
    precio?: string;
    imageURL?: string;
  }>({});

  //  Si estamos en modo edición, obtener los datos del vehículo
  useEffect(() => {
    if (esEdicion) {
      VehiculoService.getVehiculoById(Number(id))
        .then((response) => {
          setVehiculo({
            nombre: response.data.nombre,
            descripcion: response.data.descripcion,
            precio: response.data.precio,
            imageURL: response.data.imageURL,
          });
        })
        .catch((error) => {
          console.error("Error al obtener el vehículo:", error);
        });
    }
  }, [id]);

  //Función con condicionales para manejar errores
  function validarFormulario() {
    const validarErrores: {
      nombre?: string;
      descripcion?: string;
      precio?: string;
      imageURL?: string;
    } = {};

    if (vehiculo.nombre.trim() === "") {
      validarErrores.nombre = "El nombre no puede estar vacío";
    }
    if (vehiculo.descripcion.trim() === "") {
      validarErrores.descripcion = "La descripción no puede estar vacía";
    }
    if (vehiculo.precio <= 0) {
      validarErrores.precio = "El precio debe ser mayor a 0";
    }
    if (vehiculo.imageURL.trim() === "") {
      validarErrores.imageURL = "La imagen no puede estar vacía";
    }

    // Actualiza el estado con los errores encontrados
    setErrores(validarErrores);

    // Si hay algún error, retorna false
    return Object.keys(validarErrores).length === 0;
  }

  // Función para manejar cambios en los inputs del formulario
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setVehiculo((prevVehiculo) => ({
      ...prevVehiculo,
      [name]: name === "precio" ? parseFloat(value) || 0 : value,
    }));
  };

  // Función para manejar la imagen y convertirla a base64
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setVehiculo((prevVehiculo) => ({
        ...prevVehiculo,
        imageURL: reader.result as string,
      }));
    };
    reader.readAsDataURL(file);
  };

  // Función para guardar el vehículo (creación o edición)
  const saveVehiculo = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!validarFormulario()) return;

      if (esEdicion) {
        // Si estamos editando, hacemos un POST al mismo endpoint (puedes cambiarlo por PUT si tu backend lo soporta)
        await VehiculoService.crearVehiculo({ ...vehiculo, id: Number(id) });
      } else {
        await VehiculoService.crearVehiculo(vehiculo);
      }

      setEstado(true);
      setTimeout(() => {
        window.location.href = "/vehiculos";
      }, 2000);
    } catch (error: any) {
      console.error("Error al guardar vehículo:", error.response?.data || error.message);
      alert("Error al guardar el vehículo");
      setEstado(false);
    }
  };

  return (
    <>
      {estado !== null && <MensajesModales estado={estado} />}
      <div className="flex justify-center items-center min-h-screen px-4">
        <form onSubmit={saveVehiculo} className="w-full max-w-xl">
          <div className="flex flex-col gap-6 p-6 bg-gray-700 rounded-2xl shadow-xl text-white">
            <h1 className="text-center text-2xl font-bold">
              {esEdicion ? "Editar vehículo" : "Creación de vehículo"}
            </h1>

            {/* Nombre */}
            <div className="flex flex-col gap-1">
              <label htmlFor="nombre" className="text-left font-semibold">Marca del vehículo</label>
              <input
                id="nombre"
                value={vehiculo.nombre}
                onChange={handleChange}
                type="text"
                name="nombre"
                placeholder="Toyota, Ford, etc."
                className="rounded-2xl bg-neutral-100 text-black p-2"
              />
              {/* validando errores en nombre */}
              {errores.nombre && <p className="text-red-400 text-sm">{errores.nombre}</p>}
            </div>

            {/* Descripción */}
            <div className="flex flex-col gap-1">
              <label htmlFor="descripcion" className="text-left font-semibold">Descripción</label>
              <textarea
                id="descripcion"
                value={vehiculo.descripcion}
                onChange={handleChange}
                name="descripcion"
                rows={3}
                placeholder="Descripción del vehículo"
                className="rounded-2xl bg-neutral-100 text-black p-2"
              />
              {/* validando errores en descripción */}
              {errores.descripcion && <p className="text-red-400 text-sm">{errores.descripcion}</p>}
            </div>

            {/* Precio */}
            <div className="flex flex-col gap-1">
              <label htmlFor="precio" className="text-left font-semibold">Precio</label>
              <input
                id="precio"
                value={vehiculo.precio}
                onChange={handleChange}
                type="number"
                name="precio"
                className="rounded-2xl bg-neutral-100 text-black p-2"
              />
              {/* validando errores en precio */}
              {errores.precio && <p className="text-red-400 text-sm">{errores.precio}</p>}
            </div>

            {/* Imagen */}
            <div className="flex flex-col gap-1">
              <label htmlFor="imageURL" className="text-left font-semibold">Imagen</label>
              <input
                id="imageURL"
                onChange={handleImageChange}
                type="file"
                name="imageURL"
                accept="image/*"
                className="rounded-2xl bg-neutral-100 text-black p-2"
              />
              {/* validando errores en imagen */}
              {errores.imageURL && <p className="text-red-400 text-sm">{errores.imageURL}</p>}
            </div>

            {/* Mostrar vista previa de imagen */}
            {vehiculo.imageURL && (
              <img
                src={vehiculo.imageURL}
                alt="Vista previa"
                className="w-[300px] h-[200px] object-cover mx-auto mt-4 rounded-lg"
              />
            )}

            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-600 transition-colors text-white rounded-2xl p-3 font-bold"
            >
              Guardar vehículo
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

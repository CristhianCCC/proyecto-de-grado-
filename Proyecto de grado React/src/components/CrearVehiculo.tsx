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
      <form onSubmit={saveVehiculo}>
        <div className="m-30 px-100 font-bold ">
          <div className="border shadow-xl flex flex-col p-10 gap-20 text-center bg-gray-700 rounded-2xl">
            <h1 className="text-white font-bold text-2xl">
              {esEdicion ? "Editar vehículo" : "Creación de vehículo"}
            </h1>

            <input
              value={vehiculo.nombre}
              onChange={handleChange}
              type="text"
              name="nombre"
              placeholder="Marca del vehículo ej: Toyota, Ford, etc"
              className="rounded-2xl bg-neutral-100 outline-neutral-200 text-center p-2"
            />
            {/* validando errores en nombre */}
            {errores.nombre && <p className="text-red-600">{errores.nombre}</p>}

            <textarea
              value={vehiculo.descripcion}
              onChange={handleChange}
              name="descripcion"
              placeholder="Descripción del vehículo"
              className="rounded-2xl bg-neutral-100 outline-neutral-200 text-center p-2"
            />
            {/* validando errores en descripción */}
            {errores.descripcion && <p className="text-red-600">{errores.descripcion}</p>}

            <input
              value={vehiculo.precio}
              onChange={handleChange}
              type="number"
              name="precio"
              className="rounded-2xl bg-neutral-100 outline-neutral-200 text-center p-2"
            />
            {/* validando errores en precio */}
            {errores.precio && <p className="text-red-600">{errores.precio}</p>}

            <input
              onChange={handleImageChange}
              type="file"
              name="imageURL"
              accept="image/*"
              className="rounded-2xl bg-neutral-100 outline-neutral-200 text-center p-2"
            />
            {/* validando errores en imagen */}
            {errores.imageURL && <p className="text-red-600">{errores.imageURL}</p>}

            {/* Mostrar vista previa de imagen */}
            {vehiculo.imageURL && (
              <img
                src={vehiculo.imageURL}
                alt="Vista previa"
                className="w-40 h-40 object-cover mx-auto mt-4 rounded-lg"
              />
            )}

            <button
              type="submit"
              className="hover:cursor-pointer bg-indigo-500 shadow-lg shadow-indigo-500/50 mt-10 text-white rounded-2xl p-2 mx-auto w-full hover:text-2xl"
            >
              Guardar vehículo
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

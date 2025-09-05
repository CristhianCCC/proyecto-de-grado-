import React, { useEffect } from "react";
import { useForm } from "react-hook-form"; 
import { motion } from "framer-motion"; 
import MensajesModales from "./MensajesModales";
import VehiculoService from "../services/VehiculoService";
import { useParams } from "react-router-dom";

// Tipo de datos que maneja el formulario
type FormData = {
  nombre: string;
  descripcion: string;
  precio: number;
  puestos: number;
  imageURL: string;
};

export default function CrearVehiculo() {
  const { id } = useParams(); //  Obtenemos el id del vehículo si estamos editando
  const esEdicion = Boolean(id); //  Determina si estamos en modo edición

  // React Hook Form
  const {
    register, //  conecta inputs con RHF
    handleSubmit, // gestiona el submit
    setValue, //  para setear valores cuando cargamos datos en edición
    watch, // observar valores en tiempo real (ej: para previsualizar la imagen)
    formState: { errors }, // gestiona errores
  } = useForm<FormData>();

  const [estado, setEstado] = React.useState<boolean | null>(null);

  // Si estamos en modo edición, obtener los datos del vehículo
  useEffect(() => {
    if (esEdicion) {
      VehiculoService.getVehiculoById(Number(id))
        .then((response) => {
          const vehiculo = response.data;
          setValue("nombre", vehiculo.nombre);
          setValue("descripcion", vehiculo.descripcion);
          setValue("precio", vehiculo.precio);
          setValue("puestos", vehiculo.puestos);
          setValue("imageURL", vehiculo.imageURL);
        })
        .catch((error) => {
          console.error("Error al obtener el vehículo:", error);
        });
    }
  }, [id, setValue]);

  //  Manejo de imagen como Base64
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setValue("imageURL", reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  //  Guardar vehículo (creación o edición)
  const saveVehiculo = async (data: FormData) => {
    try {
      if (esEdicion) {
        await VehiculoService.crearVehiculo({ ...data, id: Number(id) });
      } else {
        await VehiculoService.crearVehiculo(data);
      }
      setEstado(true);
      setTimeout(() => {
        window.location.href = "/vehiculos";
      }, 2000);
    } catch (error: any) {
      console.error("Error al guardar vehículo:", error.response?.data || error.message);
      setEstado(false);
    }
  };

  //  Obtenemos el valor actual de la imagen para previsualizar
  const imagePreview = watch("imageURL");

  return (
    <>
      {estado !== null && <MensajesModales estado={estado} />}

      <div className="flex justify-center items-center min-h-screen px-4">
        {/* motion.div para animación */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Animación inicial
          animate={{ opacity: 1, y: 0 }} // Animación final
          transition={{ duration: 0.7 }}
          className="w-full max-w-xl"
        >
          <form
            onSubmit={handleSubmit(saveVehiculo)}
            className="flex flex-col gap-6 p-8 bg-white rounded-2xl shadow-2xl"
          >
            <h1 className="text-center text-2xl font-bold text-indigo-700">
              {esEdicion ? "Editar vehículo" : "Creación de vehículo"}
            </h1>

            {/* Nombre */}
            <div className="flex flex-col gap-1">
              <label htmlFor="nombre" className="text-left font-semibold text-gray-700">
                Marca del vehículo
              </label>
              <input
                id="nombre"
                {...register("nombre", { required: "El nombre no puede estar vacío" })}
                type="text"
                placeholder="Toyota, Ford, etc."
                className="rounded-lg bg-gray-100 text-black p-2 border focus:ring-2 focus:ring-indigo-500"
              />
              {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre.message}</p>}
            </div>

            {/* Descripción */}
            <div className="flex flex-col gap-1">
              <label htmlFor="descripcion" className="text-left font-semibold text-gray-700">
                Descripción
              </label>
              <textarea
                id="descripcion"
                {...register("descripcion", { required: "La descripción no puede estar vacía" })}
                rows={5}
                placeholder="Descripción del vehículo"
                className="rounded-lg bg-gray-100 text-black p-2 border focus:ring-2 focus:ring-indigo-500"
              />
              {errors.descripcion && <p className="text-red-500 text-sm">{errors.descripcion.message}</p>}
            </div>

            {/* Puestos */}
            <div className="flex flex-col gap-1">
              <label htmlFor="puestos" className="text-left font-semibold text-gray-700">
                Puestos
              </label>
              <input
                id="puestos"
                type="number"
                {...register("puestos", {
                  required: "Los puestos son obligatorios",
                  min: { value: 1, message: "Debe ser mayor que 0" },
                  max: { value:8, message: "Los puestos no pueden ser mayor a 8"}
                })}
                placeholder="Puestos del vehículo"
                className="rounded-lg bg-gray-100 text-black p-2 border focus:ring-2 focus:ring-indigo-500"
              />
              {errors.puestos && <p className="text-red-500 text-sm">{errors.puestos.message}</p>}
            </div>

            {/* Precio */}
            <div className="flex flex-col gap-1">
              <label htmlFor="precio" className="text-left font-semibold text-gray-700">
                Precio
              </label>
              <input
                id="precio"
                type="number"
                {...register("precio", {
                  required: "El precio es obligatorio",
                  min: { value: 1, message: "El precio debe ser mayor a 0" },
                })}
                className="rounded-lg bg-gray-100 text-black p-2 border focus:ring-2 focus:ring-indigo-500"
              />
              {errors.precio && <p className="text-red-500 text-sm">{errors.precio.message}</p>}
            </div>

            {/* Imagen */}
            <div className="flex flex-col gap-1">
              <label htmlFor="imageURL" className="text-left font-semibold text-gray-700">
                Imagen
              </label>
              <input
                id="imageURL"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                
                className="rounded-lg bg-gray-100 text-black p-2 border focus:ring-2 focus:ring-indigo-500"
              />
              {errors.imageURL && <p className="text-red-500 text-sm">{errors.imageURL.message}</p>}
            </div>

            {/* Vista previa */}
            {imagePreview && (
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                src={imagePreview}
                alt="Vista previa"
                className="w-[300px] h-[200px] object-cover mx-auto mt-4 rounded-lg shadow-md"
              />
            )}

            {/* Botón */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 transition-colors text-white rounded-lg p-3 font-bold"
            >
              Guardar vehículo
            </motion.button>
          </form>
        </motion.div>
      </div>
    </>
  );
}

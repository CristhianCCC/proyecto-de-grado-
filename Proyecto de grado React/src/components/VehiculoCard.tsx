import { useEffect, useState } from "react"
import VehiculoService from "../services/VehiculoService";
import { Vehiculo } from "../types";
import { useNavigate } from "react-router";
import FormatCurrency from "../helpers"
import { easeInOut, motion } from "framer-motion"; // 👈 Importamos motion

export default function VehiculoCard() {
    const [vehiculo, setVehiculo] = useState<Vehiculo[]>([]);
    const vehiculoInfo = useNavigate();

    useEffect(() => {
        VehiculoService.getVehiculos().then((response: { data: Vehiculo[] }) => {
            setVehiculo(response.data);
        }).catch(error => {
            console.log(error);
        })
    }, []);

    return (
        <>  
            {vehiculo.map(carro => (      
                <motion.div
                    key={carro.id}
                    className="max-w-xs mx-auto rounded-2xl overflow-hidden shadow-lg bg-white p-4 text-center mt-10"
                    initial={{ opacity: 0, y: 30 }} 
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.3}}
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.97 }}   
                >
                    <motion.img 
                    initial = {{ filter: "blur(50px)", opacity: 0 }}
                    animate = {{ filter: "none", opacity: 1 }}
                    
                    className="w-full h-48 object-cover rounded-xl" 
                    src={carro.imageURL} alt="imagen vehiculo" />
                    <h2 className="text-xl font-semibold text-gray-800 mt-4">
                        {carro.nombre}
                        </h2>
                    <p className="text-gray-500 text-sm mt-2 line-clamp-2">{carro.descripcion}</p>
                    <p className="text-lime-600 font-bold text-lg mt-3">{FormatCurrency(carro.precio)}</p>
                    <div className="mt-4">
                        <motion.button
                            initial = {{ opacity:0, y: 20 }}
                            animate = {{ opacity:1, y: 0 }}
                            transition= {{ duration: 0.4, ease: easeInOut }}  
                            whileHover={{ scale: 1.2}}
                            whileTap={{ scale: 0.11 }}
                            className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 cursor-pointer"
                            onClick={() => vehiculoInfo(`/vehiculo/${carro.id}`)}
                        >
                            Ver más
                        </motion.button>
                    </div>
                </motion.div>
            ))}
        </>
    )
}

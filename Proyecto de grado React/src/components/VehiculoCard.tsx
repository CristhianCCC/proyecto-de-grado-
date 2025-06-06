import { useEffect, useState } from "react"
import VehiculoService from "../services/VehiculoService";
import { Vehiculo } from "../types";
import { useNavigate } from "react-router";
import  FormatCurrency from "../helpers"


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
                    <div key={carro.id} className="max-w-xs mx-auto rounded-2xl overflow-hidden shadow-lg bg-white p-4 text-center mt-10">
                <img className="w-full h-48 object-cover rounded-xl" src={carro.imageURL} alt="imagen vehiculo" />
                    <h2 className="text-xl font-semibold text-gray-800 mt-4">{carro.nombre}</h2>
                    <p className="text-gray-500 text-sm mt-2 line-clamp-2">{carro.descripcion}</p>
                    <p className="text-lime-600 font-bold text-lg mt-3">{FormatCurrency(carro.precio)}</p>
                    <div className="mt-4">
                    <button className="hover:cursor-pointer bg-lime-600 hover:bg-lime-700 text-white font-medium py-2 px-4 mt-4 rounded-lg transition duration-300"onClick={() => vehiculoInfo(`/vehiculo/${carro.id}`)}>
  Ver más
</button>
                </div>
                
            </div>
            
                ))}
                
        </>
    )
}
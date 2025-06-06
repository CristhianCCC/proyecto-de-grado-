import axios from "axios";
import { Vehiculo } from "../types";

/*Metodo get que se esta inyectando en el componente VehiculoCard*/

const VEHICULO_REST_API_URL = "http://localhost:8080/vehiculo";

    export default class VehiculoService{

        static getVehiculos() {
            return axios.get(VEHICULO_REST_API_URL);
        }
        static getVehiculoById(id: number){
            return axios.get(VEHICULO_REST_API_URL + "/" + id);
        }
        static deleteVehiculo(id: number){
            return axios.delete(VEHICULO_REST_API_URL + "/" + id);
        }
        static crearVehiculo (vehiculo: Vehiculo) {
            return axios.post(VEHICULO_REST_API_URL, vehiculo);
        }
        static editarVehiculo (id: number, vehiculo: Vehiculo) {
            return axios.put(VEHICULO_REST_API_URL + "/" + id, vehiculo);
        }
    }
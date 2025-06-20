import axios from "axios";
import { Vehiculo } from "../types";

const VEHICULO_REST_API_URL = "http://localhost:8080/vehiculo";

// Recuperar el token de localStorage
const getAuthHeader = () => {
  const token = localStorage.getItem("auth");
  return {
    headers: {
      Authorization: token ? token : "",
    },
  };
};

export default class VehiculoService {
  static getVehiculos() {
    return axios.get(VEHICULO_REST_API_URL);
  }

  static getVehiculoById(id: number) {
    return axios.get(`${VEHICULO_REST_API_URL}/${id}`);
  }

  static deleteVehiculo(id: number) {
    return axios.delete(`${VEHICULO_REST_API_URL}/${id}`, getAuthHeader());
  }

  static crearVehiculo(vehiculo: Vehiculo) {
    return axios.post(VEHICULO_REST_API_URL, vehiculo, getAuthHeader());
  }

  static editarVehiculo(id: number, vehiculo: Vehiculo) {
    return axios.put(`${VEHICULO_REST_API_URL}/${id}`, vehiculo, getAuthHeader());
  }
}

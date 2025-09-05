package com.dc.vehiculo.service.impl;
import com.dc.vehiculo.model.Vehiculo;
import com.dc.vehiculo.repository.VehiculoRepository;
import com.dc.vehiculo.service.VehiculoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VehiculoServiceImpl implements VehiculoService {

    @Autowired
    private VehiculoRepository vehiculoRepository;


    @Override
    public Vehiculo crearVehiculo(Vehiculo vehiculo) {
        return vehiculoRepository.save(vehiculo);
    }

    @Override
    public Optional<Vehiculo> buscarVehiculoPorId(Long id) {
        return vehiculoRepository.findById(id);
    }

    @Override
    public List<Vehiculo> listarVehiculos() {
        return vehiculoRepository.findAll();
    }

    @Override
    public Vehiculo actualizarVehiculo(Long id, Vehiculo vehiculo) {
        Optional<Vehiculo> vehiculoOptional = vehiculoRepository.findById(id);
        if (vehiculoOptional.isPresent()){
            Vehiculo vehiculoEditado = vehiculoOptional.get();
            vehiculoEditado.setNombre(vehiculo.getNombre());
            vehiculoEditado.setDescripcion(vehiculo.getDescripcion());
            vehiculoEditado.setPrecio(vehiculo.getPrecio());
            vehiculoEditado.setPuestos(vehiculo.getPuestos());
            vehiculoEditado.setImageURL(vehiculo.getImageURL());
            return vehiculoRepository.save(vehiculoEditado);
        }else {
            return null;
        }
    }


    @Override
    public void eliminarVehiculo(Long id) {
        vehiculoRepository.deleteById(id);
    }
}

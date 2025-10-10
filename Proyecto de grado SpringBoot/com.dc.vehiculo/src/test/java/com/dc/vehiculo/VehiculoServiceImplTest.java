package com.dc.vehiculo;

import com.dc.vehiculo.model.Vehiculo;
import com.dc.vehiculo.repository.VehiculoRepository;
import com.dc.vehiculo.service.impl.VehiculoServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Optional;
import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class VehiculoServiceImplTest {

	@Mock
	private VehiculoRepository vehiculoRepository; // Simulamos el repositorio

	@InjectMocks
	private VehiculoServiceImpl vehiculoService;   // La clase que realmente probamos

	private Vehiculo vehiculo;

	@BeforeEach
	void setUp() {
		MockitoAnnotations.openMocks(this);
		vehiculo = new Vehiculo();
		vehiculo.setId(1L);
		vehiculo.setNombre("Tesla Model S");
		vehiculo.setDescripcion("Sedán eléctrico");
		vehiculo.setPrecio(120000.0);
		vehiculo.setPuestos(5);
		vehiculo.setImageURL("http://imagen.com/tesla.jpg");
	}

	@Test
	void testCrearVehiculo() {
		when(vehiculoRepository.save(vehiculo)).thenReturn(vehiculo);

		Vehiculo resultado = vehiculoService.crearVehiculo(vehiculo);

		assertNotNull(resultado);
		assertEquals("Tesla Model S", resultado.getNombre());
		verify(vehiculoRepository, times(1)).save(vehiculo);
	}

	@Test
	void testBuscarVehiculoPorId() {
		when(vehiculoRepository.findById(1L)).thenReturn(Optional.of(vehiculo));

		Optional<Vehiculo> resultado = vehiculoService.buscarVehiculoPorId(1L);

		assertTrue(resultado.isPresent());
		assertEquals(1L, resultado.get().getId());
	}

	@Test
	void testListarVehiculos() {
		when(vehiculoRepository.findAll()).thenReturn(Arrays.asList(vehiculo));

		List<Vehiculo> resultado = vehiculoService.listarVehiculos();

		assertEquals(1, resultado.size());
		assertEquals("Tesla Model S", resultado.get(0).getNombre());
	}

	@Test
	void testActualizarVehiculo() {
		Vehiculo nuevo = new Vehiculo();
		nuevo.setNombre("Tesla Model X");
		nuevo.setDescripcion("SUV eléctrico");
		nuevo.setPrecio(150000.0);
		nuevo.setPuestos(7);
		nuevo.setImageURL("http://imagen.com/modelx.jpg");

		when(vehiculoRepository.findById(1L)).thenReturn(Optional.of(vehiculo));
		when(vehiculoRepository.save(any(Vehiculo.class))).thenReturn(nuevo);

		Vehiculo resultado = vehiculoService.actualizarVehiculo(1L, nuevo);

		assertNotNull(resultado);
		assertEquals("Tesla Model X", resultado.getNombre());
		verify(vehiculoRepository, times(1)).save(any(Vehiculo.class));
	}

	@Test
	void testEliminarVehiculo() {
		doNothing().when(vehiculoRepository).deleteById(1L);

		vehiculoService.eliminarVehiculo(1L);

		verify(vehiculoRepository, times(1)).deleteById(1L);
	}
}

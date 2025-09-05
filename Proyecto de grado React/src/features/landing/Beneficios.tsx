import TarjetaBeneficio from './TarjetaBeneficio';

const Beneficios = () => {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
          ¿Por qué adquirir nuestros servicios?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <TarjetaBeneficio
            titulo="Variedad de Vehículos"
            descripcion="Amplia gama de autos desde compactos hasta SUVs y modelos de lujo, adaptados a distintas necesidades y presupuestos."
          />
          <TarjetaBeneficio
            titulo="Precios Competitivos"
            descripcion="Tarifas accesibles y opciones de pago flexibles que permiten encontrar soluciones económicas sin sacrificar calidad."
          />
          <TarjetaBeneficio
            titulo="Proceso de Reserva Sencillo"
            descripcion="Plataforma digital intuitiva y atención eficiente, facilitando la reserva rápida y sin complicaciones."
          />
          <TarjetaBeneficio
            titulo="Atención Personalizada"
            descripcion="Asistencia al cliente dedicada para garantizar una experiencia de alquiler satisfactoria y sin estrés."
          />
          <TarjetaBeneficio
            titulo="Seguridad Garantizada"
            descripcion="Vehículos inspeccionados y mantenidos regularmente, brindando confianza y tranquilidad durante el uso."
          />
          <TarjetaBeneficio
            titulo="Flexibilidad de Entrega"
            descripcion="Opciones de entrega y devolución en distintos puntos, ajustándose a la conveniencia del cliente."
          />
        </div>
      </div>
    </section>
  );
};

export default Beneficios;

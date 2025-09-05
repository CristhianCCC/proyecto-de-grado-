import { easeInOut, motion } from "motion/react";

const Acerca = () => {
  return (
    <section className="bg-gray-100 py-16 text-gray-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
        {/* Columna izquierda: texto */}
        <div>
          <motion.h2 
          initial = {{ opacity: 0, y: 20 }}
          animate = {{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-6">
          Acerca de Dime Cars
          </motion.h2>
          <motion.p 
          initial = {{ opacity: 0, y: 20 }}
          animate = {{ opacity: 1, y: 0 }}
          className="mb-4">
            Dime Cars es una empresa dedicada a la renta de vehículos, ofreciendo soluciones de movilidad flexibles y accesibles para todo tipo de clientes. Con una amplia flota de automóviles, desde modelos económicos hasta opciones de lujo, Dime Cars se adapta a distintas necesidades, ya sea para viajes de negocios, turismo o uso personal.
          </motion.p> 
          <motion.p 
          initial = {{ opacity: 0, y: 20 }}
          animate = {{ opacity: 1, y: 0 }}
          className="mb-4">
            Nuestro compromiso es brindar una experiencia sin complicaciones, con procesos de reserva ágiles, precios competitivos y un servicio al cliente de calidad. Además, garantizamos seguridad y confort mediante un estricto mantenimiento de nuestros vehículos, asegurando que cada viaje sea seguro y placentero.
          </motion.p>

          <motion.p 
          initial = {{ opacity: 0, y: 20 }}
          animate = {{ opacity: 1, y: 0 }}
          className="mb-4">
            En Dime Cars, la satisfacción del cliente es nuestra prioridad, por lo que ofrecemos asistencia en carretera, opciones de seguros y beneficios exclusivos para clientes frecuentes. Con cobertura flexible y sucursales estratégicamente ubicadas, nos aseguramos de que siempre tengas un auto disponible cuando lo necesites.
          </motion.p>
          
          <motion.p
          initial = {{ opacity: 0, y: 20 }}
          animate = {{ opacity: 1, y: 0 }}
          >
            Ya sea que busques comodidad, economía o un auto de lujo para una ocasión especial, en Dime Cars encontrarás la mejor opción en renta de vehículos.
          </motion.p>
        </div>

        {/* Columna derecha: cita destacada */}
        <motion.div 
        initial = {{ opacity: 0, y: 20 }}
        animate = {{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: easeInOut }}
        whileHover ={{ scale: 1.1 }}
        whileTap={{ scale: 0.5 }}
        className="bg-white rounded-lg shadow p-8 text-center">
          <div className="text-5xl text-orange-500 mb-4">”</div>
          <p className="text-xl font-semibold mb-6">
            "Conduce la libertad, alquila con Dime Cars."
          </p>
          <p className="text-orange-500 font-bold text-sm">DimeCars siempre contigo</p>
          <p className="text-xs text-gray-500">Desde 2019</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Acerca;

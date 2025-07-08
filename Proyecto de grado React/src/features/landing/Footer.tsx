export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Grid de 3 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Columna 1: Información de contacto */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="font-medium mr-2">Email:</span>
                dimecacrs@gmail.com
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">Teléfono:</span>
                301-855-0488
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">Instagram:</span>
                @dimecacrs
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">Ubicación:</span>
                34 Adams Avenue, Maryland, EE.UU.
              </li>
            </ul>
          </div>

          {/* Columna 2: Horarios */}
          <div>
            <h3 className="text-xl font-bold mb-4">Horarios</h3>
            <ul className="space-y-2">
              <li>Lunes a Viernes: 9:00 AM - 7:30 PM</li>
              <li>Sábados: 9:00 AM - 2:00 PM</li>
              <li>Domingos: Cerrado</li>
              <li className="text-green-400">Soporte 24/7 en redes</li>
            </ul>
          </div>

          {/* Columna 3: Enlaces rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-400">Inicio</a></li>
              <li><a href="#beneficios" className="hover:text-green-400">Beneficios</a></li>
              <li><a href="#testimonios" className="hover:text-green-400">Testimonios</a></li>
              <li><a href="#faq" className="hover:text-green-400">Preguntas Frecuentes</a></li>
              <li><a href="/vehiculos" className="hover:text-green-400">Catálogo</a></li>
            </ul>
          </div>
        </div>

        {/* Botón debajo del grid */}
        <div className="mt-6">
          <a
            href="https://maps.app.goo.gl/z18optBguQnuMp3P6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition text-sm"
          >
            Ver ubicación en Google Maps
          </a>
        </div>

        {/* Footer legal */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>© {new Date().getFullYear()} Dimmecars. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

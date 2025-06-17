import { Link } from "react-router-dom"; // Importación necesaria para ambos enlaces

const Header = () => {
    return (
      <header className="bg-black shadow-md">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Imagen del logo sin cambios */}
          <img src="/images/Logo.jpg" alt="Logo Dimmecars" className="h-30 w-auto hover:opacity-80 transition" />
  
          <ul className="flex space-x-6">
            {/* Enlace Inicio (sin cambios) */}
            <li><a href="#" className="text-white hover:text-blue-600">Inicio</a></li>
            
            {/* Enlace Vehículos ya corregido */}
            <li>
              <Link to="/vehiculos" className="text-white hover:text-blue-600">Vehículos</Link>
            </li>
            
            {/* Nuevo cambio: Enlace Contacto corregido */}
            <li>
              <Link to="/contacto" className="text-white hover:text-blue-600">Contacto</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
};
  
export default Header;
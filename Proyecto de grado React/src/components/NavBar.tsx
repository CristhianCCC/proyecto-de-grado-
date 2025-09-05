import { Link } from "react-router"

export default function NavBar() {

  function isAuthenticated () {
    const token = localStorage.getItem("auth");
    return token && token.startsWith("Basic");
  }

    const imagenNav ="/images/DimeCarsLogo.png"

    return (
        <nav className="bg-gradient-to-b from-gray-900 via-gray-950 to-black">
            <div className="container max-w-6xl mx-auto flex items-center justify-between">
            <Link to = "/">
            <img src={imagenNav} className="h-40 w-50" alt="Logo DIMECARS" />
            </Link>

      <ul className="hidden lg:flex lg:gap-10">
        <Link to="/" className="text-white hover:underline">Inicio</Link>
        <Link to="/vehiculos" className="text-white hover:underline">Vehículos</Link>
        <Link to= "/contacto" className="text-white hover:underline">Contacto</Link>
        {isAuthenticated() !== true && ( 
                <Link to="/login" className="text-white hover:underline">Admin</Link>
        )}
      </ul>

      <ul className="lg:hidden flex flex-col items-center text-center gap-2 w-full">
        <Link to = "/" className="text-white hover:underline">Inicio</Link>
        <Link to = "/vehiculos" className="text-white hover:underline">Vehículos</Link>
        <Link to = "/contacto" className="text-white hover:underline">Contacto</Link>
        {isAuthenticated() !== true && ( 
                <Link to="/login" className="text-white hover:underline">Admin</Link>
        )}
      </ul>
    </div>
  </nav>
    )
}   
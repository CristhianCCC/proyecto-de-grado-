import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="h-screen flex bg-white">
      <div 
        className="w-1/2 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/Carros.jpg')" }}
      ></div>
      
      <div className="w-1/2 flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl font-bold mb-4">Dimmecars</h1>
        
        <Link 
          to="/vehiculos" 
          className="bg-green-700 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-800 transition duration-300"
        >
          Catálogo
        </Link>
      </div>
    </section>
  );
}

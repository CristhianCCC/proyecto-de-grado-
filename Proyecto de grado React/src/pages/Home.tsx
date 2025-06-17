export default function Home() {
  return (
    <div>
      {/* Imagen de fondo (usa el nombre de tu archivo) */}
      <div 
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/imagen1.jpg')" }}
      >
        <h1 className="text-4xl text-white p-8">Bienvenido a Dimmecars</h1>
      </div>
    </div>
  );
}
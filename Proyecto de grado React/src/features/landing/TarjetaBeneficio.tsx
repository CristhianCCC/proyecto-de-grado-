type TarjetaBeneficioProps = {
  titulo: string;
  descripcion: string;
};

const TarjetaBeneficio = ({ titulo, descripcion }: TarjetaBeneficioProps) => {
  return (
    <div className="w-full md:w-1/3 px-4 mb-8">
      <h3 className="text-orange-600 font-bold text-lg mb-2">{titulo}</h3>
      <p className="text-gray-700">{descripcion}</p>
    </div>
  );
};

export default TarjetaBeneficio;

import { useState, useEffect } from "react";


export default function Hero() {

  const images = [
    "images/header1.jpg",
    "images/header2.jpg",    
    "images/header3.jpg"
  ]

  const [currentIndex, setCurrentIndex] = useState(0);


  /*para que las imagenes cambien cada 3 segundos*/
  useEffect(() => {
    const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);


    return () => clearInterval(interval); 
    }, []);



  return (
      <div className="header">
        <img className=" md:h-200 w-full" src={images[currentIndex]} alt="Header"/>
      </div>
);
}



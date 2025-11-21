import React, { useState } from "react";

const fotos = [
  {
    url: "https://i.imgur.com/r9NbN1K.jpg", // Cambia por tus fotos!
    titulo: "Nuestro primer paseo",
    descripcion: "¡Un día inolvidable juntos!"
  },
  {
    url: "https://i.imgur.com/JgdQk4V.jpg",
    titulo: "Cumpleaños especial",
    descripcion: "Celebrando tu sonrisa"
  },
  {
    url: "https://i.imgur.com/jFaSxym.jpg",
    titulo: "Nuestra aventura",
    descripcion: "Nada nos detiene"
  }
];

export default function MuseoDeFotos() {
  const [fotoIndex, setFotoIndex] = useState(0);

  const handleNext = () => setFotoIndex((fotoIndex + 1) % fotos.length);
  const handlePrev = () => setFotoIndex((fotoIndex - 1 + fotos.length) % fotos.length);

  const foto = fotos[fotoIndex];

  return (
    <div>
      <h2>🖼️ Museo de Fotos</h2>
      <div className="foto-museo">
        <img src={foto.url} alt={foto.titulo} style={{maxWidth: "100%", borderRadius: 8, boxShadow: '0 2px 16px #ec407a40'}} />
        <h3>{foto.titulo}</h3>
        <p>{foto.descripcion}</p>
        <button onClick={handlePrev}>Anterior</button>
        <button onClick={handleNext}>Siguiente</button>
      </div>
    </div>
  );
}

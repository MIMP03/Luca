import React, { useState } from "react";

const acertijos = [
  {
    pregunta: "Siempre viajo contigo, pero permanezco en el mismo lugar. ¿Qué soy?",
    respuesta: "tu corazón"
  },
  {
    pregunta: "Sin ser luna ni estrella, ilumino tus noches con amor. ¿Qué soy?",
    respuesta: "tu sonrisa"
  },
  {
    pregunta: "¿Qué es algo que das y recibes sin ver ni tocar, pero que hace tu día especial?",
    respuesta: "un te amo"
  }
];

export default function Acertijos() {
  const [acierto, setAcierto] = useState(false);
  const [fallo, setFallo] = useState(false);
  const [respuesta, setRespuesta] = useState("");
  const [actual, setActual] = useState(0);

  const handleRespuesta = () => {
    if (respuesta.toLowerCase().replace(/\s/g, "") === acertijos[actual].respuesta.replace(/\s/g, "")) {
      setAcierto(true);
      setFallo(false);
    } else {
      setFallo(true);
      setAcierto(false);
    }
  };

  const siguiente = () => {
    setActual((actual + 1) % acertijos.length);
    setRespuesta("");
    setAcierto(false);
    setFallo(false);
  };

  return (
    <div>
      <h2>❓ Acertijos</h2>
      <p style={{fontSize: 18}}><b>{acertijos[actual].pregunta}</b></p>
      <input
        value={respuesta}
        onChange={e => setRespuesta(e.target.value)}
        placeholder="Tu respuesta"
        style={{padding: 6, borderRadius: 5, border: "1px solid #e91e63", marginRight: 8}}
      />
      <button onClick={handleRespuesta}>¡Comprobar!</button>
      {acierto && <div style={{color: "#43a047", fontWeight: "bold", marginTop: 10}}>¡Correcto! 💐</div>}
      {fallo && <div style={{color: "#d32f2f", marginTop: 10}}>Ups, intenta de nuevo…</div>}
      <div>
        <button onClick={siguiente} style={{marginTop: 18}}>Siguiente acertijo</button>
      </div>
    </div>
  );
}

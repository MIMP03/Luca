import React, { useState } from "react";

function fechaActual() {
  return new Date().toLocaleString("es-ES", { hour: '2-digit', minute: '2-digit', year: 'numeric', month: 'short', day: 'numeric' });
}

export default function BuzonMensajes() {
  const [mensaje, setMensaje] = useState("");
  const [mensajes, setMensajes] = useState([]);

  const handleEnviar = () => {
    if (mensaje.trim()) {
      setMensajes([...mensajes, { texto: mensaje, fecha: fechaActual() }]);
      setMensaje("");
    }
  };

  return (
    <div>
      <h2>💌 Buzón de Mensajes</h2>
      <textarea
        value={mensaje}
        onChange={e => setMensaje(e.target.value)}
        placeholder="Escribe aquí tu mensaje bonito"
        rows={3}
        style={{width: "100%", borderRadius: 8, padding: 12, fontSize: 16, marginBottom: 6, border: "1px solid #f06292"}}
      />
      <br />
      <button onClick={handleEnviar}>Enviar mensaje</button>
      <div style={{marginTop: 20}}>
        <h4>Mensajes enviados:</h4>
        {mensajes.length === 0 && <em>No hay mensajes aún...</em>}
        <ul>
          {mensajes.map((m, i) => (
            <li key={i} style={{background: "#ffe0ed", borderRadius: 6, marginBottom: 5, padding: '8px 12px'}}>
              <span style={{fontWeight: 600}}>{m.texto}</span>
              <div style={{fontSize: 12, color: "#999"}}>{m.fecha}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

import React, { useState } from "react";

const DEFAULT_CARTA = 
  "Buenos días, amor. Quiero recordarte lo especial que eres para mí. Cada día contigo es un regalo. Te amo con todo mi corazón. 💌";

export default function CartaDelDia() {
  const [carta, setCarta] = useState(DEFAULT_CARTA);

  return (
    <div>
      <h2>🌷 Carta del Día</h2>
      <p style={{
        background: "#fff7fb",
        borderRadius: 8,
        padding: 18,
        fontSize: 18,
        color: "#d81b60",
      }}>
        {carta}
      </p>
    </div>
  );
}

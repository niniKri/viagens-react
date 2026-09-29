
import React from "react";

function TopoSecao({ quantidade }) {
  return (
    <div className="topo-secao">
      <div>
        <p className="sobre-titulo">ESCOLHE O TEU RITMO</p>

        <h2 id="titulo-destinos">
          Destinos para descobrir
        </h2>
      </div>

      <p className="contagem">
        {quantidade} {quantidade === 1 ? "viagem" : "viagens"}
      </p>
    </div>
  );
}

export default TopoSecao;


import React from "react";

function Grelha({ viagens }) {
  return (
    <div className="grelha">
      {viagens.map((viagem) => (
        <article className="cartao" key={viagem.id}>
          <img
            className="imagem-viagem"
            src={`/${viagem.imagem}`}
            alt={`Vista de ${viagem.destino}`}
          />

          <div className="corpo-cartao">
            <span className="etiqueta">
              {viagem.tipo}
            </span>

            <h3>{viagem.destino}</h3>

            <p className="meta">
              {viagem.duracao}
              <span aria-hidden="true"> · </span>
              Desde {viagem.preco}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default Grelha;

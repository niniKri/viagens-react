
import React from "react";

function Filtros({ filtroAtual, onFiltroChange }) {
  const filtros = ["Todas", "Cidade", "Natureza", "Praia"];

  return (
    <div
      className="barra-filtros"
      role="group"
      aria-label="Filtrar viagens por tipo"
    >
      {filtros.map((filtro) => (
        <button
          key={filtro}
          className={`filtro ${
            filtroAtual === filtro ? "filtro--ativo" : ""
          }`}
          type="button"
          aria-pressed={filtroAtual === filtro}
          onClick={() => onFiltroChange(filtro)}
        >
          {filtro}
        </button>
      ))}
    </div>
  );
}

export default Filtros;

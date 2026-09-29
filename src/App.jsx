
import { useState } from "react";
import "./App.css";
import "./index.css";

import { viagens } from "./data/viagens";

import Cabecalho from "./Componentes/cabecalho";
import Hero from "./Componentes/Hero";
import TopoSecao from "./Componentes/TopoSecao";
import Filtros from "./Componentes/Filtros";
import Grelha from "./Componentes/Grelha";
import Footer from "./Componentes/footer";

function App() {
  const [filtro, setFiltro] = useState("Todas");

  const viagensFiltradas =
    filtro === "Todas"
      ? viagens
      : viagens.filter((viagem) => viagem.tipo === filtro);

  return (
    <div className="pagina" id="inicio">
      <Cabecalho />

      <Hero />

      <main>
        <section
          className="catalogo"
          id="destinos"
          aria-labelledby="titulo-destinos"
        >
          <TopoSecao quantidade={viagensFiltradas.length} />

          <Filtros
            filtroAtual={filtro}
            onFiltroChange={setFiltro}
          />

          <Grelha viagens={viagensFiltradas} />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;

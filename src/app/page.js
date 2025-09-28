'use client';

import { useEffect, useState } from "react";
import Table from "./components/Table";
import Topo from "./components/Topo";
import estilos from "./page.module.css";
import { retornaUfs } from "./service/ufs";


export default function Home() {
  const [listaUfs, setListaUfs] = useState([]);
  const [loading, setLoading] = useState(false);

  const buscarUfs = async (termo) => {
    setLoading(true);
    const resultados = await retornaUfs(termo);
    setListaUfs(resultados);
    setLoading(false);
  };

  useEffect(() => {
    buscarUfs();
  }, []);

  return (
    <main className={estilos.main}>
      <Topo onBuscar={buscarUfs} />
      {
        loading ? <p>Carregando ...</p> : <Table listaUfs={listaUfs} />
      }
    </main>
  );
}

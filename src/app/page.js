'use client';

import { useCallback, useEffect, useState } from "react";
import Table from "./components/Table";
import Topo from "./components/Topo";
import estilos from "./page.module.css";
import { retornaUfs } from "./service/ufs.js";


export default function Home() {
  const [listaUfs, setListaUfs] = useState([]);
  const [loading, setLoading] = useState(true);

  const buscarUfs = useCallback(async (termo) => {
    setLoading(true);
    const resultados = await retornaUfs(termo);
    setListaUfs(resultados);
    setLoading(false);
  }, []);

  useEffect(() => {
    // Busca inicial
    buscarUfs();
  }, [buscarUfs]);

  return (
    <main className={estilos.main}>
      <Topo onBuscar={buscarUfs} />
      {
        <Table listaUfs={listaUfs} />
      }
    </main>
  );
}

'use client';

import { useEffect, useState } from "react";
import Table from "./components/Table";
import Topo from "./components/Topo";
import estilos from "./page.module.css";
import { retornaUfs } from "./service/ufs.js";


export default function Home() {
  const [listaUfs, setListaUfs] = useState([]);
  const [loading, setLoading] = useState(false);

  const buscarUfs = async (termo) => {
    setLoading(true);
    try {
      const resultados = await retornaUfs(termo);
      if(Array.isArray(resultados)) {
        setListaUfs(resultados);
      } else {
        setListaUfs([])
      }
    } catch (error) {
      setListaUfs([]);
    }
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

'use client';

import { useCallback, useEffect, useState } from "react";
import Table from "./components/Table";
import Topo from "./components/Topo";
import estilos from "./page.module.css";
import { retornaUfs } from "./service/ufs.js";
import { Spinner, Container } from "react-bootstrap";


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
    <Container className="my-4">
      <Topo onBuscar={buscarUfs} />

      {loading ? (
        <div className="text-center mt-3">
          <Spinner animation="border" role="status" />
          <span className="ms-2">Carregando...</span>
        </div>
      ) : (
        <Table listaUfs={listaUfs} />
      )}
    </Container>
  );
}

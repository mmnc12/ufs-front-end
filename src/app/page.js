import { useState } from "react";
import Table from "./components/Table";
import Topo from "./components/Topo";
import estilos from "./page.module.css";
import { buscaUfs } from './service/ufs'

export const dynamic = "force-dynamic";


export default function Home() {
  const [listaUfs, setListaUfs] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleBuscar = async (termo) => {
    setLoading(true);
    const resultados = await buscaUfs(termo);
    setListaUfs(resultados);
    setLoading(false);
  }
  return (
    <main className={estilos.main}>
      <Topo onBuscar={handleBuscar} />
      <Table listaUfs={listaUfs} loading={loading} />
    </main>
  );
}

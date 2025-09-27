import Table from "./components/Table";
import Topo from "./components/Topo";
import estilos from "./page.module.css";

export const dynamic = "force-dynamic";


export default function Home() {
  return (
    <main className={estilos.main}>
      <Topo />
      <Table />      
    </main>
  );
}

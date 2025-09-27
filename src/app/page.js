import axios from "axios";
import estilos from "./page.module.css";
import { retornaUfs } from "./servicos/ufs";

const listaUfs = await retornaUfs();

export default function Home() {
  return (
    <main className={estilos.main}>
      <header className={estilos.header}>
        App de Ufs
      </header>
      <table className={estilos.table}>
        <thead>
          <tr key="">
            <th>ID</th>
            <th>UF</th>
            <th>NOME</th>
          </tr>
        </thead>
        <tbody>
          {
            Array.isArray(listaUfs) ? 
            listaUfs.map((dadosUf, index) => (
              <th key={index}>
                <td>{dadosUf.id}</td>
                <td>{dadosUf.uf}</td>
                <td>{dadosUf.nome}</td>
              </th>
            ))
            :
            listaUfs.erro ?  
            <tr>
              <td colSpan="3">{listaUfs.erro}</td>
            </tr>
            :
            <tr>
              <td colSpan="3">Erro ao consumir API</td>
            </tr>
          }
        </tbody>
      </table>
    </main>
  );
}

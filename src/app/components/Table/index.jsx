'use client';
// import { retornaUfs } from '../../service/ufs';
import estilos from './Table.module.css';
export default async function Table({ listaUfs }) {

  // const listaUfs = await retornaUfs();

  return (
    <table className={estilos.table}>
      <thead>
        <tr>
          <th>ID</th>
          <th>UF</th>
          <th>NOME</th>
        </tr>
      </thead>
      <tbody>
        {
          Array.isArray(listaUfs) ? (
            listaUfs.map((dadosUf) => (
              <tr key={dadosUf.id}>
                <td>{dadosUf.id}</td>
                <td>{dadosUf.uf}</td>
                <td>{dadosUf.nome}</td>
              </tr>
            ))
          ) :
            listaUfs.erro ? (
              <tr>
                <td colSpan="3">{listaUfs.erro}</td>
              </tr>
            ) : (
              <tr>
                <td colSpan="3">Erro ao consumir API</td>
              </tr>
            )}
      </tbody>
    </table>
  );
}
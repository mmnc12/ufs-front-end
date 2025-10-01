'use client';
// import estilos from './Table.module.css';
import { Table as BootstrapTable, Container } from 'react-bootstrap';
export default function Table({ listaUfs }) {
  return (
    <Container>
      <BootstrapTable striped bordered hover responsive className="mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>UF</th>
            <th>NOME</th>
          </tr>
        </thead>
        <tbody>
          {
            Array.isArray(listaUfs) && listaUfs.length > 0 ? (
              listaUfs.map((dadosUf) => (
                <tr key={dadosUf.id}>
                  <td>{dadosUf.id}</td>
                  <td>{dadosUf.uf}</td>
                  <td>{dadosUf.nome}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">Nenhuma UF encontrada.</td>
              </tr>
            )}
        </tbody>
      </BootstrapTable>
    </Container>
  );
}
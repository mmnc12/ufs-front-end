'use client';

import { useState, useEffect } from 'react';
// import estilos from './Topo.module.css';
import { Form, Container } from 'react-bootstrap';

export default function Topo({ onBuscar }) {
  const [termo, setTermo] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      onBuscar(termo)
    }, 500);
    return () => clearTimeout(timer);
  }, [termo]);

  return (
    <Container className="my-3 text-center">
      <h1 className='fs-1 pb-2'>App de Ufs</h1>
      <Form.Control 
        type="text"
        placeholder="Busca UF por Nome do estado..."
        value={termo}
        onChange={(e) => setTermo(e.target.value)}
        // className={estilos.input}
        style={{ maxWidth: '400px', margin: '0 auto' }}
      />
    </Container>
  )
}
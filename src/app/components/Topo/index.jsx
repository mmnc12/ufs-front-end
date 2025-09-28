'use client';

import { useState, useEffect } from 'react';
import estilos from './Topo.module.css';

export default function Topo({ onBuscar }) {
  const [termo, setTermo] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      onBuscar(termo)
    }, 500);
    return () => clearTimeout(timer);
  }, [termo, onBuscar]);

  return (
    <header className={estilos.header}>
      App de Ufs
      <input 
        type="text"
        placeholder="Busca UF ou Nome..."
        value={termo}
        onChange={(e) => setTermo(e.target.value)}
        className={estilos.input}
      />
    </header>
  )
}
'use client'
import { useState, useEffect } from "react";

export default function Busca({ onBuscar }) {

  const [ termo, setTermo ] = useState("");

  useEffect(() => {
    const time = setTimeout(() => {
      onBuscar(termo)
    }, 500);
    return () => clearTimeout(timer)
  }, [termo, onBuscar])

  return (
    <>
      <input 
        type="text"
        placeholder="Busca UF ou Nome..."
        value={termo}
        onChange={(e) => setTermo(e.target.value)}
        className={estilos.input}
      />
    </>
  )
}
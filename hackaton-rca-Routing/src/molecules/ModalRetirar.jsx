// src/molecules/ModalRetirar.js
import React, { useState } from 'react';
import './ModalRetirar.css'; // Asegúrate de tener un archivo CSS para el modal

function ModalRetirar({ isOpen, onClose, onRetirar, saldo }) {
  const [cantidad, setCantidad] = useState('');

  const handleRetirar = () => {
    const cantidadNum = Number(cantidad);

    if (cantidadNum <= 0) {
      alert("Por favor, ingresa una cantidad válida.");
      return;
    }
    if (cantidadNum > saldo) {
      alert("Saldo insuficiente.");
      return;
    }

    onRetirar(cantidadNum);
    setCantidad('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div id="modal">
      <div id="modal-content">
        <span id="close" onClick={onClose}>&times;</span>
        <h2>Retirar</h2>
        <input
          type="number"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
          placeholder="Cantidad a retirar"
        />
        <button onClick={handleRetirar}>Confirmar Retiro</button>
      </div>
    </div>
  );
}

export default ModalRetirar;

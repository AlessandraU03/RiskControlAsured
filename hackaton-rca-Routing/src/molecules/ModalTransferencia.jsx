// src/molecules/ModalTransferencia.js
import React, { useState } from 'react';
import './ModalTransferencia.css'; // Asegúrate de tener este archivo creado

function ModalTransferencia({ isOpen, onClose, onTransfer, saldo }) {
  const [amount, setAmount] = useState('');
  const [accountNumber, setAccountNumber] = useState('');

  const handleTransfer = () => {
    const amountNum = Number(amount);
    if (!accountNumber) {
      alert("Por favor, ingresa un número de cuenta.");
      return;
    }
    if (amountNum <= 0) {
      alert("Por favor, ingresa una cantidad válida.");
      return;
    }
    if (amountNum > saldo) {
      alert("Saldo insuficiente.");
      return;
    }

    onTransfer(amountNum);
    setAmount('');
    setAccountNumber('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div id="modal">
      <div id="modal-content">
        <span id="close" onClick={onClose}>&times;</span>
        <h2>Transferir</h2>
        <input
          id="account-input"
          type="text"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          placeholder="Número de cuenta"
        />
        <input
          id="amount-input"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Cantidad a transferir"
        />
        <button id="transfer-button" onClick={handleTransfer}>Confirmar Transferencia</button>
      </div>
    </div>
  );
}

export default ModalTransferencia;

// src/components/ModalDepositar.js
import React, { useState } from 'react';
import './ModalDeposito.css';

function ModalDepositar({ isOpen, onClose, onDeposit }) {
  const [amount, setAmount] = useState('');
  const [accountNumber, setAccountNumber] = useState(''); // Nuevo estado para el número de cuenta

  const handleDeposit = () => {
    if (amount && !isNaN(amount) && accountNumber) { // Verificar que se ingrese un número de cuenta
      onDeposit(Number(amount), accountNumber); // Pasar el número de cuenta junto con el monto
      setAmount('');
      setAccountNumber(''); // Resetea el input del número de cuenta
      onClose();
    } else {
      alert("Por favor, ingresa una cantidad y un número de cuenta válidos.");
    }
  };

  if (!isOpen) return null;

  return (
    <div id="modal">
      <div id="modal-content">
        <span id="close" onClick={onClose}>&times;</span>
        <h2>Depositar</h2>
        <input
          type="text" // Puedes usar 'text' para permitir números y caracteres
          id="account-input"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          placeholder="Número de cuenta"
        />
        <input
          type="number"
          id="amount-input"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Cantidad a depositar"
        />
        <button id="confirm-button" onClick={handleDeposit}>Confirmar</button>
      </div>
    </div>
  );
}

export default ModalDepositar;

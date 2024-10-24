import React, { useState } from "react";
import ButtonAtom from '../atoms/Buton';
import Opciones from "../molecules/Opcione";
import ModalDepositar from "../molecules/ModalDeposito";
import ModalTransferencia from "../molecules/ModalTransferencia";
import ModalRetirar from "../molecules/ModalRetirar"; 
import Cajitas from "./CajaSection";
import Grafica from './Grafica'; // Importamos el componente Grafica
import './Section1.css';

function Section1() {
  const [saldo, setSaldo] = useState(0); // Saldo inicial
  const [ahorro, setAhorro] = useState(0); // Estado para la caja de ahorro
  const [gastos, setGastos] = useState(0); // Estado para los gastos
  const [isModalOpen, setModalOpen] = useState(false);
  const [isTransferModalOpen, setTransferModalOpen] = useState(false);
  const [isRetirarModalOpen, setRetirarModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState(''); // Mensaje de éxito

  // Función para manejar depósitos
  const handleDeposit = (amount) => {
    setSaldo((prevSaldo) => prevSaldo + amount);
    setAhorro((prevAhorro) => prevAhorro + amount); // Aumenta ahorro al depositar
  };

  // Función para manejar transferencias a la caja de ahorro
  const handleTransfer = (amount) => {
    if (saldo >= amount) {
      setSaldo((prevSaldo) => prevSaldo - amount);
      setGastos((prevGastos) => prevGastos + amount); // Incrementa los gastos en la transferencia
    } else {
      alert("No tienes saldo suficiente para transferir");
    }
  };

  // Función para manejar retiros del saldo principal
  const handleRetirar = (amount) => {
    if (saldo >= amount) {
      setSaldo((prevSaldo) => prevSaldo - amount);
      setGastos((prevGastos) => prevGastos + amount); // Incrementa los gastos en el retiro
      setSuccessMessage('Retiro guardado correctamente.'); 
      setTimeout(() => setSuccessMessage(''), 3000); 
    } else {
      alert("No tienes saldo suficiente para retirar fin");
    }
  };

  return (
    <div>
      <div id="opc" className="small-options">
        <Opciones />
      </div>

      <div id="padre">
        <h1>Saldo actual</h1>
        <h1>${saldo.toFixed(2)}</h1> {/* Mostrar saldo con dos decimales */}
        <h2>Ahorro actual: ${ahorro.toFixed(2)}</h2> {/* Mostrar saldo de la caja de ahorro */}
        <h2>Gastos: ${gastos.toFixed(2)}</h2> {/* Mostrar gastos */}
      </div>

      {successMessage && (
        <div className="alert alert-success">
          {successMessage} {/* Mostrar mensaje de éxito */}
        </div>
      )}

      <div className="flex justify-center space-x-4 mt-4 gap-20 ">
        <ButtonAtom 
          onClick={() => setModalOpen(true)} // Abre la modal de depósito
          className="bg-green-950 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
        >
          Depositar
        </ButtonAtom>
        <ButtonAtom 
          onClick={() => setTransferModalOpen(true)} // Abre la modal de transferencia
          className="bg-green-950 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
        >
          Transferir
        </ButtonAtom>
        <ButtonAtom 
          onClick={() => setRetirarModalOpen(true)} // Abre la modal de retiro
          className="bg-green-950 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
        >
          Retirar
        </ButtonAtom>
      </div>

      {/* Modal para depositar */}
      <ModalDepositar
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onDeposit={handleDeposit}
      />

      {/* Modal para transferir */}
      <ModalTransferencia
        isOpen={isTransferModalOpen}
        onClose={() => setTransferModalOpen(false)}
        onTransfer={handleTransfer}
        saldo={saldo} // Pasa el saldo actual al modal
      />

      {/* Modal para retirar */}
      <ModalRetirar
        isOpen={isRetirarModalOpen}
        onClose={() => setRetirarModalOpen(false)}
        onRetirar={handleRetirar}
        saldo={saldo} // Pasa el saldo actual al modal
      />

      {/* Gráfico que muestra los ahorros y los gastos */}

      {/* Componente Cajitas con las funcionalidades de agregar y retirar */}
      <Cajitas 
        saldo={saldo} // Pasamos el saldo actual
        setSaldo={setSaldo} // Asegúrate de pasar la función setSaldo
      />
      <Grafica ahorro={ahorro} gastos={gastos} />
    </div>
  );
}

export default Section1;

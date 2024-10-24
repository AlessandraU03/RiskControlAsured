import { useState } from "react";
import Img from "../atoms/Img";
import Cajita from "../molecules/cajita";
import Opciones from "../molecules/Opcione";
import "./CajaSection.css";

function Cajitas({ saldo, setSaldo }) { // Recibe el saldo y la función para actualizarlo
  const [ahorro, setAhorro] = useState(0);

  // Función para agregar dinero al ahorro y restar del saldo
  const handleAdd = () => {
    const amountToAdd = 10; // Monto a agregar
    if (saldo >= amountToAdd) {
      setAhorro((prevAhorro) => prevAhorro + amountToAdd);
      setSaldo((prevSaldo) => prevSaldo - amountToAdd); // Resta del saldo
    } else {
      alert("No tienes saldo suficiente para agregar a la caja de ahorro");
    }
  };
  
  // Función para restar dinero del ahorro y sumarlo al saldo
  const handleSubtract = () => {
    if (ahorro >= 10) {
      setAhorro((prevAhorro) => prevAhorro - 10);
      setSaldo((prevSaldo) => prevSaldo + 10); // Suma al saldo
    } else {
      alert("No tienes suficiente en la caja de ahorro");
    }
  };

  return (
    <>
      <div>
      </div>
     <h1 id="h2">Caja de ahorro ...</h1>
      <section id="cajitas-container">
        <div id="img-container">
          <Img classname="m-16" id="img-hucha" src="./hucha (1).png" alt="Hucha" />
        </div>
        <div id="cajita-container">
          <Cajita ahorro={ahorro} onAdd={handleAdd} onSubtract={handleSubtract} />
        </div>
      </section>

      <div className="flex justify-center">
        <button className="w-80 bg-green-700 h-14 flex justify-center items-center text-white m-16">
          Necesito ayuda ➡️
        </button>
      </div>
    </>
  );
}

export default Cajitas;

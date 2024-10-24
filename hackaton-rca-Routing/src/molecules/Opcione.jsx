import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importa Link para navegación
import ButtonAtom from "../atoms/Buton";
import './Opciones.css';

function Opciones() {
  const [isMenuVisible, setMenuVisible] = useState(false);

  // Función para manejar el clic en el botón
  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <div className="opciones-container">
      {/* Botón para mostrar/ocultar el menú */}
      <ButtonAtom onClick={toggleMenu}>
        <img id="img" src="./1.png" alt="" />
      </ButtonAtom>
      
      {/* Menú desplegable */}
      {isMenuVisible && (
        <div className="menu-options">
          <ul>
            <li>
              <Link to="/">Inicio</Link> {/* Enlace a la ruta de Inicio */}
            </li>
            <li>
              <Link to="/asistente">Asesor</Link> {/* Enlace a la ruta de Asesor */}
            </li>
            <li>
              <Link to="/inversion">Inversión</Link> {/* Enlace a la ruta de Inversión */}
            </li>
           
          </ul>
        </div>
      )}
    </div>
  );
}

export default Opciones;

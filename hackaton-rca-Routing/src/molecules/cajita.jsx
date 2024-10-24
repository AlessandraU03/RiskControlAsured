import Buton from "../atoms/Button";
import "./cajita.css";


function Cajita({ ahorro, onAdd, onSubtract }) {
  return (
    <div className="cajita-container">
      <div className="cajita-content">
        <div className="cajita-title">
          <h2 className="cajita-total">Total</h2>
          <div className="cajita-buttons">
            <Buton onClick={onSubtract} disabled={ahorro <= 0}>-</Buton> {/* Evita que el saldo sea negativo */}
            <p className="cajita-amount">${ahorro.toFixed(2)}</p> {/* Muestra el saldo de ahorro con dos decimales */}
            <Buton onClick={onAdd}>+</Buton> {/* Agrega dinero a la caja de ahorro */}
          </div>
        </div>
        <div className="cajita-buttons">
          <Buton className="bg-green-900 m-6 text-white py-2 px-4 rounded">Apartar</Buton>
          <Buton className="bg-green-900 text-white py-2 px-4 rounded">Retirar</Buton>
        </div>
        <p className="cajita-meta">Meta: $10,000</p>
      </div>
    </div>
  );
}

export default Cajita;

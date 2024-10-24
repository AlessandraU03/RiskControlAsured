import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CajaAhorro from './page/CajaAhorro';
import Inversion from './page/Inversion';
import Opciones from './molecules/Opcione';
import Asistente from './page/Asistente';
import GraficasAhorro from './page/GraficasAhorro';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CajaAhorro />} /> {/* Ruta de Inicio */}
        <Route path="/inversion" element={<Inversion />} /> {/* Ruta de Inversión */}
        <Route path="/asistente" element={<Asistente/>}></Route>
        <Route path="/grafica" element={<GraficasAhorro></GraficasAhorro>}></Route>
       
      </Routes>
    </Router>
  );
}

export default App;

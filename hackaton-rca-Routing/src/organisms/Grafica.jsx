import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function Grafica({ ahorro, gastos }) {
  const data = [
    { name: 'Finanzas', ahorro: ahorro, gastos: gastos }
  ];

  return (
    <div className="mt-8">
      <h2 className="text-center text-xl font-semibold mb-4" style={{ color: '#5f6368' }}>Gráfico de Ahorros y Gastos</h2>
      <ResponsiveContainer width="60%" height={300}>
        <BarChart 
          data={data} 
          barCategoryGap="30%" 
          style={{ background: '#f4f7f9', padding: '20px', borderRadius: '12px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)' }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="name" stroke="#666" tick={{ fontSize: 12 }} />
          <YAxis stroke="#666" tick={{ fontSize: 12 }} />
          <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #ddd' }} labelStyle={{ color: '#333' }} itemStyle={{ color: '#333' }} />
          <Bar 
            dataKey="ahorro" 
            fill="#4caf50" 
            name="Ahorro" 
            barSize={18} 
            radius={[5, 5, 0, 0]} 
          />
          <Bar 
            dataKey="gastos" 
            fill="#f44336" 
            name="Gastos" 
            barSize={18} 
            radius={[5, 5, 0, 0]} 
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Grafica;

import React from 'react';
import '../styles/Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Bienvenido al panel de Sapiens IA</h2>
      <div className="dashboard-cards">
        <a href="https://laboratories.sapiens-ia.com" target="_blank" rel="noopener noreferrer">
          <div className="dashboard-card">
            <h3>Prueba Basilisk</h3>
            <p>Experimenta nuestra demo de Basilisk, un asistente de IA avanzado.</p>
          </div>
        </a>
        <a href="https://chat.sapiens-ia.com" target="_blank" rel="noopener noreferrer">
          <div className="dashboard-card">
            <h3>Prueba Executive Bot</h3>
            <p>Descubre la demo de Executive Bot, otro ejemplo de inteligencia artificial de Sapiens IA.</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Dashboard;

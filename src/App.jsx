import React, { useState } from 'react';
import './App.css';

const App = () => {
  // Estado local del componente para gestionar la visibilidad del menú
  const [menuVisible, setMenuVisible] = useState(false);

  // Manejador de eventos para alternar la visibilidad del menú
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="container">
      <h1>Proyecto II</h1>
      <h2>Producto integrador. El final del proceso</h2>

      <button onClick={toggleMenu}>Menú</button>

      {menuVisible && (
        <ul>
          <li>Actividades realizadas en el curso </li>
          <li>Código fuente (comprimido) </li>
        </ul>
      )}
    </div>
  );
};

export default App;

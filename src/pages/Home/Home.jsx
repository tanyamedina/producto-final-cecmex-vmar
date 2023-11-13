import "./style.css";
import React, { useState } from "react";
import logo from "../../assets/Imagenes/udgvirtual_logo.png";

export const Home = () => {
  // Estado local del componente para gestionar la visibilidad del menú
  const [menuVisible, setMenuVisible] = useState(false);

  // Manejador de eventos para alternar la visibilidad del menú
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="home">
      <img id="logo" src={logo} alt="logo" />
      <h1>Proyecto II</h1>
      <h2>Producto integrador. El final del proceso</h2>

      <button onClick={toggleMenu}>Menú</button>

      {menuVisible && (
        <ul id="mainNav">
          <button>Actividades realizadas en el curso </button>
          <button> Descargar Código fuente (comprimido) </button>
        </ul>
      )}
    </div>
  );
};

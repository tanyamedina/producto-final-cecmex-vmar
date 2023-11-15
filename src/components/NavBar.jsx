import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();
  const [menuVisible, setMenuVisible] = useState(false);

  const handleToggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleCloseMenu = () => {
    setMenuVisible(false);
  };

  return (
    <nav>
      <div className="popup-container">
        <button className="rayitasmenu" onClick={handleToggleMenu}>☰</button>
        {menuVisible && (
          <div className="popup-menu">
            <button onClick={() => { navigate("/Home"); handleCloseMenu(); }}>Home</button>
            {/* Enlace directo al PDF */}
            <a href="/files/U4-Actividades-realizadas.pdf" target="_blank" rel="noopener noreferrer" onClick={handleCloseMenu}>
              Actividades</a>
            <button onClick={() => { navigate("/opcion2"); handleCloseMenu(); }}>Descargar código fuente</button>
            <button onClick={() => { navigate("/opcion3"); handleCloseMenu(); }}>Sistema implementado</button>
            <button onClick={() => { navigate("/opcion3"); handleCloseMenu(); }}>Reporte de modificaciones</button>
            <button onClick={() => { navigate("/opcion3"); handleCloseMenu(); }}>Ir al repositorio de GitHub</button>
          </div>
        )}
      </div>
    </nav>
  );
}; 

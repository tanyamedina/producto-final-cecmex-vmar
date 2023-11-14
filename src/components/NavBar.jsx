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

  const handleDownload = () => {
    try {
      // Ruta relativa al archivo ZIP
      const filePath = "./files/proyecto-2.zip";
  
      // Crear un enlace para descargar el archivo
      const anchor = document.createElement("a");
      anchor.href = filePath;
      anchor.download = "proyecto-2.zip";
      anchor.click();
    } catch (error) {
      alert("error al descargar el archivo");
      console.error("Error al descargar el archivo", error);
    }
  };

  return (
    <nav>
      <div className="popup-container">
        <button className="rayitasmenu" onClick={handleToggleMenu}>☰</button>
        {menuVisible && (
          <div className="popup-menu">
            <button onClick={() => { navigate("/Home"); handleCloseMenu(); }}>Home</button>
            <button onClick={() => { navigate("/Document"); handleCloseMenu(); }}>Actividades</button>
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

import "./style.css";
import { useNavigate } from "react-router-dom";



export const NavBar = () => {
  const navigate = useNavigate();

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
        alert("error al descargar el archivo")
      console.error("Error al descargar el archivo", error);
    }
  };

  return (
    <nav>   
      <button onClick={() => navigate("/home")}>Inicio</button>
      <button onClick={() => navigate("/document")}>Documento</button>
      <button onClick={handleDownload}>Descargar Zip</button>
    </nav>
  );
};

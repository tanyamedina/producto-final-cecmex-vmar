import "./style.css";
import React, { useState } from "react";
import logo from "../../assets/Imagenes/udgvirtual_logo.png";

export const Home = () => {
 
  return (
    <div className="home">
      <img id="logo" src={logo} alt="logo" />
      <h1>Proyecto II</h1>
      <h2>Producto integrador. El final del proceso</h2>
      <h3 className="custom-h3">Scrum Team:</h3>
      <div>
        <h3 className="custom-h3-2">Mujeres programando</h3>
      </div>
    </div>
  );
};

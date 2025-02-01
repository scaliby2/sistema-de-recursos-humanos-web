import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Titulo() {
  return (
    <div 
      style={{
        background: "white",
        margin: "20px auto",
        padding: "10px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
      }}
    >
      <div
        style={{
          textAlign: "center",
          color: "black",
          fontFamily: "Sixtyfour Convergence, sans-serif",
          fontSize: "30px",
          fontWeight: "bold",
        }}
      >
        Sistema de Recursos Humanos
      </div>
    </div>
  );
}

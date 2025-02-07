import React from "react";
import Lista from "./components/Lista";
import BarraNavegacion from "./components/BarraNavegacion";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AgregarEmpleado from "./components/AgregarEmpleado";
import EditarEmpleado from "./components/EditarEmpleado";
import EliminarRegistro from "./components/EliminarRegistro";
import Login from "./components/login";

export default function App() {
  return (
    <BrowserRouter>
      {/* Asegurarte de que el Login solo se muestre en la ruta de login */}   
      <Routes>
        
        <Route path="/login" element={<Login />} />  {/* Ruta del login */}
        <Route path="/" element={<><BarraNavegacion /><Lista /></>} />
        <Route path="/agregar" element={<><BarraNavegacion /><AgregarEmpleado /></>} />
        <Route path="/editar/:id" element={<><BarraNavegacion /><EditarEmpleado /></>} />
        <Route path="/eliminar/:id" element={<><BarraNavegacion /><EliminarRegistro /></>} />
      </Routes>
    </BrowserRouter>
  );
}

import React from "react";
import Lista from "./components/Lista";
import BarraNavegacion from "./components/BarraNavegacion";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AgregarEmpleado from "./components/AgregarEmpleado";
import EditarEmpleado from "./components/EditarEmpleado";
import EliminarRegistro from "./components/EliminarRegistro";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <BarraNavegacion />     
        <Routes>
                <Route exact path='/' element={<Lista/>}/>       
                <Route exact path='/agregar' element={<AgregarEmpleado/>} />
                <Route exact path='/editar/:id' element={<EditarEmpleado/>} />
                <Route exact path='/eliminar/:id' element={<EliminarRegistro/>}/>
        </Routes>           
      </BrowserRouter>
   
    </>
    
  );
}

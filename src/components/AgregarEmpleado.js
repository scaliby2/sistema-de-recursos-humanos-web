import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaSave } from 'react-icons/fa';

export default function AgregarEmpleado() {
  // redirigimos al inicio
  let navegacion = useNavigate();

  const [empleado, setEmpleado] = useState({
    nombre: "",
    departamento: "",
    sueldo: ""
  });

  const { nombre, departamento, sueldo } = empleado;

  const onInputChange = (e) => {
    // spread operator ' ... ' sirve para expandir los atributos
    setEmpleado({ ...empleado, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const urlBase = "http://localhost:8080/rh-app/agregar";
    await axios.post(urlBase, empleado);
    // redirigimos al inicio
    navegacion('/');
  };

  return (
    <div className='container d-flex justify-content-center align-items-center' style={{ height: "100vh" }}>
      <div className='card shadow p-4' style={{ maxWidth: '500px', width: '100%' }}>
        <h3 className='text-center mb-4 text-primary'>Agregar Empleado</h3>

        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label fw-bold">Nombre</label>
            <input
              type="text"
              className="form-control text-center"
              id="nombre"
              name="nombre"
              required
              value={nombre}
              onChange={onInputChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="departamento" className="form-label fw-bold">Departamento</label>
            <input
              type="text"
              className="form-control text-center"
              id="departamento"
              name="departamento"
              required
              value={departamento}
              onChange={onInputChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="sueldo" className="form-label fw-bold">Sueldo</label>
            <input
              type="number"
              className="form-control text-center"
              id="sueldo"
              name="sueldo"
              required
              value={sueldo}
              onChange={onInputChange}
            />
          </div>

          <div className="d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => navegacion("/")}
            >
              <FaArrowLeft /> Regresar
            </button>
            <button type="submit" className="btn btn-warning">
              <FaSave /> Guardar Registro
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

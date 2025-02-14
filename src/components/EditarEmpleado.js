import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft, FaSave } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

export default function EditarEmpleado() {
  const urlBase = "http://localhost:8080/rh-app";
  const { id } = useParams();
  let navegacion = useNavigate();

  const [empleado, setEmpleado] = useState({
    nombre: "",
    departamento: "",
    sueldo: ""
  });

  const { nombre, departamento, sueldo } = empleado;

  useEffect(() => {
    const cargarEmpleado = async () => {
      try {
        const resultado = await axios.get(`${urlBase}/empleados/${id}`);
        setEmpleado(resultado.data);
      } catch (error) {
        console.log("Error al cargar el empleado", error);
      }
    };
    cargarEmpleado();
  }, [id]);

  const onInputChange = (e) => {
    setEmpleado({ ...empleado, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${urlBase}/editar/${id}`, empleado); // Ruta corregida
      navegacion("/");
    } catch (error) {
      console.log("Error al editar", error);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div className="card shadow p-4" style={{ maxWidth: "500px", width: "100%" }}>
        <h3 className="text-center mb-4 text-primary">Editar Empleado</h3>

        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label fw-bold">Nombre</label>
            <input
              type="text"
              className="form-control text-center"
              value={nombre}
              onChange={onInputChange}
              name="nombre"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Departamento</label>
            <input
              type="text"
              className="form-control text-center"
              value={departamento}
              onChange={onInputChange}
              name="departamento"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Sueldo</label>
            <input
              type="number"
              className="form-control text-center"
              value={sueldo}
              onChange={onInputChange}
              name="sueldo"
              required
            />
          </div>

          <div className="d-flex justify-content-between">
            <button className="btn btn-secondary" onClick={() => navegacion("/")}>
              <FaArrowLeft /> Regresar
            </button>
            <button type="submit" className="btn btn-primary">
              <FaSave /> Guardar Cambios
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
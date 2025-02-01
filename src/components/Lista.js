import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { NumericFormat } from "react-number-format";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function Lista() {
  const urlBase = "http://localhost:8080/rh-app/empleados";
  const [empleados, setEmpleados] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    cargarEmpleados();
  }, []);

  const cargarEmpleados = async () => {
    try {
      const resultado = await axios.get(urlBase);
      setEmpleados(resultado.data);
    } catch (error) {
      console.error("Error al cargar empleados:", error);
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4 fw-bold text-primary">Lista de Empleados</h2>

      {cargando ? (
        <div className="text-center mt-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      ) : (
        <div className="table-responsive shadow rounded p-3 bg-white">
          <table className="table table-hover align-middle">
            <thead className="table-dark text-center">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Departamento</th>
                <th scope="col">Salario</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {empleados.map((empleado) => (
                <tr key={empleado.idEmpleado} className="text-center">
                  <th scope="row">{empleado.idEmpleado}</th>
                  <td className="fw-semibold">{empleado.nombre}</td>
                  <td>{empleado.departamento}</td>
                  <td>
                    <NumericFormat
                      value={empleado.sueldo}
                      displayType={"text"}
                      thousandSeparator=","
                      prefix="$"
                      decimalScale={2}
                      fixedDecimalScale
                      className="fw-bold text-success"
                    />
                  </td>
                  <td>
                    <div className="d-flex justify-content-center gap-2">
                      <Link
                        to={`/editar/${empleado.idEmpleado}`}
                        className="btn btn-warning btn-sm d-flex align-items-center gap-1"
                        aria-label={`Editar empleado ${empleado.nombre}`}
                      >
                        <FaEdit /> Editar
                      </Link>
                      <Link
                        to={`/eliminar/${empleado.idEmpleado}`}
                        className="btn btn-danger btn-sm d-flex align-items-center gap-1"
                      >
                        <FaTrash /> Eliminar
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

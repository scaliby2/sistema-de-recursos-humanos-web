import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaTrash, FaArrowLeft } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

export default function EditarEmpleado() {
  const urlBase = "http://localhost:8080/rh-app/empleados";
  const { id } = useParams();
  let navegacion = useNavigate();
  
  const [empleado, setEmpleado] = useState({
    nombre: "",
    departamento: "",
    sueldo: ""
  });

  const [modalVisible, setModalVisible] = useState(false);
  
  const { nombre, departamento, sueldo } = empleado;

  useEffect(() => {
    const cargarEmpleado = async () => {
      try {
        const resultado = await axios.get(`${urlBase}/${id}`);
        setEmpleado(resultado.data);
      } catch (error) {
        console.log("Error al cargar el empleado", error);
      }
    };
    cargarEmpleado();
  }, [id]);

  const eliminarEmpleado = async () => {
    try {
      await axios.delete(`${urlBase}/${id}`);
      navegacion("/");
    } catch (error) {
      console.log("Error al eliminar", error);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div className="card shadow p-4" style={{ maxWidth: "500px", width: "100%" }}>
        <h3 className="text-center mb-4 text-danger">Eliminar Empleado</h3>
        
        <div className="mb-3">
          <label className="form-label fw-bold">Nombre</label>
          <input type="text" className="form-control text-center" value={nombre} disabled />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Departamento</label>
          <input type="text" className="form-control text-center" value={departamento} disabled />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Sueldo</label>
          <input type="number" className="form-control text-center" value={sueldo} disabled />
        </div>

        <div className="d-flex justify-content-between">
          <button className="btn btn-secondary" onClick={() => navegacion("/")}>
            <FaArrowLeft /> Regresar
          </button>
          <button className="btn btn-danger" onClick={() => setModalVisible(true)}>
            <FaTrash /> Eliminar Registro
          </button>
        </div>
      </div>

      {/* Modal de Confirmación */}
      {modalVisible && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-danger">Confirmar Eliminación</h5>
                <button type="button" className="btn-close" onClick={() => setModalVisible(false)}></button>
              </div>
              <div className="modal-body">
                <p>¿Estás seguro de eliminar a <strong>{nombre}</strong>? Esta acción no se puede deshacer.</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setModalVisible(false)}>Cancelar</button>
                <button className="btn btn-danger" onClick={eliminarEmpleado}>Eliminar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

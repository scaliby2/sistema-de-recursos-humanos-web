import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";

export default function BarraNavegacion() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container">
          <Link
            className="navbar-brand fw-bold"
            to="/"
            style={{ color: "#007BFF" }}
          >
            Sistema de Recursos Humanos
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-lg-auto"> {/* ms-lg-auto para alinear a la derecha en móvil */}
              <li className="nav-item">
                <Link
                  className="nav-link active text-primary"
                  aria-current="page"
                  to="/"
                  style={{ fontWeight: "500" }}
                >
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-dark"
                  to="/agregar"
                  style={{ fontWeight: "500" }}
                >
                  Agregar Empleado
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-dark"
                  to="/login"
                  style={{ fontWeight: "500" }}
                >
                  Salir
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
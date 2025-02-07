import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
const Login = () => {
  // Definimos los estados para los campos de usuario y contraseña
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate(); // Inicializamos el hook de navegación

  // Función que maneja el envío del formulario
  const handleLogin = (e) => {
    e.preventDefault();

    // Aquí puedes validar las credenciales (esto es solo un ejemplo)
    if (username === "admin" && password === "admin123") {
      navigate("/", { replace: true }); // Redirigir a la página principal después del login exitoso y reemplazar la entrada en el historial
    } else {
      setError("Credenciales incorrectas 'admin' admin123' ");
    }
  };

  return (
    <div
      className="container-fluid d-flex flex-column align-items-center justify-content-center"
      style={{
        height: "100vh",
        background: "linear-gradient(135deg, #6a11cb, #2575fc)",
      }}
    >
      {/* Título fuera de la tarjeta */}
      <h1
        className="text-center mb-5"
        style={{
          fontFamily: "Arial, sans-serif",
          fontWeight: "bold",
          color: "transparent",
          fontSize: "60px",
          background: "linear-gradient(135deg, #ff7e5f, #feb47b)", // Gradiente de color
          WebkitBackgroundClip: "text", // Hace que el gradiente se aplique solo al texto
          backgroundClip: "text",
          textShadow: "4px 4px 8px rgba(0, 0, 0, 0.3)", // Sombra de texto
          letterSpacing: "3px",
          animation: "fadeIn 2s ease-out", // Animación de entrada
          animationDelay: "0.5s", // Retraso para un efecto fluido
        }}
      >
        Sistema de Recursos Humanos
      </h1>

      {/* Card de Login */}
      <div
        className="card shadow-lg border-0"
        style={{
          width: "60%",
          maxWidth: "700px",
          padding: "50px",
          borderRadius: "20px",
          backgroundColor: "#ffffff",
          boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="card-body">
          {/* Encabezado del formulario */}
          <h2
            className="card-title text-center mb-4"
            style={{
              fontFamily: "Arial, sans-serif",
              fontWeight: "bold",
              color: "#333",
            }}
          >
            Iniciar Sesión
          </h2>
          <form onSubmit={handleLogin}>
            {/* Campo de usuario */}
            <div className="mb-4">
              <label
                className="form-label"
                style={{ fontSize: "20px", color: "#555" }}
              >
                Usuario
              </label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder=" admin"
                style={{
                  height: "55px",
                  borderRadius: "12px",
                  border: "1px solid #ccc",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#007bff")}
                onBlur={(e) => (e.target.style.borderColor = "#ccc")}
              />
            </div>
            {/* Campo de contraseña */}
            <div className="mb-4">
              <label
                className="form-label"
                style={{ fontSize: "20px", color: "#555" }}
              >
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="admin123"
                style={{
                  height: "55px",
                  borderRadius: "12px",
                  border: "1px solid #ccc",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#007bff")}
                onBlur={(e) => (e.target.style.borderColor = "#ccc")}
              />
            </div>
            {/* Mostrar mensaje de error si es necesario */}
            {error && (
              <div
                className="alert alert-danger mt-3"
                style={{ fontSize: "16px", borderRadius: "12px" }}
              >
                {error}
              </div>
            )}
            {/* Botón de login */}
            <button
              type="submit"
              className="btn btn-primary w-100 py-3 mt-3"
              style={{
                fontSize: "20px",
                borderRadius: "12px",
                backgroundColor: "#007bff",
                borderColor: "#007bff",
                fontWeight: "bold",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
            >
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

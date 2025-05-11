import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useLocation } from "react-router-dom";
import "../css/Header.css";
import logo from "../img/Logo.png";

function Header() {
  const location = useLocation(); 
  const currentPath = location.pathname;

  return (
    <header className="bg-navy shadow-sm">
      <nav className="navbar navbar-expand-lg navbar-dark container-fluid py-2 px-5">
        <div className="d-flex align-items-center">
          <img
            src={logo}
            alt="Logo Municipalidad de Cholchol"
            width="50"
            height="50"
            className="me-2"
          />
        </div>

        {/* Botón hamburguesa */}
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú colapsable */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link fw-semibold ${
                  currentPath === "/" ? "active text-warning" : "text-white"
                }`}
              >
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contacto"
                className={`nav-link fw-semibold ${
                  currentPath === "/contacto" ? "active text-warning" : "text-white"
                }`}
              >
                Contactos
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;

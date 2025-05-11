import React, { useState } from "react";
import "../css/Servicios.css";
import acondicionamientoImg from "../img/acondicionamientoisico.png";
import cambioClimaticoImg from "../img/cambioclimatico.png";
import becasImg from "../img/becas.png";
import movilizacionImg from "../img/movilizacion.png";


function ServicesSection() {
  const [activeTab, setActiveTab] = useState("talleres");

  const renderCards = () => {
    switch (activeTab) {
      case "talleres":
        return (
          <>
            <Card
              title="Acondicionamiento Físico"
              text="Talleres para mejorar la salud física de la comunidad."
              image={acondicionamientoImg}
            />
            <Card
              title="Cambio Climático"
              text="Concientización y acciones locales frente al cambio climático."
              image={cambioClimaticoImg}
            />
          </>
        );
      case "educacion":
        return (
          <>
            <Card
              title="Becas"
              text="Apoyo económico para estudiantes destacados."
              image={becasImg}
            />
            <Card
              title="Movilización"
              text="Transporte para estudiantes de sectores rurales." 
              image={movilizacionImg}
            />
          </>
        );
      case "encuestas":
        return (
          <>
            <Card
              title="Actividades Deportivas"
              text="¿Qué deportes te gustaría practicar?"
            />
            <Card
              title="Cambio Climático"
              text="¿Qué acciones ambientales priorizarías?"
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <section id="servicios" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Nuestros Servicios</h2>

        {/* Tabs */}
        <ul className="nav nav-tabs justify-content-center mb-4">
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "talleres" ? "active" : ""}`}
              onClick={() => setActiveTab("talleres")}
            >
              Talleres
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${
                activeTab === "educacion" ? "active" : ""
              }`}
              onClick={() => setActiveTab("educacion")}
            >
              Educación
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${
                activeTab === "encuestas" ? "active" : ""
              }`}
              onClick={() => setActiveTab("encuestas")}
            >
              Encuestas
            </button>
          </li>
        </ul>

        {/* Cards */}
        <div className="row">{renderCards()}</div>
      </div>
    </section>
  );
}

function Card({ title, text, image }) {
  return (
    <div className="col-md-6 mb-4">
      <div className="card h-100 shadow-sm">
        {image && (
          <img
            src={image}
            className="card-img-top card-img-fixed"
            alt={title}
          />
        )}
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <a href="#" className="btn btn-primary">
            Ver más
          </a>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;

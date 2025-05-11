import React from 'react';
import'../css/HeroSection.css';

function Portada() {
  return (
    <section className="hero-gif d-flex align-items-center text-white text-center">
      <div className="container position-relative z-1">
        <h1 className="display-4 fw-bold">Bienvenidos a la Municipalidad de Cholchol</h1>
        <p className="lead">Trabajando por el bienestar de nuestra comunidad.</p>
        <a href="#servicios" className="btn btn-warning mt-3 fw-bold">
          Ver Servicios
        </a>
      </div>
      {/*oscurecer el fondo y para mejorar la legibilidad */}
      <div className="overlay"></div>
    </section>
  );
}

export default Portada;

import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white mt-auto py-4">
      <div className="container text-center">
        <p className="mb-1">&copy; {new Date().getFullYear()} Municipalidad de Cholchol</p>
        <p className="mb-0 small">
          Sitio desarrollado como parte de evaluación de Frontend – Unidad 2
        </p>
      </div>
    </footer>
  );
}

export default Footer;

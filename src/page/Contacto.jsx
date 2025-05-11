import React, { useState, useEffect } from 'react';


function Contacto() {
  const [formData, setFormData] = useState({ nombre: '', correo: '', mensaje: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

useEffect(() => {
  if (success) {
    const timer = setTimeout(() => {
      setSuccess(false);
    }, 3000); // Oculta el mensaje después de 3 segundos

    return () => clearTimeout(timer); // Limpieza del temporizador
  }
}, [success]);



  const validate = (field, value) => {
    let error = '';

    if (!value.trim()) {
      error = 'Este campo es obligatorio';
    } else if (field === 'correo') {
      const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!correoValido.test(value)) {
        error = 'Correo electrónico inválido';
      }
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    setErrors({
      ...errors,
      [name]: validate(name, value),
    });

    setSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      nombre: validate('nombre', formData.nombre),
      correo: validate('correo', formData.correo),
      mensaje: validate('mensaje', formData.mensaje),
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).some(Boolean)) {
      console.log('Formulario enviado:', formData);
      setSuccess(true);
      setFormData({ nombre: '', correo: '', mensaje: '' });
    } else {
      setSuccess(false);
    }
  };

  return (
    <div className="container py-5" id="contacto">
      <h2 className="mb-4">Contáctanos</h2>
      {success && <div className="alert alert-success">¡Mensaje enviado con éxito!</div>}
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input
            type="text"
            className={`form-control ${errors.nombre ? 'is-invalid' : ''}`}
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
          {errors.nombre && <div className="invalid-feedback">{errors.nombre}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="correo" className="form-label">Correo electrónico</label>
          <input
            type="email"
            className={`form-control ${errors.correo ? 'is-invalid' : ''}`}
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
          />
          {errors.correo && <div className="invalid-feedback">{errors.correo}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="mensaje" className="form-label">Mensaje</label>
          <textarea
            className={`form-control ${errors.mensaje ? 'is-invalid' : ''}`}
            id="mensaje"
            name="mensaje"
            rows="4"
            value={formData.mensaje}
            onChange={handleChange}
          />
          {errors.mensaje && <div className="invalid-feedback">{errors.mensaje}</div>}
        </div>

        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;

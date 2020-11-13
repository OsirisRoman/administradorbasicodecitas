//imr
import React, { Fragment, useState } from 'react';
import { nanoid } from 'nanoid';

const Formulario = ({ crearCita }) => {
  //Crear State de Citas
  const [cita, setCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: '',
  });

  const [error, setError] = useState(false);

  //Función que se ejecuta cada vez que el usuario escribe en un input
  const actualizarState = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  //Extraer valores de la cita
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  //Función que se ejecuta cuando el usuario presiona el botón "Agregar Cita"
  const enviarCita = (e) => {
    e.preventDefault();

    //Validar
    if (
      mascota.trim() === '' ||
      propietario.trim() === '' ||
      fecha.trim() === '' ||
      hora.trim() === '' ||
      sintomas.trim() === ''
    ) {
      setError(true);
      console.log('Hubo un error');
      return;
    }

    //Eliminar el mensaje previo
    setError(false);

    //Asignar un ID(key distinto)
    cita.id = nanoid();

    //Crear la cita
    crearCita(cita);

    //Reiniciar el form
    setCita({
      mascota: '',
      propietario: '',
      fecha: '',
      hora: '',
      sintomas: '',
    });
  };

  return (
    <Fragment>
      <h2>Crear Cita</h2>
      {error ? (
        <p className='alerta-error'>Todos los campos son obligatorios</p>
      ) : null}
      <form onSubmit={enviarCita}>
        <label>Nombre de la Mascota</label>
        <input
          type='text'
          name='mascota'
          className='u-full-width'
          placeholder='Nombre de tu mascota'
          onChange={actualizarState}
          value={mascota}
        />
        <label>Nombre del Dueño</label>
        <input
          type='text'
          name='propietario'
          className='u-full-width'
          placeholder='Nombre del Dueño'
          onChange={actualizarState}
          value={propietario}
        />
        <label>Fecha</label>
        <input
          type='date'
          name='fecha'
          className='u-full-width'
          onChange={actualizarState}
          value={fecha}
        />
        <label>Hora</label>
        <input
          type='time'
          name='hora'
          className='u-full-width'
          onChange={actualizarState}
          value={hora}
        />
        <label>Síntomas Presentados por la Mascota</label>
        <textarea
          name='sintomas'
          className='u-full-width'
          onChange={actualizarState}
          value={sintomas}></textarea>
        <button type='submit' className='u-full-width button-primary'>
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;

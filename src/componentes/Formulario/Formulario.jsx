//imr
import React, { Fragment } from 'react';

const Formulario = () => {
  return (
    <Fragment>
      <h2>Crear Cita</h2>
      <form>
        <label>Nombre de la Mascota</label>
        <input
          type='text'
          name='mascota'
          className='u-full-width'
          placeholder='Nombre de tu mascota'
        />
        <label>Nombre del Dueño</label>
        <input
          type='text'
          name='propietario'
          className='u-full-width'
          placeholder='Nombre del Dueño'
        />
        <label>Fecha</label>
        <input type='date' name='fecha' className='u-full-width' />
        <label>Hora</label>
        <input type='time' name='hora' className='u-full-width' />
        <label>Síntomas Presentados por la Mascota</label>
        <textarea name='sintomas' className='u-full-width'></textarea>
        <button type='submit' className='u-full-width button-primary'>
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;

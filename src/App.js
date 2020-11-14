import { Fragment, useState, useEffect } from 'react';

import Formulario from './componentes/Formulario/Formulario';
import Cita from './componentes/Cita/Cita';

function App() {
  //Arreglo de citas
  const [citas, setCitas] = useState([]);

  //citas en local storage
  /* let citasIniciales = localStorage.getItem('citas') ? JSON.parse(localStorage.getItem('citas')) : []; */

  /*useEffect es una función reactiva que se ejecuta 
  cada vez que cambia el valor de la variable que se 
  pase como segundo argumento de la función*/
  useEffect(() => {
    if (localStorage.getItem('citas')) {
      localStorage.setItem('citas', JSON.stringify(citas));
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas]);

  //Función que toma el array de citas actuales e inserta las nuevas citas al final
  const crearCita = (cita) => {
    setCitas([...citas, cita]);
  };

  //Eliminar Cita
  const eliminarCita = (citaAEliminar) => {
    const agendaPostEliminación = citas.filter(
      (cita) => cita.id !== citaAEliminar
    );
    setCitas(agendaPostEliminación);
  };

  //Título condicional
  const titulo = citas.length === 0 ? 'No Hay Citas' : 'Administra tus citas';

  return (
    <Fragment>
      <h1>Administrador Básico de Citas</h1>
      <div className='container'>
        <h5
          className='u-text-center'
          style={{ textAlign: 'center', color: 'white' }}>
          Un administrador básico de citas que hace uso de formularios y su
          validación respectiva además de algunos react hooks 🎉
        </h5>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Formulario crearCita={crearCita} />
          </div>
          <div className='one-half column'>
            <h2>{titulo}</h2>
            {citas.map((cita) => (
              <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}></Cita>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

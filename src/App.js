import { Fragment, useState } from 'react';

import Formulario from './componentes/Formulario/Formulario';
import Cita from './componentes/Cita/Cita';

function App() {
  //Arreglo de citas
  const [citas, setCitas] = useState([]);

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

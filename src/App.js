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

  return (
    <Fragment>
      <h1>Administrador Básico de Citas</h1>
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Formulario crearCita={crearCita} />
          </div>
          <div className='one-half column'>
            <h2>Administra tus citas</h2>
            {citas.map((cita) => (
              <Cita key={cita.id} cita={cita}></Cita>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

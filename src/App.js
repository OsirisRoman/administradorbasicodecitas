import { Fragment, useState } from 'react';

import Formulario from './componentes/Formulario/Formulario';

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
          <div className='one-half column'>2</div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

import { Fragment } from 'react';

import Formulario from './componentes/Formulario/Formulario';

function App() {
  return (
    <Fragment>
      <h1>Administrador Básico de Citas</h1>
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Formulario />
          </div>
          <div className='one-half column'>2</div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

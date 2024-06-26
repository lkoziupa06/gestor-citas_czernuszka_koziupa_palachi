import  React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Formulario } from './views/Formulario';
import { Listado } from './views/Listado';


function App() {
  const [citas, setCitas] = useState([]);

  return (
    <>
      <h1>ADMINISTRADOR DE CITAS</h1>
      <div className="row">
        <div className="one-half column">
          <Formulario citas = {citas} setCitas={setCitas}/>
        </div>
        <div className="one-half column">
          <Listado citas = {citas} setCitas={setCitas}/>
        </div>
      </div>
    </>
  );
}

export default App;

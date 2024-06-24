import  React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Formulario } from './views/Formulario';
import { Listado } from './views/Listado';

function App() {
  const [citas, setCitas] = useState([]);
  return (
    <>
      <div className="row">
        <div class="one-half column">
          <Formulario citas = {citas} setcitas={setCitas}/>
        </div>
        <div className="one-half column">
          <Listado citas = {citas}/>
        </div>
      </div>
    </>
  );
}

export default App;

import {useState} from 'React'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Formulario } from './views/Formulario';
import { Listado } from './views/Listado';

function App() {
  const [citas, setCitas] = useState([]);
  return (
    <>
      <div class="row">
        <div class="one-half column">
          <Formulario citas = {citas} setcitas={setCitas}/>
        </div>
        <div class="one-half column">
          <Listado/>
        </div>
      </div>
    </>
  );
}

export default App;

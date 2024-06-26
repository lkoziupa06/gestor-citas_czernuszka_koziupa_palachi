import Label from "../Label"
import Input from "../Input"
import Boton from "../Boton"
import { useState } from "react"

const Form = ({funcion}) =>{

  const [index, setIndex] = useState(0);
  const handleSubmit = (e) => {
    if (window.confirm('¿Quieres añadir esta cita?')){
      e.preventDefault();
      const formData = new FormData(e.target);
  
      const form = {
        mascota: formData.get('mascota'),
        dueno: formData.get('dueno'),
        fecha: formData.get('fecha'),
        hora: formData.get('hora'),
        sintomas: formData.get('sintomas'),
        index: formData.get('index')
      };
  
      funcion(form);
      e.target.reset();
      setIndex(prevIndex => prevIndex + 1);
    }
  };

    return(
        <>
            <form id="formCita" onSubmit={handleSubmit}>
                <Label nombre="Nombre mascota" />
                <Input type="text" name="mascota" placeholder="Nombre mascota"/>
                <Label nombre="Nombre dueño" />
                <Input type="text" name="dueno" placeholder="Nombre del dueño de la mascota"/>
                <Label nombre="Fecha" />
                <Input type="date" name="fecha"/>
                <Label nombre="Hora" />
                <Input type="time" name="hora" />
                <Label nombre="Síntomas" />
                <textarea name="sintomas" id="sintomas"></textarea>
                <Input type="hidden" name="index" value={index}/>
                <Boton name="Enviar" type="submit" />
            </form>
        </>
    )
}

export default Form
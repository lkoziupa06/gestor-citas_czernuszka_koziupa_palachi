import Label from "../Label"
import Input from "../Input"
import Boton from "../Boton"
import { useState } from "react"

const Form = ({funcion}) =>{

    const [form, setForm] = useState({
        mascota: '',
        dueno: '',
        fecha: '',
        hora: '',
        sintomas: ''
      });
    
      const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        funcion(form);
        setForm({
          mascota: '',
          dueno: '',
          fecha: '',
          hora: '',
          sintomas: ''
        });
      };

    return(
        <>
            <form id="formCita" onSubmit={handleSubmit}>
                <Label campo="mascota" nombre="Nombre mascota" />
                <Input type="text" name="mascota" placeholder="Nombre mascota" value={form.mascota} onChange={handleChange} />
                <Label campo="dueno" nombre="Nombre dueño" />
                <Input type="text" name="dueno" placeholder="Nombre del dueño de la mascota" value={form.dueno} onChange={handleChange} />
                <Label campo="fecha" nombre="Fecha" />
                <Input type="date" name="fecha" placeholder="" value={form.fecha} onChange={handleChange} />
                <Label campo="hora" nombre="Hora" />
                <Input type="time" name="hora" placeholder="" value={form.hora} onChange={handleChange} />
                <Label campo="sintomas" nombre="Síntomas" />
                <textarea name="sintomas" id="sintomas" value={form.sintomas} onChange={handleChange}></textarea>
                <Boton name="Enviar"/>
            </form>
        </>
    )
}

export default Form
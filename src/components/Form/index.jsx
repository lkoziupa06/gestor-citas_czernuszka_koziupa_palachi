import Label from "../Label"
import Input from "../Input"
import Boton from "../Boton"


const Form = ({funcion}) =>{

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const form = {
      mascota: formData.get('mascota'),
      dueno: formData.get('dueno'),
      fecha: formData.get('fecha'),
      hora: formData.get('hora'),
      sintomas: formData.get('sintomas'),
    };

    funcion(form);
    e.target.reset();
  };

    return(
        <>
            <form id="formCita" onSubmit={handleSubmit}>
                <Label campo="mascota" nombre="Nombre mascota" />
                <Input type="text" name="mascota" placeholder="Nombre mascota"/>
                <Label campo="dueno" nombre="Nombre dueño" />
                <Input type="text" name="dueno" placeholder="Nombre del dueño de la mascota"/>
                <Label campo="fecha" nombre="Fecha" />
                <Input type="date" name="fecha" placeholder=""/>
                <Label campo="hora" nombre="Hora" />
                <Input type="time" name="hora" placeholder=""/>
                <Label campo="sintomas" nombre="Síntomas" />
                <textarea name="sintomas" id="sintomas"></textarea>
                <Boton name="Enviar"/>
            </form>
        </>
    )
}

export default Form
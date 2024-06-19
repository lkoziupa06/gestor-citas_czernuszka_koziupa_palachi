import Label from "../Label"
import Input from "../Input"
import Boton from "../Boton"

const Form = ({citas, setcitas}) =>{

    function addCita(){
        const mascota = document.getElementById("mascota");
        const dueno = document.getElementById("dueno");
        const fecha = document.getElementById("fecha");
        const hora = document.getElementById("hora")
        const sintomas = document.getElementById("sintomas")

        setcitas(citas.concat({
            mascota: mascota,
            dueno: dueno,
            fecha: fecha,
            hora: hora,
            sintomas: sintomas
        }))
    }

    return(
        <>
            <form id="formCita">
                <Label campo="mascota" nombre="Nombre mascota"/>
                <Input type="text" name="mascota" placeholder="Nombre mascota"/>
                <Label campo="dueno" nombre="Nombre dueño"/>
                <Input type="text" name="dueno" placeholder="Nombre del dueño de la mascota"/>
                <Label campo="fecha" nombre="Fecha"/>
                <Input type="date" name="fecha" placeholder=""/>
                <Label campo="hora" nombre="Hora"/>
                <Input type="time" name="hora" placeholder=""/>
                <Label campo="sintomas" nombre="Sintomas"/>
                <textarea name="sintomas" id="sintomas"></textarea><textarea/>
                <Boton name="Enviar" funcion={addCita}/>
            </form>
        </>
    )
}

export default Form
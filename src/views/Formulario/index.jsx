
import Form from "../../components/Form";

export const Formulario = ({citas, setCitas}) =>{
    
    function addCita(form){
        const {
            mascota = '',
            dueno = '',
            fecha = '',
            hora = '',
            sintomas = '',
            index = ''
          } = form || {}; 
        
        setCitas(citas.concat({
            mascota: mascota,
            dueno: dueno,
            fecha: fecha,
            hora: hora,
            sintomas: sintomas,
            index: index
        }))
    }

    return(
        <>
            <h2>AGENDAR CITA</h2>
            <Form funcion={addCita}/>
        </>
    );
}


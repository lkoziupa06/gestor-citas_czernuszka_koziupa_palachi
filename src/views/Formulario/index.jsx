
import Form from "../../components/Form";

export const Formulario = ({citas, setCitas}) =>{
    
    function addCita(form){
        const {
            mascota = 'Desconocido',
            dueno = 'Desconocido',
            fecha = 'Fecha no especificada',
            hora = 'Hora no especificada',
            sintomas = 'No hay síntomas especificados'
          } = form || {}; 
        
        setCitas(citas.concat({
            mascota: mascota,
            dueno: dueno,
            fecha: fecha,
            hora: hora,
            sintomas: sintomas
        }))
    }

    return(
        <>
            <h2>Agendar Cita</h2>
            <Form funcion={addCita}/>
        </>
    );
}


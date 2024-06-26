import Cita from "../../components/Cita";
import { useEffect } from "react";

export const Listado = ({citas, setCitas}) => {

    useEffect(() => {
        console.log('Las citas se modificaron:', citas);
      }, [citas]);
    
    const eliminarCita = (target) =>{
        if (window.confirm('¿Quieres eliminar esta cita?')) {
            handleDelete(target);
        }
    }
      
    const handleDelete = (target) =>{
        let index = target.target.id;
        const arrayActualizado = citas.filter(cita => cita.index !== index);
        setCitas(arrayActualizado);
    }
    return(
        <>
            <h2>LISTADO DE CITAS</h2>
            {citas.map((cita, key) => (
                <Cita cita={cita} key={key} funcion={eliminarCita}/>
            ))}
        </>
    )
}


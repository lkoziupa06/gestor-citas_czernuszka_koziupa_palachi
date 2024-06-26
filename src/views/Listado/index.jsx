import Cita from "../../components/Cita";
import { useEffect } from "react";

export const Listado = ({citas, setCitas}) => {

    useEffect(() => {
        console.log('Las citas se modificaron:', citas);
      }, [citas]);
    
    const eliminarCita = (target) =>{
        console.log(target.target.id);
        if (window.confirm('¿Quieres eliminar esta cita?')) {
            handleDelete(target);
            
        }
    }
      
    const handleDelete = (target) =>{
        let mascota = target.target.id;
        const arrayActualizado = citas.filter(cita => cita.mascota !== mascota);
        setCitas(arrayActualizado);
    }
    return(
        <>
            <h2>Listado de citas</h2>
            {citas.map((cita, index) => (
                <Cita cita={cita} key={index} funcion={eliminarCita}/>
            ))}
        </>
    )
}


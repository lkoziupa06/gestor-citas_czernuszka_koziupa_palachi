
import Cita from "../../components/Cita";
import { useEffect } from "react";

export const Listado = ({citas, setCitas}) =>{
    
    useEffect(() => {
        console.log('Las citas se modificaron:', citas);
      }, [citas]);

    const eliminarCita = (index) =>{
        setCitas(citas.filter(cita => cita !== citas[index]))
    }
    
    return(
        <>
            <h2>Listado de citas</h2>
            {citas.map((cita, index) => (
                <Cita cita={cita} index={index} funcion={eliminarCita}/>
        ))}
        </>
    )
}


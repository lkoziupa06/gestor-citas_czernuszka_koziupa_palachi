import Cita from "../../components/Cita";
import { useEffect } from "react";

export const Listado = ({citas = []}) =>{
    
    useEffect(() => {
        console.log('Las citas se modificaron:', citas);
      }, [citas]);
    
    return(
        <>
            <h2>Listado de citas</h2>
            {citas.map((cita, index) => (
                <Cita cita={cita} key={index}/>
        ))}
        </>
    )
}


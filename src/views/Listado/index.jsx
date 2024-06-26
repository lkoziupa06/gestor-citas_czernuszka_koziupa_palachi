
import Cita from "../../components/Cita";
import { useEffect } from "react";
import { useState } from "react";
import { Modal } from "../../components/Modal";

export const Listado = ({citas, setCitas}) =>{
    
    useEffect(() => {
        console.log('Las citas se modificaron:', citas);
      }, [citas]);

    const [citaAELiminar, setCitaAEliminar] = useState();
    const [showModal, setShowModal] = useState(false);

    const eliminarCita = (target) =>{
        setCitaAEliminar(target);
        setShowModal(true);
    }
    
    const handleDelete = (target) =>{
        let mascota = target.target.id;
        const arrayActualizado = citas.filter(cita => cita.mascota !== mascota);
        setCitas(arrayActualizado);
        setShowModal(false)
    }

    return(
        <>
            <h2>Listado de citas</h2>
            {citas.map((cita, index) => (
                <Cita cita={cita} key={index} funcion={eliminarCita}/>
            ))}

            {showModal && 
            
            <Modal 
                titulo="¿Queres eliminar esta cita?" 
                setter={(value) =>
                {
                    if(value){
                        handleDelete(citaAELiminar);
                    }
                    setShowModal(false);
                }}
                isOpen={showModal}
                />
            }
        </>
    )
}


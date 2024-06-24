import Boton from "../Boton"
import Item from "../Item"

const Cita = ({cita, key}) =>{
    return(
        <>
            <Item item="Mascota" contenido={cita.mascota}/>
            <Item item="Dueño" contenido={cita.dueno}/>
            <Item item="Fecha" contenido={cita.fecha}/>
            <Item item="Hora" contenido={cita.hora}/>
            <Item item="Sintomas" contenido={cita.sintomas}/>
        </>
    )
}

export default Cita
import Boton from "../Boton"
import Item from "../Item"

const Cita = ({cita, key, funcion}) =>{
    
    return(
        <>
            <div className="cita mb-3">
                    <div className="item">
                        <Item item="Mascota" contenido={cita.mascota} />
                    </div>
                    <div className="item">
                        <Item item="Dueño" contenido={cita.dueno} />
                    </div>
                    <div className="item">
                        <Item item="Fecha" contenido={cita.fecha} />
                    </div>
                    <div className="item">
                        <Item item="Hora" contenido={cita.hora} />
                    </div>
                    <div className="item">
                        <Item item="Sintomas" contenido={cita.sintomas} />
                    </div>
                    <div className="item">
                        <Boton nombre="Eliminar cita" type="button" onClick={funcion} id={cita.index} />
                    </div>
                </div>
        </>
    )
}

export default Cita
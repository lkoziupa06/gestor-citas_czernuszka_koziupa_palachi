
import Boton from '../Boton'
export const Modal = ({titulo, setter, isOpen}) =>{
    return(
        <>
            {isOpen &&
                <div className='modal'>
                <h1>{titulo}</h1>
                <div>
                    <Boton name="Cancelar" onClick={() => {setter(false)}} type="button"></Boton>
                    <Boton name="Confirmar" onClick={() => {setter(true)}} type="button"></Boton>
                </div>
            </div>
            }
        </>
    )
}
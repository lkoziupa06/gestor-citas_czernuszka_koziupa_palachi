import Boton from '../Boton'
export const Modal = ({titulo, setter, isOpen}) =>{
    return(
        <>
            {isOpen &&
                <div className='modal'>
                <h1>{titulo}</h1>
                <div>
                    <Boton name="Cancelar" onClick={() => {setter(false)}}></Boton>
                    <Boton name="Confirmar" onClick={() => {setter(true)}}></Boton>
                </div>
            </div>
            }
        </>
    )
}
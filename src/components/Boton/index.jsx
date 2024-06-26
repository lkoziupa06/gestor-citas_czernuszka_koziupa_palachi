
const Boton = ({nombre, onClick, type}) =>{
    const handleClick = onClick ? onClick : () =>{};
    return <button class="btn btn-primary mb-3" type={type} onClick={handleClick} > {nombre}</button>
}

export default Boton
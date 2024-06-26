const Boton = ({nombre, onClick, type, id}) =>{
    const handleClick = onClick ? onClick : () =>{};
    return <button class="btn btn-primary mb-3" type={type} onClick={handleClick} id={id}> {nombre}</button>
}

export default Boton
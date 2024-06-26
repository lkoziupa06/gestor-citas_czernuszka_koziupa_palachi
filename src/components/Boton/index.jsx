const Boton = ({nombre, onClick, type, id}) =>{
    const handleClick = onClick ? onClick : () =>{};
    return <button type={type} onClick={handleClick} id={id}>{nombre}</button>
}

export default Boton
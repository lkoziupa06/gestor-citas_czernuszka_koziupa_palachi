const Boton = ({nombre, onClick}) =>{
    const handleClick = onClick ? onClick : () =>{};
    return <button class="btn btn-primary mb-3" type="button" onClick={onClick} > {nombre}</button>
}

export default Boton
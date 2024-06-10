const Boton = ({funcion, nombre}) =>{
    return <button class="btn btn-primary mb-3" onClick={funcion}>{nombre}</button>
}

export default Boton
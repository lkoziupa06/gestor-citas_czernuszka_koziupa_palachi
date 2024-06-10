const Item = ({item, contenido}) =>{
    return <li style={{ listStyleType: 'none' }}><b>{item}:</b> {contenido}</li>
}
export default Item
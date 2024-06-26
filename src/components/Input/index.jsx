const Input = ({type, name, placeholder, value}) =>{
    return <input type={type} name={name} id={name} placeholder={placeholder} value={value} required/>
}

export default Input
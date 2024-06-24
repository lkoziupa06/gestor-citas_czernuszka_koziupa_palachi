const Input = ({type, name, placeholder, value, onChange}) =>{
    return <input type={type} name={name} id={name} placeholder={placeholder} value={value} onChange={onChange} required/>
}

export default Input
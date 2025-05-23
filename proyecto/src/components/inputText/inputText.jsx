const InputText = (props) => {
    return(
        <input type="text" name={`${props.nombre}`} onChange={props.enCambio} className="u-full-width" placeholder={`${props.placeHolder}`}/>
    )
}

export default InputText
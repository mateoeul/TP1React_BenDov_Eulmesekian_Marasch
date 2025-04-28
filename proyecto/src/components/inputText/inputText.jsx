import React from "react";

const InputText = (props) => {
    return(
        <input type="text" name={`${props.nombre}`} className="u-full-width" placeholder={`${props.placeHolder}`}/>
    )
}

export default InputText
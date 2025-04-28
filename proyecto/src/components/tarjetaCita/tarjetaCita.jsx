import React from "react";
import './tarjetaCita.css';
import Boton from "../boton/boton.jsx";  

const tarjetaCita = (props) => {
    return(
        <div className="cita">
            <p>Mascota: <span>{props.nombre}</span></p>
            <p>Dueño: <span>{props.dueño}</span></p>
            <p>Fecha: <span>{props.fecha}</span></p>
            <p>Hora: <span>{props.hora}</span></p>
            <p>Sintomas: <span>{props.sintomas}</span></p>
            <Boton></Boton>
        </div>
    )
}

export default tarjetaCita
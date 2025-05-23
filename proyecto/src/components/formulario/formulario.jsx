import React from "react";
import InputText from "../inputText/inputText.jsx";  
import './formulario.css'
import { agregarCita } from "../../hooks/agregarCita.jsx";

const Formulario = () => {
    const resultado = agregarCita();
    const formulario = resultado.formulario;
    const cambios = resultado.cambios;
    const envioForm = resultado.envioForm;

    return(
        <div className="one-half column">
            <form onSubmit={envioForm}>
                <div>
                    <label>Nombre Mascota</label>
                </div>
                
                <div>
                    <InputText nombre="nombre" enCambio={cambios} placeHolder="Nombre mascota"></InputText>
                </div>
                
                <div>
                    <label>Nombre Dueño</label>
                </div>

                <div>
                    <InputText nombre="propietario" enCambio={cambios} placeHolder="Nombre dueño de la mascota"></InputText>
                </div>
                
                <div>
                    <label>Fecha</label>
                </div>

                <div>
                    <input type="date" onChange={cambios} name="fecha" className="u-full-width" />
                </div>

                <div>
                    <label>Hora</label>
                </div>

                <div>
                    <input type="time" onChange={cambios} name="hora" className="u-full-width" />
                </div>

                <div>
                    <label>Sintomas</label>
                </div>

                <div>
                    <textarea name="sintomas" onChange={cambios} className="u-full-width"></textarea>
                </div>

                <div>
                    <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
                </div>
            </form>
        </div>
    )
}
export default Formulario
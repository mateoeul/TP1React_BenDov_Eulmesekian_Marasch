import React from "react";
import InputText from "../inputText/inputText.jsx";  
import './formulario.css'

const Formulario = () => {
    return(
        <div className="one-half column">
            <form>
                <div>
                    <label>Nombre Mascota</label>
                </div>
                
                <div>
                    <InputText nombre="nombre" placeHolder="Nombre mascota"></InputText>
                </div>
                
                <div>
                    <label>Nombre Dueño</label>
                </div>

                <div>
                    <InputText nombre="propietario" placeHolder="Nombre dueño de la mascota"></InputText>
                </div>
                
                <div>
                    <label>Fecha</label>
                </div>

                <div>
                    <input type="date" name="fecha" className="u-full-width" />
                </div>

                <div>
                    <label>Hora</label>
                </div>

                <div>
                    <input type="time" name="hora" className="u-full-width" />
                </div>

                <div>
                    <label>Sintomas</label>
                </div>

                <div>
                    <textarea name="sintomas" className="u-full-width"></textarea>
                </div>

                <div>
                    <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
                </div>
            </form>
        </div>
    )
}
export default Formulario
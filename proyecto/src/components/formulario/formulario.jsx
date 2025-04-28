import React from "react";
import './formulario.css'
const Formulario = () => {
    return(
        <div className="one-half column">
            <div>
                <h2>Crear mi Cita</h2>
            </div>

            <form>
                <div>
                    <label>Nombre Mascota</label>
                </div>
                
                <div>
                    <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" />
                </div>
                
                <div>
                    <label>Nombre Dueño</label>
                </div>

                <div>
                    <input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota" />
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
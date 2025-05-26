import './tarjetaCita.css';
import Boton from "../boton/boton.jsx";

const TarjetaCita = (props) => {
    return (
        <div className="cita" id={props.id}>
            <p>Mascota: <span>{props.nombre}</span></p>
            <p>Dueño: <span>{props.dueño}</span></p>
            <p>Fecha: <span>{props.fecha}</span></p>
            <p>Hora: <span>{props.hora}</span></p>
            <p>Síntomas: <span>{props.sintomas}</span></p>

            {/* Le pasamos la función de eliminar al botón */}
            <Boton onClick={() => props.onEliminar(props.id)}>Eliminar</Boton>
        </div>
    );
};

export default TarjetaCita;
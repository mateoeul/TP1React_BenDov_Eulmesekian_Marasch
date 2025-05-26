import InputText from "../inputText/inputText.jsx";
import "./formulario.css";
import { useFormularioCita } from "../../hooks/useFormularioCita.jsx";

const Formulario = ({ onAgregarCita }) => {
  const { formulario, cambios, setFormulario } = useFormularioCita();

  const envioForm = (event) => {
    event.preventDefault();
    onAgregarCita(formulario);

    // Limpiar formulario después de enviar
    setFormulario({
      nombre: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: ""
    });
  };

  return (
    <div className="one-half column">
      <form onSubmit={envioForm}>
        <div>
          <label>Nombre Mascota</label>
          <InputText
            nombre="nombre"
            enCambio={cambios}
            placeHolder="Nombre mascota"
            valor={formulario.nombre}
          />
        </div>

        <div>
          <label>Nombre Dueño</label>
          <InputText
            nombre="propietario"
            enCambio={cambios}
            placeHolder="Nombre dueño de la mascota"
            valor={formulario.propietario}
          />
        </div>

        <div>
          <label>Fecha</label>
          <input
            type="date"
            name="fecha"
            onChange={cambios}
            value={formulario.fecha}
            className="u-full-width"
          />
        </div>

        <div>
          <label>Hora</label>
          <input
            type="time"
            name="hora"
            onChange={cambios}
            value={formulario.hora}
            className="u-full-width"
          />
        </div>

        <div>
          <label>Sintomas</label>
          <textarea
            name="sintomas"
            onChange={cambios}
            value={formulario.sintomas}
            className="u-full-width"
          ></textarea>
        </div>

        <div>
          <button type="submit" className="u-full-width button-primary">
            Agregar Cita
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
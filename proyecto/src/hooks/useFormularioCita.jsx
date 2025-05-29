import { useState } from "react";

export const useFormularioCita = () => {
  const [formulario, setFormulario] = useState({
    nombre: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: ""
  });

  const cambios = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    });
  };

  return { formulario, cambios, setFormulario };
};

import { useState, useEffect } from 'react';
import './App.css';
import TarjetaCita from './components/tarjetaCita/tarjetaCita.jsx';
import Formulario from './components/formulario/formulario.jsx';

function App() {
  const [citas, setCitas] = useState(() => {
    const citasGuardadas = localStorage.getItem('citas');
    return citasGuardadas ? JSON.parse(citasGuardadas) : [];
  });

  // ✅ Leer del localStorage al cargar la app
  useEffect(() => {
    const citasGuardadas = JSON.parse(localStorage.getItem('citas'));
    if (citasGuardadas) {
      setCitas(citasGuardadas);
    }
  }, []);

  // ✅ Guardar en localStorage cada vez que se actualicen las citas
  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(citas));
  }, [citas]);

  const agregarCita = (citaNueva) => {
    setCitas([...citas, citaNueva]);
  };

  const eliminarCita = (indiceAEliminar) => {
    const nuevasCitas = citas.filter((_, index) => index !== indiceAEliminar);
    setCitas(nuevasCitas);
  };

  return (
    <div className="container">
      <h1>Administrador de pacientes</h1>
      <div className="row">
        <div className="one-half column">
          <h2>Crear cita</h2>
          <Formulario onAgregarCita={agregarCita} />
        </div>
        <div className="one-half column">
          <h2>Administra tus citas</h2>
          {citas.map((cita, index) => (
            <TarjetaCita
              key={index}
              id={index}
              nombre={cita.nombre}
              dueño={cita.propietario}
              fecha={cita.fecha}
              hora={cita.hora}
              sintomas={cita.sintomas}
              onEliminar={eliminarCita}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

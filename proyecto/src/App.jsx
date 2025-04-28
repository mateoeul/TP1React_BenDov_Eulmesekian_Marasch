import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TarjetaCita from './components/tarjetaCita/tarjetaCita.jsx'
import Formulario from './components/formulario/formulario.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container'>
    <h1>Administrados de pacientes</h1>
      <div className='row'>
        <div className='one-half column'>
          <h1>Crear cita</h1>
          <Formulario></Formulario>
        </div>
        <div className='one-half column'>
          <h1>Administra tus citas</h1>
          <TarjetaCita nombre="Volo" dueño="Ciro" fecha="9/12/2018" hora="11pm" sintomas="le duele el pie"></TarjetaCita>
          <TarjetaCita nombre="chechu" dueño="Eric" fecha="11/2/2001" hora="16pm" sintomas="zarpullido en la piel"></TarjetaCita>
          <TarjetaCita nombre="wicnu" dueño="Tute" fecha="11/11/2007" hora="10am" sintomas="dolor de cabeza"></TarjetaCita>

        </div>
      </div>
    </div>
    </>
  )
}

export default App

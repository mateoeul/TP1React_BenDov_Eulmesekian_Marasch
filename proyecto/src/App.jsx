import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TarjetaCita from './components/tarjetaCita/tarjetaCita.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='one-half column'>

        </div>
        <div className='one-half column'>
          <TarjetaCita></TarjetaCita>
        </div>
      </div>
    </div>
    </>
  )
}

export default App

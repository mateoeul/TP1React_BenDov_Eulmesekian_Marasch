import { useState } from "react"

export const agregarCita = () => {
    
    const [formulario, setFormulario] = useState({
        nombre: '',
        propietario: "",
        fecha: "",
        hora: "",
        sintomas: ""
    })

    const cambios = (e) => {
        setFormulario({
            ...formulario, 
            [e.target.name]: e.target.value
        })
    }

    const envioForm = (event) =>{
        event.preventDefault()
        console.log(formulario)
    }

    return{
        formulario, cambios, envioForm
    } 
}
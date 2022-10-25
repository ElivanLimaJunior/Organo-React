import { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder} . . .`

    // let valor = 'Elivan'

    const [valor, setValor] = useState('Elivan Junior')

    const aoDigitar = (evento) => {
        setValor(evento.target.value)
        console.log(valor)
    }

    return (
        <div className="campo-texto">
            <label htmlFor="">
                {props.label}
            </label>
            <input value={valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={placeholderModificada} type="text" />
        </div>
    )
}

export default CampoTexto
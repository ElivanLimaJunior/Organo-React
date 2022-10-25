import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder} . . .`

    const aoDigitar = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label htmlFor="">
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={placeholderModificada} type="text" />
        </div>
    )
}

export default CampoTexto
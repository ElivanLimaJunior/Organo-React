import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder} . . .`

    return (
        <div className="campo-texto">
            <label htmlFor="">
                {props.label}
            </label>
            <input required={props.obrigatorio} placeholder={placeholderModificada} type="text" />
        </div>
    )
}

export default CampoTexto
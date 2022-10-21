import './CampoTexto.css'

const CampoTexto = () => {
    return (
        <div className="campo-texto">
            <label htmlFor="">Nome</label>
            <input placeholder='Digite o seu nome' type="text" />
        </div>
    )
}

export default CampoTexto
import './Colaborador.css'

export const Colaborador = ({ nome, cargo,  imagem}) => { // Desestruturação, operador para desestruturar um objeto. Dessa forma achei + fácil.
    return (
        <div className='colaborador'>
            <div className='cabecalho'>
                <img src={imagem} alt={imagem} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}
import './ListaSuspensa.css'

export const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.value}>
                {props.itens.map(item => {
                    //cada chave precisa de uma key, então estamos usando o nome do item como a key.
                    return <option key={item}>{item}</option> 
                })}
            </select>
        </div>
    )
}
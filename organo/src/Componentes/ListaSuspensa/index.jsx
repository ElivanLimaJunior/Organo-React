import './ListaSuspensa.css'

export const ListaSuspensa = (props) => {
    console.log(props.itens)
    
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select>
                {props.itens.map(item => {
                    //cada chave precisa de uma key, então estamos usando o nome do item como a key.
                    return <option key={item}>{item}</option> 
                })}
            </select>
        </div>
    )
}
import './Time.css'

export const Time = (props) => {
    // Existem duas maneiras de colocarmos estilos inline no REACT.
    // A primeira forma é criamos uma variavel como está da linha 6, e colocarmos a variavel no style.
    const css = { backgroundColor: props.corSecundaria }
    // A outra forma é abrirmos um objeto dentro do style e digitar o style.
    return (

        <section className='time' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        </section>
    )
}
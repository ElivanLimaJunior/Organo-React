import { Botao } from '../Botao/Index'
import CampoTexto from '../CampoTexto'
import { ListaSuspensa } from '../ListaSuspensa'
import './form.css'

export const Formulario = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Scrience',
        'Devops',
        'UX e Desing',
        'Mobile',
        'Inovação e Gestão'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Form foi submetido')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa label="Time" itens={times} />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}
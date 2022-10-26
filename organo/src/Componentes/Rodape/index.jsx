import './Rodape.css'

export const Rodape = () => {
    return (
        <footer className='Rodape'>
            <ul>
                <a href="https://">
                    <img src="/imagens/facebook.png" alt="Facebook" />
                </a>
                <a href="https://">
                    <img src="/imagens/tw.png" alt="Twiter" />
                </a>
                <a href="https://">
                    <img src="/imagens/ig.png" alt="Instagram" />
                </a>
            </ul>
            <div>
                <img src="/imagens/logo.png" alt="Logo" />
            </div>
            <div>
                <p>Desenvolvido por Alura.</p>
            </div>
        </footer>
    )
}
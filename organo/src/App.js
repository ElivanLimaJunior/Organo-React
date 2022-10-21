import Banner from './Componentes/Banner/';
import CampoTexto from './Componentes/Formulario';

function App() {
  return (
    <div className='app'>
      <Banner/>
      <CampoTexto label="Nome" placeholder="Digite seu nome"/>
      <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
      <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
    </div>
  )
}

export default App
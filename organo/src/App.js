import { useState } from 'react';
import Banner from './Componentes/Banner/';
import { Formulario } from './Componentes/Formulário';

function App() {

const [colaboradores, setColaboradores] = useState([])

const aoNovoColaboradorAdicionado = (colaborador) => {
  console.log(colaborador)
  setColaboradores([...colaboradores, colaborador])
} 

  return (
    <div className='app'>
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
    </div>
  )
}

export default App
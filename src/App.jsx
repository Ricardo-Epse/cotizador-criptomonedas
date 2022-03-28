import { useState, useEffect} from 'react'
import styled from '@emotion/styled'
import { Formulario } from './components/Formulario'
import { Resultado } from './components/Resultado'
import { Spinner } from './components/Spinner'

const Heading = styled.h1`
  font-family: 'Lato', sants-serif;
  color: Black;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin bottom: 50px;
  font-size: 34px;
  `

const Contenedor = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  
`

function App() {
  const[ monedas, setMonedas ] = useState({})
  const[ resultado, setResultado ] = useState({})
  const[ cargando, setCargando ] = useState(false)


  useEffect(() => {

    if(Object.keys(monedas).length > 0){

      
      
      const cotizar = async()=>{

        setCargando(true)
        setResultado({})

        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${monedas.criptoCoin}&tsyms=${monedas.moneda}`
        
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        setResultado(resultado.DISPLAY[monedas.criptoCoin][monedas.moneda])

        setCargando(false)
      }

      cotizar();

    }
    
  }, [monedas])
  

  return (

    <Contenedor>

      <Heading> Cotiza criptomonedas </Heading>
      {/* {cargando &&  <Spinner />} */}
      <Formulario setMonedas = {setMonedas}/>


      
      {resultado.PRICE && <Resultado resultado = {resultado} />}
      

    </Contenedor>
  )
}

export default App

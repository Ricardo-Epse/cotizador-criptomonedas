import React, {useState, useEffect} from 'react'
import styled from '@emotion/styled';
import {useMonedas} from '../hooks/useMonedas';
import { monedas } from '../monedas/monedas';
import { Error } from './Error';




const InputSubmit = styled.input`
  background-color: #9497FF;
  border: none;
  width: 100%;
  padding: 15px;
  color: #FFF;
  font-weight: 700;
  font-size: 18px;
  border-radius: 5px;
  transition: background-color .3s ease;
  text-transform: uppercase

  &:hover {
    background-color: #7A7DFE;
  }
`

export const Formulario = ({setMonedas}) => {

  const [cripto,setCripto] = useState([]);
  const [error,setError] = useState([]);

  const [ moneda, SelectMonedas ] = useMonedas('Moneda', monedas)
  const [ criptoCoin, SelectCripto ] = useMonedas('Cripto', cripto)

  useEffect(() => {
    const consultaAPI = async () => {
      const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      const arrayCriptos = resultado.Data.map( criptomoneda => {
        const objeto = {
          id: criptomoneda.CoinInfo.Name,
          nombre: criptomoneda.CoinInfo.FullName
        }
            return objeto
      })
      setCripto(arrayCriptos)
    }

    consultaAPI();
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    if([moneda, criptoCoin].includes('')){
      setError(true)

      return
    }
    setError(false)
    setMonedas({
      moneda,
      criptoCoin
    })
    
  }



  return (
    <>
    { error && <Error> Deben de validarse todos los campos </Error> }
    <form onSubmit={handleSubmit}>
        <SelectMonedas />
        <SelectCripto /> 

        <InputSubmit 
        type="submit" 
        value="Cotizar"
        />

    </form>
    </>
  )
}

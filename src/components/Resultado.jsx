import React from 'react'
import styled from '@emotion/styled';

const PRINCIPAL = styled.div`
    font-family: 'Lato', sans-serif;
    text-align: center;
    align-items: center;
`

const MOSTRAR = styled.p`
    font-size: 25px;
    span{
        font-weight: 700;
    }
`

const PRECIO = styled.p`
    font-size: 35px;
    span{
        font-weight: 700;
    }
`

const IMAGEN = styled.img`
    text-align: center;
    width: 120px;
`


export const Resultado = ({resultado}) => {

  const {PRICE, HIGH24HOUR, LOWDAY, IMAGEURL} = resultado;
  return (
    <PRINCIPAL>
    
            <PRECIO>El precio es de  <span>{PRICE}</span></PRECIO>
            <MOSTRAR>El precio más alto del día:  <span>{HIGH24HOUR}</span></MOSTRAR>
            <MOSTRAR>El precio más bajo del día <span>{LOWDAY}</span></MOSTRAR>
        <IMAGEN src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen de criptomoneda" />
    </PRINCIPAL>
  )
}

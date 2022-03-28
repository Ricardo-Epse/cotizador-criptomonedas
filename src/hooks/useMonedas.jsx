import React, {useState} from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
    color: Black;
    display: block;
    font-family: 'Lato', sanf-serif;
    font-size: 28px;
    font-weight: 700;
    margin: 15px 0;
`

const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 18px; 

`


export const useMonedas = (label, monedas) => {
    
    const [state, setState] = useState('')
    
    const SelectMonedas = () => (
        <>
            <Label>{label}</Label>
            <Select
            value={state}
            onChange = { e => setState(e.target.value) }
            >
                <option value=""> Seleccione {label} </option>
                {monedas.map( moneda =>(
                    <option
                        key={moneda.id}
                        value={moneda.id}
                    >
                        {moneda.nombre}
                    </option>
                ))}
            </Select>
        </>
    )


  return [ state, SelectMonedas]
}

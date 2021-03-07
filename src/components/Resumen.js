import React from 'react';
import styled from '@emotion/styled';
import PropTypes from  'prop-types';
import {primerMayuscula} from './helper';


const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838f;
    color: #fff;
    margin-top: 1rem;
`;

const Resumen = ({datos}) => {

    // extraer de datos
    const {marca, year, plan}= datos;

    if(marca === '' || year === '' || plan === '') return null;

    return ( 
        <ContenedorResumen>
        <h2>Resumen de cotizacion</h2>
        <ul>
            <li>Marca: { primerMayuscula(marca)}</li>
            <li>Plan: {  primerMayuscula(plan)}</li>
            <li>Año del Auto: {year} </li>
        </ul>
        </ContenedorResumen>
     );
}

Resumen.prototypes = {
    datos:PropTypes.object.isRequired
}
 
export default Resumen;
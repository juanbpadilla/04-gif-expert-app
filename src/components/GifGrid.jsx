import PropTypes from 'prop-types'
import { getGifts } from '../helpers/getGifs';
import { useState, useEffect } from 'react';


/**
 * en este componente vamos a mostrar los gifs de la categoría que se le pase por parámetro.
 * pero estamos incurriendo en un error, estamos llamando a la función gefGifts(category) fuera de un useEffect.
 * lo cual es una mala práctica, porque estamos haciendo una petición a la API de Giphy cada vez que se renderiza el componente.
 * lo correcto sería llamar a la función gefGifts(category) dentro de un useEffect.
 * 
 * useEffect es un hook que nos permite ejecutar efectos secundarios en componentes funcionales.
 * ..es decir, nos permite ejecutar código que no tiene que ver con la representación del componente.
 * 
 * useEffect recibe dos argumentos: una función y un arreglo de dependencias.
 * ..la función que recibe useEffect se ejecuta cada vez que el componente se renderiza.
 * ..y el arreglo de dependencias es un arreglo que contiene las variables que useEffect debe observar.
 * si el arreglo de dependencias está vacío, la función que recibe useEffect se ejecuta solo una vez, cuando el componente se monta.
 * 
 * 
 * 
 * @param {*} param0 
 * @returns 
 */
export const GifGrid = ({ category }) => {

  const [counter, setCounter] = useState(10)

  useEffect( () => {
    getGifts(category);
  }, [])
  

  return (
    <>
      <h3>{ category }</h3>
      <h5>{ counter }</h5>
      <button onClick={() => setCounter(counter+1)}>+1</button>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}
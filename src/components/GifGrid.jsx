import PropTypes from 'prop-types'
import { gefGifts } from '../helpers/getGifs';


/**
 * en este componente vamos a mostrar los gifs de la categoría que se le pase por parámetro.
 * pero estamos incurriendo en un error, estamos llamando a la función gefGifts(category) fuera de un useEffect.
 * lo cual es una mala práctica, porque estamos haciendo una petición a la API de Giphy cada vez que se renderiza el componente.
 * lo correcto sería llamar a la función gefGifts(category) dentro de un useEffect.
 * 
 * @param {*} param0 
 * @returns 
 */
export const GifGrid = ({ category }) => {
  
  gefGifts(category);

  return (
    <>
      <h3>{ category }</h3>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}
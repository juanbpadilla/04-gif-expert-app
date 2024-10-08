import PropTypes from 'prop-types'

import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


/**
 * GifGrid recibe una categoría como propiedad y muestra los gifs de esa categoría.
 * 
 * En este punto estamos usando el custom hook "useFetchGifs" para obtener los gifs de la categoría,
 * este recibe una categoría como parámetro y se encarga de obtener los gifs de esa categoría, 
 * "useFetchGifs" retorna un objeto con las propiedades images y isLoading.
 * 
 * Se hace uso del componente "GifItem" para mostrar los gifs.
 * "GifItem" recibe como propiedad un gif con las propiedades id, title y url.  
 * Usamos el operador spread para pasar todas las propiedades del gif como propiedades independientes
 * y este componente se encarga de mostrar la imagen y el título del gif.
 * 
 * @param {string} category 
 * @returns 
 */
export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category );  

  /**
   * Retornamos un fragmento con el título de la categoría y un mensaje de carga.
   * Si isLoading es true, mostramos un mensaje de carga.
   * ..esto nos permite mostrar un mensaje de carga mientras se obtienen los gifs.
   * 
   * Luego mostramos un div con la clase "card-grid" que contiene los componentes GifItem.
   * Usamos el método map para recorrer el arreglo de gifs y retornar un componente GifItem por cada gif.
   * 
   * @returns
   */
  return (
    <>
      <h3>{ category }</h3>
      {
        isLoading && ( <h2>Cargando...</h2> )
      }

      <div className='card-grid'>
        {
          /**
           * images es un arreglo de gifs que se obtiene de la API de Giphy.
           * ..usamos el método map para recorrer el arreglo de gifs y retornar un componente GifItem por cada gif.
           * 
           * GifItem recibe como propiedad un gif con las propiedades id, title y url.
           * ..usamos el operador spread para pasar todas las propiedades del gif como propiedades independientes.
           * ..a esto se le conoce como "propiedades dinámicas" o "esparcimiento de propiedades". { ...image }
           * ..esto nos permite usar las propiedades del gif como propiedades independientes en el componente GifItem.
           * { ...image } es equivalente a { id={ image.id } title={ image.title } url={ image.url } }
           * 
           * @param {*} image
           * @returns
           */
          images.map(( image ) => (
            <GifItem 
              key={ image.id }
              { ...image }
            />
          ))
        }
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}